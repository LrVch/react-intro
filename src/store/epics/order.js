import { ofType, combineEpics } from 'redux-observable';
import {
  switchMap,
  map,
  catchError,
  tap,
  pluck,
  withLatestFrom
} from 'rxjs/operators'
import { of, } from 'rxjs';
import BurgerService from '../../services/burger.service'
import {
  ORDER_REQUEST,
  orderSuccess,
  orderFail,
  ORDER_FORM_REQUEST,
  orderFormSuccess,
  orderFormFail
} from '../actions';
import ErrorNotifyService from '../../services/errorNotify.service';
import { orderForm } from '../selectors/order';

export const orderFormRequest$ = (action$, state$) => action$.pipe(
  ofType(ORDER_FORM_REQUEST),
  withLatestFrom(state$.pipe(map(orderForm))),
  switchMap(([action, orderForm]) => {
    if (orderForm) {
      return of(orderFormSuccess(orderForm));
    }
    return BurgerService.getFormConfig(2).pipe(
      map((orderForm) => {
        return orderFormSuccess(orderForm)
      }),
      catchError(error => {
        ErrorNotifyService.sendNetworkErrorDetails({
          module: module.id,
          method: 'orderFormRequest$',
          error,
        })
        return of(orderFormFail(error))
      })
    )
  })
)

export const orderRequest$ = (action$, state$) => action$.pipe(
  ofType(ORDER_REQUEST),
  pluck('payload'),
  switchMap(({ order, actions, history }) =>
    BurgerService.sendOrder(order, 2).pipe(
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


const order$ = combineEpics(
  orderRequest$,
  orderFormRequest$
)

export default order$