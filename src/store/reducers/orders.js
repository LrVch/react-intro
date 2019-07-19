import * as actionsTypes from '../actions';

const initialState = {
  orders: {},
  ordersById: [],
  loadingOrders: false,
  errorLoadingOrders: null,
  selectedOrder: '',
}

const ordersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    
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

    default:
      return state
  }
}

export default ordersReducer