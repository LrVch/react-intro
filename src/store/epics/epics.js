import { ofType, combineEpics } from 'redux-observable';
import { switchMap, map, catchError, exhaustMap, tap, mapTo, takeUntil, pluck, withLatestFrom } from 'rxjs/operators'
import { defer, forkJoin, of, timer } from 'rxjs';
import BurgerService from '../../services/burger.service'
import {
  INIT_STATE_REQUEST,
  initStateRequest,
  initStateSuccess,
  initStateFail,
  INIT_STATE_RETRY,
  ordersSuccess,
  ordersFail,
  ORDERS_RETRY,
  ordersRequest,
  ORDERS_REQUEST,
  ORDERS_REQUES_ABORT,
  ORDER_REQUEST,
  orderSuccess,
  orderFail
} from '../actions';
import ErrorNotifyService from '../../services/errorNotify.service';

export const init$ = () => defer(() => {
  return of(initStateRequest())
})

export const initStateRetry$ = (action$, state$) => action$.pipe(
  ofType(INIT_STATE_RETRY),
  exhaustMap(() => timer(1000).pipe(
    mapTo(initStateRequest())
  ))
)

export const initStateRequest$ = (action$, state$) => action$.pipe(
  ofType(INIT_STATE_REQUEST),
  switchMap(() => forkJoin(
    BurgerService.getFormConfig(2),
    BurgerService.getIngredients(2),
    BurgerService.getPrice(2)
  ).pipe(
    map(([config, ingredients, price]) => {
      return initStateSuccess({
        config,
        ingredients,
        price
      })
    }),
    catchError(error => {
      ErrorNotifyService.sendNetworkErrorDetails({
        module: module.id,
        method: 'initStateRequest$',
        error,
      })
      return of(initStateFail(error))
    })
  ))
)

export const ordersRetry$ = (action$, state$) => action$.pipe(
  ofType(ORDERS_RETRY),
  exhaustMap(() => timer(1000).pipe(
    mapTo(ordersRequest())
  ))
)

export const ordersRequest$ = (action$, state$) => action$.pipe(
  ofType(ORDERS_REQUEST),
  switchMap(() => BurgerService.getOrders(2).pipe(
    map(orders => ordersSuccess(orders)),
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

export const orderRequest$ = (action$, state$) => action$.pipe(
  ofType(ORDER_REQUEST),
  pluck('payload'),
  switchMap(({ order, actions, history }) =>
    BurgerService.sendOrder(order).pipe(
      map(order => orderSuccess(order)),
      tap(() => {
        history.push('/')
      }),
      catchError(error => {
        ErrorNotifyService.sendNetworkErrorDetails({
          module: module.id,
          method: 'orderRequest$',
          error,
        })
        actions.setSubmitting(false)
        return of(orderFail(error))
      }),
    ))
)


const epics$ = combineEpics(
  init$,
  initStateRequest$,
  initStateRetry$,
  ordersRequest$,
  ordersRetry$,
  orderRequest$
)

export default epics$