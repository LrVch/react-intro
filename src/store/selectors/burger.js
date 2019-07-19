import { createSelector } from 'reselect'

export const burgerState = state => state.burger

export const ingredients = createSelector(
  burgerState,
  orderState => orderState.ingredients
)
export const totalPrice = createSelector(
  burgerState,
  orderState => orderState.totalPrice
)
export const loadingInitState = createSelector(
  burgerState,
  orderState => orderState.loadingInitState
)
export const errorLoadingInitState = createSelector(
  burgerState,
  orderState => orderState.errorLoadingInitState
)
export const ingredientPrices = createSelector(
  burgerState,
  orderState => orderState.ingredientPrices
)
