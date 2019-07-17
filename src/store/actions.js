export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
export const RESTORE_INIT_STATE = 'RESTORE_INIT_STATE'

export const ORDER_FORM_CONFIG_SUCCESS = 'ORDER_FORM_CONFIG_SUCCESS'
export const ORDER_FORM_CONFIG_REQUEST = 'ORDER_FORM_CONFIG_REQUEST'
export const ORDER_FORM_CONFIG_CLEAR_STATE = 'ORDER_FORM_CONFIG_CLEAR_STATE'

export const INIT_STATE_REQUEST = 'INIT_STATE_REQUEST'
export const INIT_STATE_SUCCESS = 'INIT_STATE_SUCCESS'
export const INIT_STATE_FAIL = 'INIT_STATE_FAIL'
export const INIT_STATE_RETRY = 'INIT_STATE_RETRY'

export const ORDERS_REQUEST = 'ODRERS_REQUEST'
export const ORDERS_SUCCESS = 'ORDERS_SUCCESS'
export const ORDERS_FAIL = 'ORDERS_FAIL'
export const ORDERS_RETRY = 'ORDERS_RETRY'
export const ORDERS_SET_SELECTED = 'ORDERS_SET_SELECTED'
export const ORDERS_REQUES_ABORT = 'ORDERS_REQUES_ABORT'

export const ORDER_REQUEST = 'ORDER_REQUEST'
export const ORDER_SUCCESS = 'ORDER_SUCCESS'
export const ORDER_FAIL = 'ORDER_FAIL'

export const initStateRequest = () => ({
  type: INIT_STATE_REQUEST
})

export const initStateSuccess = ({ config, ingredients, price }) => ({
  type: INIT_STATE_SUCCESS,
  payload: {
    config,
    ingredients,
    price
  }
})

export const initStateFail = (error) => ({
  type: INIT_STATE_FAIL,
  payload: {
    error
  }
})

export const initStateRetry = () => ({
  type: INIT_STATE_RETRY
})

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: {
    ingredient
  }
})

export const removeIngredient = (ingredient) => ({
  type: REMOVE_INGREDIENT,
  payload: {
    ingredient
  }
})

export const restoreInitState = () => ({
  type: RESTORE_INIT_STATE,
})

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

export const orderRequest = (order, actions, history) => ({
  type: ORDER_REQUEST,
  payload: { order, actions, history }
})

export const orderSuccess = (result) => ({
  type: ORDER_SUCCESS,
  payload: { result }
})

export const orderFail = (error) => ({
  type: ORDER_FAIL,
  payload: { error }
})


