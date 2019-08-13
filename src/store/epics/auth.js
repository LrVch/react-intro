import { ofType, combineEpics } from 'redux-observable'
import {
  map,
  catchError,
  exhaustMap,
  tap,
  switchMap,
  takeUntil,
  pluck,
  finalize,
  filter,
} from 'rxjs/operators'
import { defer, of, timer, empty } from 'rxjs'
import jwt from 'jsonwebtoken'
import {
  AUTH_REQUEST,
  authSuccess,
  authFail,
  authLoggedLocal,
  AUTH_SUCCESS,
  authGetUserSuccess,
  authGetUserFail,
  AUTH_LOGOUT,
  AUTH_LOGGEG_LOCAL,
  authRefreshTokenFail,
  AUTH_REFRESH_TOKEN_FAIL,
  authLogout,
  authRefreshTokenSuccess,
  AUTH_REFRESH_TOKEN_SUCCESS,
  AUTH_UPDATE_USER_REQUEST,
  authUpdateUserSuccess,
  authUpdateUserFail,
  authNotConfirmed,
  AUTH_NOT_CONFIRMED,
  AUTH_VERIFY_EMAIL_REQUEST,
  authVerifyEmailFail,
  authVerifyEmailSuccess,
  authVerifyEmailRequest,
  AUTH_LEAVE_LOGIN
} from '../actions';
import ErrorNotifyService from '../../services/errorNotify.service'
import AuthService from '../../services/auth.service'
import LocalStorageService from '../../services/localStorage.service'
import CookieService from '../../services/cookie.service'

export const init$ = () => defer(() => {
  const token = LocalStorageService.getFullToken()
  const decoded = jwt.decode(token.idToken, { complete: true })
  const isValid = decoded && (decoded.payload.exp * 1000) > Date.now()

  if (isValid) {
    const verified = decoded.payload.email_verified
    const { email, user_id } = decoded.payload

    if (verified) {
      return of(authLoggedLocal(email, token.idToken, user_id))
    } else {
      return of(authNotConfirmed(
        email,
        token.idToken,
        token.expiresIn,
        token.refreshToken,
        user_id,
      ))
    }
  } else {
    return of(authLogout())
  }
})

export const authRequest$ = (action$, state$) => action$.pipe(
  ofType(AUTH_REQUEST),
  exhaustMap(action => {
    const { authType, credentials, actions } = action.payload
    return AuthService.authenticate(
      authType,
      credentials
    ).pipe(
      map(({ idToken, email, refreshToken, expiresIn, localId }) => {
        const decoded = jwt.decode(idToken, { complete: true })
        const verified = decoded.payload.email_verified

        if (verified) {
          return authSuccess(
            email,
            idToken,
            expiresIn,
            refreshToken,
            localId,
          )
        } else {
          return authNotConfirmed(
            email,
            idToken,
            expiresIn,
            refreshToken,
            localId,
            authType
          )
        }
      }),
      catchError(error => {
        ErrorNotifyService.sendNetworkErrorDetails({
          module: module.id,
          method: 'authRequest$',
          error: error.response.data.error.errors,
        })
        return of(authFail(error.response.data.error.errors))
      }),
      finalize(() => {
        actions.setSubmitting(false)
      })
    )
  })
)

export const authNotConfirmed$ = (action$, state$) => action$.pipe(
  ofType(AUTH_NOT_CONFIRMED),
  pluck('payload'),
  filter(auth => auth.authType),
  tap(console.log),
  map(({ authType }) => {
    if (authType === '/signup') {
      return authVerifyEmailRequest()
    } else {
      return authFail([{ message: 'Email is not verified' }])
    }
  })
)

export const authGetUserData$ = (action$, state$) => action$.pipe(
  ofType(AUTH_SUCCESS, AUTH_LOGGEG_LOCAL),
  pluck('payload'),
  switchMap(({ idToken }) => AuthService.getUserInfo(idToken).pipe(
    map(({ users }) => {
      const { email, displayName, photoUrl } = users[0]
      const user = {
        email, displayName, photoUrl
      }
      return authGetUserSuccess(user)
    }),
    catchError(error => {
      ErrorNotifyService.sendNetworkErrorDetails({
        module: module.id,
        method: 'authGetUserData$',
        error: error.response.data.error.errors,
      })
      return of(authGetUserFail(error.response.data.error.errors))
    })
  ))
)

