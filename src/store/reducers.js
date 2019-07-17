import * as actionsTypes from './actions';
import { combineReducers } from 'redux'

const initialState = {
  ingredients: {},
  totalPrice: 0,
  loadingInitState: false,
  errorLoadingInitState: null,
  orderForm: {},
  orders: {},
  ordersById: [],
  selectedOrder: '',
  loadingOrders: false,
  errorLoadingOrders: null,
  ingredientPrices: {},
  orderFormErrors: null,
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
      const { config, ingredients, price } = payload
      return {
        ...state,
        orderForm: config,
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

    
    case actionsTypes.ORDERS_REQUEST:
    case actionsTypes.ORDERS_RETRY: {
      return {
        ...state,
        loadingOrders: true
      }
    }
    case actionsTypes.ORDERS_SUCCESS: {
      const {ordersById, orders} = payload
      const result = ordersById.reduce((obj, id) => {
        return {
          ...obj,
          [id]: {...orders[id], id}
        }
      }, {})
      return {
        ...state,
        orders: result,
        ordersById: ordersById,
        loadingOrders: false
      }
    }
    case actionsTypes.ORDERS_FAIL: {
      return {
        ...state,
        loadingOrders: false,
        errorLoadingOrders: payload.error
      }
    }

    case actionsTypes.ORDERS_SET_SELECTED: {
      return {
        ...state,
        selectedOrder: payload.id
      }
    }

    case actionsTypes.ORDER_REQUEST: {
      return {
        ...state,
        orderFormErrors: null
      }
    }

    case actionsTypes.ORDER_FAIL: {
      return {
        ...state,
        orderFormErrors: payload.error
      }
    }
    

    default:
      return state
  }
}


export const getOrders = (state) => {
  const orders = state.burger.orders;
  const ids = state.burger.ordersById
  return ids.map(id => orders[id])
}

export const getOrder = (state) => {
  const orders = state.burger.orders;
  return orders[state.burger.selectedOrder] || {}
}

export const getOrderData = (state) => {
  return getOrder(state).orderData
}

export { burgerReducer }

export default combineReducers({
  burger: burgerReducer
})