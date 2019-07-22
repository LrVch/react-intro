import { ofType, combineEpics } from 'redux-observable';
import {
  map,
  catchError,
  exhaustMap,
  tap,
  switchMap,
  takeUntil,
} from 'rxjs/operators'
import { defer, of, timer, empty } from 'rxjs';
import jwt from 'jsonwebtoken'
import { AUTH_REQUEST, authSuccess, authFail, authLoggedLocal, AUTH_SUCCESS, authGetUserSuccess, authGetUserFail, AUTH_LOGOUT, AUTH_LOGGEG_LOCAL, authRefreshTokenFail, AUTH_REFRESH_TOKEN_FAIL, authLogout, authRefreshTokenRequest, AUTH_REFRESH_TOKEN_REQUEST, authRefreshTokenSuccess, AUTH_REFRESH_TOKEN_SUCCESS } from '../actions';
import ErrorNotifyService from '../../services/errorNotify.service';
import AuthService from '../../services/auth.service';
import LocalStorageService from '../../services/localStorage.service'

export const init$ = () => defer(() => {
  const idToken = LocalStorageService.getToken()
  const decoded = jwt.decode(idToken, { complete: true })
  const isValid = decoded && (decoded.payload.exp * 1000) > Date.now()

  // console.log(decoded)

  if (isValid) {
    const { email } = decoded.payload
    return of(authLoggedLocal(email, idToken))
  } else {
    LocalStorageService.destroyToken()
  }
})

export const authRequest$ = (action$, state$) => action$.pipe(
  ofType(AUTH_REQUEST),
  exhaustMap(action => {
    const { authType, credentials, actions, history } = action.payload
    return AuthService.authenticate(
      authType,
      credentials
    ).pipe(
      map(({ idToken, email, refreshToken, expiresIn }) => {
        const decoded = jwt.decode(idToken, { complete: true })

        // console.log(decoded)
        const verified = decoded.payload.email_verified;
        // if (!verified) {
        //   const error = JSON.stringify(
        //     {
        //       response: {
        //         data: {
        //           error: {
        //             errors: [
        //               {
        //                 message: 'Email is not verified'
        //               }
        //             ]
        //           }
        //         }
        //       }
        //     }
        //   )
        //   throw(new Error(error))
        // }

        return authSuccess(
          email,
          idToken,
          expiresIn,
          refreshToken,
        )
      }),
      catchError(error => {
        const err = !error.response ? JSON.parse(error.message) : error

        ErrorNotifyService.sendNetworkErrorDetails({
          module: module.id,
          method: 'authRequest$',
          error: err.response.data.error.errors,
        })
        actions.setSubmitting(false)
        return of(authFail(err.response.data.error.errors))
      })
    )
  })
)

export const authGetUserData$ = (action$, state$) => action$.pipe(
  ofType(AUTH_SUCCESS, AUTH_LOGGEG_LOCAL),
  switchMap(({ payload }) => AuthService.getUserInfo(payload.idToken).pipe(
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
  ofType(AUTH_SUCCESS, AUTH_REFRESH_TOKEN_SUCCESS),
  tap(({ payload }) => {
    const { idToken, refreshToken, expiresIn } = payload
    LocalStorageService.saveToken(idToken, refreshToken, expiresIn)
  }),
  switchMap(() => empty())
)

export const authRefreshToken$ = (action$, state$) => action$.pipe(
  ofType(AUTH_SUCCESS, AUTH_LOGGEG_LOCAL, AUTH_REFRESH_TOKEN_SUCCESS),
  map(() => LocalStorageService.getFullToken()),
  // tap((info) => console.log(info.refreshToken)),
  // tap((info) => console.log((info.expiresAt - Date.now()) / 1000 / 60)),
  // tap((info) => console.log((info.expiresAt - Date.now() - (3480 * 1000) )/ 1000 / 60)),
  switchMap(info => timer(Math.max(1, info.expiresAt - Date.now())).pipe(
    // tap(() => console.log(info.refreshToken)),
    switchMap(() => AuthService.refreshToken(info.refreshToken).pipe(
      // tap(console.log),
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
  tap(({ payload }) => {
    LocalStorageService.destroyToken()
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
  authRefreshTokenFail$
)

export default auth$