export const authPresistToken$ = (action$, state$) => action$.pipe(
  ofType(AUTH_NOT_CONFIRMED, AUTH_SUCCESS, AUTH_REFRESH_TOKEN_SUCCESS),
  tap(({ payload }) => {
    const { idToken, refreshToken, expiresIn } = payload
    LocalStorageService.saveToken(idToken, refreshToken, expiresIn)
  }),
  switchMap(() => empty())
)

export const authRefreshToken$ = (action$, state$) => action$.pipe(
  ofType(AUTH_NOT_CONFIRMED, AUTH_SUCCESS, AUTH_LOGGEG_LOCAL, AUTH_REFRESH_TOKEN_SUCCESS),
  map(() => LocalStorageService.getFullToken()),
  // tap((info) => console.log(info.refreshToken)),
  // tap((info) => console.log((info.expiresAt - Date.now()) / 1000 / 60)),
  // tap((info) => console.log((info.expiresAt - Date.now() - (3480 * 1000) )/ 1000 / 60)),
  switchMap(info => timer(Math.max(1, info.expiresAt - Date.now())).pipe(
    switchMap(() => AuthService.refreshToken(info.refreshToken).pipe(
      map(({ id_token, refresh_token, expires_in }) => authRefreshTokenSuccess(
        id_token, refresh_token, expires_in
      )),
      catchError(error => {
        ErrorNotifyService.sendNetworkErrorDetails({
          module: module.id,
          method: 'authRefreshToken$',
          error: error.response.data.error.errors,
        })
        return of(authRefreshTokenFail(error.response.data.error.errors))
      })
    )),
    takeUntil(action$.pipe(ofType(AUTH_LOGOUT)))
  )),
)

export const authRefreshTokenFail$ = (action$, state$) => action$.pipe(
  ofType(AUTH_REFRESH_TOKEN_FAIL),
  map(() => authLogout())
)

export const authLogout$ = (action$, state$) => action$.pipe(
  ofType(AUTH_LOGOUT),
  tap(_ => {
    LocalStorageService.destroyToken()
    CookieService.deleteCookie('au')
  }),
  switchMap(() => empty())
)

export const authUpdateUserData$ = (action$, state$) => action$.pipe(
  ofType(AUTH_UPDATE_USER_REQUEST),
  pluck('payload'),
  map(payload => ({ ...payload, idToken: LocalStorageService.getToken() })),
  exhaustMap(({ idToken, displayName, photoUrl, actions }) =>
    AuthService.updateProfile(idToken, displayName, photoUrl).pipe(
      map(user => {
        const { displayName, photoUrl } = user

        return authUpdateUserSuccess(displayName, photoUrl)
      }),
      catchError(error => {
        ErrorNotifyService.sendNetworkErrorDetails({
          module: module.id,
          method: 'authUpdateUserData$',
          error: error.response.data.error.errors,
        })
        return of(authUpdateUserFail(error.response.data.error.errors))
      }),
      finalize(() => {
        actions.setSubmitting(false)
      })
    ))
)

export const authVerifyEmailRequest$ = (action$, state$) => action$.pipe(
  ofType(AUTH_VERIFY_EMAIL_REQUEST),
  pluck('payload'),
  map(() => LocalStorageService.getToken()),
  exhaustMap(idToken =>
    AuthService.verifyEmail(idToken).pipe(
      map(_ => authVerifyEmailSuccess()),
      takeUntil(action$.pipe(ofType(AUTH_LEAVE_LOGIN))),
      catchError(error => {
        ErrorNotifyService.sendNetworkErrorDetails({
          module: module.id,
          method: 'authVerifyEmailRequest$',
          error: error.response.data.error.errors,
        })
        return of(authVerifyEmailFail(error.response.data.error.errors))
      })
    )
  )
)

export const authSetCookie$ = (action$, state$) => action$.pipe(
  ofType(AUTH_SUCCESS, AUTH_REFRESH_TOKEN_SUCCESS),
  tap(({ payload }) => {
    const {  expiresIn } = payload
    const date = new Date(expiresIn * 1000 + Date.now())
    CookieService.setCookie('au', true, {expires: date})
  }),
  switchMap(() => empty())
)

const auth$ = combineEpics(
  init$,
  authRequest$,
  authGetUserData$,
  authPresistToken$,
  authLogout$,
  authRefreshToken$,
  authRefreshTokenFail$,
  authUpdateUserData$,
  authNotConfirmed$,
  authVerifyEmailRequest$,
  authSetCookie$,
)

export default auth$