export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'
export const RESTORE_INIT_STATE = 'RESTORE_INIT_STATE'

export const INIT_STATE_REQUEST = 'INIT_STATE_REQUEST'
export const INIT_STATE_SUCCESS = 'INIT_STATE_SUCCESS'
export const INIT_STATE_FAIL = 'INIT_STATE_FAIL'
export const INIT_STATE_RETRY = 'INIT_STATE_RETRY'
export const INIT_STATE_LOADED = 'INIT_STATE_LOADED'

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

export const initStateLoaded = () => ({
  type: INIT_STATE_LOADED,
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