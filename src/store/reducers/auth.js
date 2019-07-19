import * as actionsTypes from '../actions';

const initialState = {
  user: null,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    // case actionsTypes.ORDER_FORM_REQUEST: {
    //   return {
    //     ...state,
    //     orderFormLoadingError: null,
    //     orderFormLoading: true
    //   }
    // }

    

    default:
      return state
  }
}


export default authReducer