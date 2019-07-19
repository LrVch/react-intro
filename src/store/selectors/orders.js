import { createSelector } from 'reselect'

export const orderState = state => state.orders

export const orders = createSelector(
  orderState,
  orderState => orderState.orders
)

export const ordersById = createSelector(
  orderState,
  orderState => orderState.ordersById
)

export const errorLoadingOrders = createSelector(
  orderState,
  orderState => orderState.errorLoadingOrders
)

export const loadingOrders = createSelector(
  orderState,
  orderState => orderState.loadingOrders
)

export const selectedOrder = createSelector(
  orderState,
  orderState => orderState.selectedOrder
)

export const getOrders = createSelector(
  orders,
  ordersById,
  (orders, ordersById) => ordersById.map(id => orders[id])
)

export const getOrder = createSelector(
  orders,
  selectedOrder,
  (orders, selectedOrder) => orders[selectedOrder] || {}
)