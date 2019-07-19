export const ORDERS_REQUEST = 'ORDERS_REQUEST'
export const ORDERS_SUCCESS = 'ORDERS_SUCCESS'
export const ORDERS_FAIL = 'ORDERS_FAIL'
export const ORDERS_RETRY = 'ORDERS_RETRY'
export const ORDERS_SET_SELECTED = 'ORDERS_SET_SELECTED'
export const ORDERS_REQUES_ABORT = 'ORDERS_REQUES_ABORT'

export const ordersRequest = () => ({
  type: ORDERS_REQUEST
})

export const ordersSuccess = (orders) => ({
  type: ORDERS_SUCCESS,
  payload: {
    orders,
    ordersById: Object.keys(orders)
  }
})

export const ordersFail = (error) => ({
  type: ORDERS_FAIL,
  payload: {
    error
  }
})

export const ordersRetry = () => ({
  type: ORDERS_RETRY
})

export const ordersRequestAbort = () => ({
  type: ORDERS_REQUES_ABORT,
})

export const ordersSetSelected = (id) => ({
  type: ORDERS_SET_SELECTED,
  payload: { id }
})
