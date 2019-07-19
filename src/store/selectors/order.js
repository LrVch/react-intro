import { createSelector } from 'reselect'

export const orderState = state => state.order
export const orderForm = createSelector(
  orderState,
  orderState => orderState.orderForm
)

export const orderFormErrors = createSelector(
  orderState,
  orderState => orderState.orderFormErrors
)


export const orderFormLoading = createSelector(
  orderState,
  orderState => orderState.orderFormLoading
)


export const orderFormLoadingError = createSelector(
  orderState,
  orderState => orderState.orderFormLoadingError
)


