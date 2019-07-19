export const ORDER_FORM_REQUEST = 'ORDER_FORM_REQUEST'
export const ORDER_FORM_SUCCESS = 'ORDER_FORM_SUCCESS'
export const ORDER_FORM_FAIL = 'ORDER_FORM_FAIL'


export const ORDER_REQUEST = 'ORDER_REQUEST'
export const ORDER_SUCCESS = 'ORDER_SUCCESS'
export const ORDER_FAIL = 'ORDER_FAIL'

export const orderFormRequest = () => ({
  type: ORDER_FORM_REQUEST
})

export const orderFormSuccess = (orderForm) => ({
  type: ORDER_FORM_SUCCESS,
  payload: {orderForm}
})

export const orderFormFail = (error) => ({
  type: ORDER_FORM_FAIL,
  payload: {error}
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