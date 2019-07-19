import { ofType, combineEpics } from 'redux-observable';
import {
  switchMap,
  map,
  catchError,
  exhaustMap,
  mapTo
} from 'rxjs/operators'
import { defer, forkJoin, of, timer } from 'rxjs';
import BurgerService from '../../services/burger.service'
import {
  INIT_STATE_REQUEST,
  initStateRequest,
  initStateSuccess,
  initStateFail,
  INIT_STATE_RETRY
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
    BurgerService.getIngredients(2),
    BurgerService.getPrice(2)
  ).pipe(
    map(([ingredients, price]) => {
      return initStateSuccess({
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


const burger$ = combineEpics(
  init$,
  initStateRequest$,
  initStateRetry$
)

export default burger$