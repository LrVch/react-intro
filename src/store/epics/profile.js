import { ofType, combineEpics } from 'redux-observable';
import {
  map,
  catchError,
  exhaustMap,
  withLatestFrom,
  // tap,
  switchMap,
  pluck,
  mergeMap,
} from 'rxjs/operators'
import { of, empty, from, } from 'rxjs';
import ErrorNotifyService from '../../services/errorNotify.service';
import { PROFILE_DELETE_REQUEST, profileDeleteFail, authLogout, profileDeleteSuccess, PROFILE_DELETE_SUCCESS } from '../actions';
import LocalStorageService from '../../services/localStorage.service';
import AuthService from '../../services/auth.service';
import BurgerService from '../../services/burger.service';
import { localId } from '../selectors/auth';

export const profileDeleteRequest$ = (action$, state$) => action$.pipe(
  ofType(PROFILE_DELETE_REQUEST),
  map(() => LocalStorageService.getToken()),
  exhaustMap(idToken =>
    AuthService.deleteUser(idToken, 2).pipe(
      withLatestFrom(state$),
      map(([_, state]) => ({ idToken, localId: localId(state) })),
      map(({ idToken, localId }) => profileDeleteSuccess(idToken, localId)),
      catchError(error => {
        ErrorNotifyService.sendNetworkErrorDetails({
          module: module.id,
          method: 'profileDeleteRequest$',
          error: error.response.data.error.errors,
        })
        return of(profileDeleteFail(error.response.data.error.errors))
      }),
    ))
)

export const logOut$ = (action$, state$) => action$.pipe(
  ofType(PROFILE_DELETE_SUCCESS),
  map(() => authLogout()),
)

export const deleteUserOrders$ = (action$, state$) => action$.pipe(
  ofType(PROFILE_DELETE_SUCCESS),
  pluck('payload'),
  exhaustMap(({ idToken, localId }) =>
    BurgerService.getOrders(localId, idToken).pipe(
      switchMap(orders => from(Object.keys(orders)).pipe(
        mergeMap(orderId => BurgerService.deleteOrder(idToken, orderId).pipe(
          catchError(error => {
            const res = error.response ? error.response.data.error.errors : error
            ErrorNotifyService.sendNetworkErrorDetails({
              module: module.id,
              method: 'deleteUsersOrders$',
              error: res,
            })
            return empty()
          }),
        ))
      )),
      switchMap(() => empty()),
      catchError(error => {
        ErrorNotifyService.sendNetworkErrorDetails({
          module: module.id,
          method: 'deleteUsersOrders$',
          error: error.response.data.error.errors,
        })
        return of(profileDeleteFail(error.response.data.error.errors))
      }),
    ))
)


const profile$ = combineEpics(
  profileDeleteRequest$,
  logOut$,
  deleteUserOrders$
)

export default profile$