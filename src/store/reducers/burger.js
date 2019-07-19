import * as actionsTypes from '../actions';

const initialState = {
  ingredients: {},
  totalPrice: 0,
  loadingInitState: false,
  errorLoadingInitState: null,
  ingredientPrices: {},
  resetState: {
    ingredients: {},
    totalPrice: 0,
  }
}

const burgerReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionsTypes.INIT_STATE_REQUEST:
    case actionsTypes.INIT_STATE_RETRY: {
      return {
        ...state,
        loadingInitState: true
      }
    }
    case actionsTypes.INIT_STATE_SUCCESS: {
      const { ingredients, price } = payload
      return {
        ...state,
        ingredients,
        totalPrice: price.totalPrice,
        ingredientPrices: price.ingredients,
        loadingInitState: false,
        resetState: {
          ingredients,
          totalPrice: price.totalPrice,
        },
      }
    }
    case actionsTypes.INIT_STATE_FAIL: {
      return {
        ...state,
        loadingInitState: false,
        errorLoadingInitState: payload.error
      }
    }



    case actionsTypes.ADD_INGREDIENT: {
      const amount = state.ingredients[payload.ingredient]
      const ingredient = payload.ingredient;
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [ingredient]: amount + 1
        },
        totalPrice: (+state.totalPrice + +state.ingredientPrices[ingredient]).toFixed(2)
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
        totalPrice: (state.totalPrice - state.ingredientPrices[ingredient]).toFixed(2)
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
    
    default:
      return state
  }
}

export default burgerReducer