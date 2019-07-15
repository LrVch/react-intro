export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
export const RESTORE_INIT_STATE = 'RESTORE_INIT_STATE'

export const ORDER_FORM_CONFIG_SUCCESS = 'ORDER_FORM_CONFIG_SUCCESS'
export const ORDER_FORM_CONFIG_REQUEST = 'ORDER_FORM_CONFIG_REQUEST'
export const ORDER_FORM_CONFIG_CLEAR_STATE  = 'ORDER_FORM_CONFIG_CLEAR_STATE'

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

export const orderFormConfigSuccess = (orderForm) => ({
  type: ORDER_FORM_CONFIG_SUCCESS,
  payload: { orderForm }
})

export const orderFormConfigRequest = () => ({
  type: ORDER_FORM_CONFIG_REQUEST
})

export const orderFormConfigClearState = () => ({
  type: ORDER_FORM_CONFIG_CLEAR_STATE
})

