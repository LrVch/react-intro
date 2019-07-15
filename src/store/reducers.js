import * as actionsTypes from './actions';
import { combineReducers } from 'redux'

const initialState = {
  ingredients: {},
  totalPrice: 0,
  loadingIgredients: false,
  errorLoadingIngredints: false,
  loadingFormConfig: false,
  orderForm: {}
}

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

const burgerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_INGREDIENT: {
      const amount = state.ingredients[payload.ingredient]
      const ingredient = payload.ingredient;
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [ingredient]: amount + 1
        },
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[ingredient]
      }
    }
    case actionsTypes.REMOVE_INGREDIENT: {
      const amount = state.ingredients[payload.ingredient]
      const ingredient = payload.ingredient;
      if (amount === 0) return state

      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [ingredient]: amount - 1
        },
        totalPrice: state.totalPrice - INGREDIENTS_PRICES[ingredient]
      }
    }
    case actionsTypes.RESTORE_INIT_STATE: {
      const reset = { ...state.resetState }
      return {
        ...state,
        ...state.resetState,
        resetState: reset
      }
    }

    case actionsTypes.ORDER_FORM_CONFIG_SUCCESS: {
      return {
        ...state,
        orderForm: payload.orderForm,
        loadingFormConfig: false,
      }
    }

    case actionsTypes.ORDER_FORM_CONFIG_REQUEST: {
      return {
        ...state,
        loadingFormConfig: true,
      }
    }

    case actionsTypes.ORDER_FORM_CONFIG_CLEAR_STATE: {
      return {
        ...state,
        loadingFormConfig: false,
      }
    }

    default:
      return state
  }
}

export { burgerReducer }

export default combineReducers({
  burger: burgerReducer
})