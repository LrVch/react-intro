import * as actionsTypes from '../actions';

const initialState = {
  orderFormErrors: null,
  orderFormLoading: false,
  orderFormLoadingError: null,  
  orderForm: null,
}

const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionsTypes.ORDER_FORM_REQUEST: {
      return {
        ...state,
        orderFormLoadingError: null,
        orderFormLoading: true
      }
    }

    case actionsTypes.ORDER_FORM_SUCCESS: {
      return {
        ...state,
        orderForm: payload.orderForm,
        orderFormLoading: false
      }
    }

    case actionsTypes.ORDER_FORM_FAIL: {
      return {
        ...state,
        orderFormLoading: false,
        orderFormLoadingError: payload.error
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


export default orderReducer