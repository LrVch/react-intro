import { ofType, combineEpics } from 'redux-observable';
import {
  switchMap,
  map,
  catchError,
  exhaustMap,
  mapTo,
  takeUntil,
  // tap,
  withLatestFrom
} from 'rxjs/operators'
import {of, timer } from 'rxjs';
import BurgerService from '../../services/burger.service'
import {
  ordersSuccess,
  ordersFail,
  ORDERS_RETRY,
  ordersRequest,
  ORDERS_REQUEST,
  ORDERS_REQUES_ABORT
} from '../actions';
import ErrorNotifyService from '../../services/errorNotify.service';
import { localId } from '../selectors/auth'


export const ordersRetry$ = (action$, state$) => action$.pipe(
  ofType(ORDERS_RETRY),
  exhaustMap(() => timer(1000).pipe(
    mapTo(ordersRequest())
  ))
)

export const ordersRequest$ = (action$, state$) => action$.pipe(
  ofType(ORDERS_REQUEST),
  withLatestFrom(state$),
  map(([action, state]) => localId(state)),
  switchMap(localId => BurgerService.getOrders(localId).pipe(
    map(orders => ordersSuccess(orders || {})),
    takeUntil(action$.pipe(ofType(ORDERS_REQUES_ABORT))),
    catchError(error => {
      ErrorNotifyService.sendNetworkErrorDetails({
        module: module.id,
        method: 'ordersRequest$',
        error,
      })
      return of(ordersFail(error))
    })
  ))
)



const orders$ = combineEpics(
  ordersRequest$,
  ordersRetry$
)

export default orders$