import { ofType, combineEpics } from 'redux-observable';
import {
  switchMap,
  map,
  catchError,
  exhaustMap,
  mapTo,
  withLatestFrom
} from 'rxjs/operators'
import { forkJoin, of, timer } from 'rxjs';
import BurgerService from '../../services/burger.service'
import {
  INIT_STATE_REQUEST,
  initStateRequest,
  initStateSuccess,
  initStateFail,
  INIT_STATE_RETRY,
  initStateLoaded
} from '../actions';
import ErrorNotifyService from '../../services/errorNotify.service';
import { ingredients, totalPrice } from '../selectors/burger';

export const initStateRetry$ = (action$, state$) => action$.pipe(
  ofType(INIT_STATE_RETRY),
  exhaustMap(() => timer(1000).pipe(
    mapTo(initStateRequest())
  ))
)

export const initStateRequest$ = (action$, state$) => action$.pipe(
  ofType(INIT_STATE_REQUEST),
  withLatestFrom(state$),
  map(([action, state]) => [action, ingredients(state), totalPrice(state)]),
  switchMap(([action, ingredients, totalPrice]) => {
    if (Object.keys(ingredients).length) {
      return of(initStateLoaded())
    }
    return forkJoin(
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
    )
  })
)


const burger$ = combineEpics(
  initStateRequest$,
  initStateRetry$
)

export default burger$