import * as actionsTypes from '../actions';

const initialState = {
  user: null,
  loading: false,
  authErrors: null,
  loggedIn: false,
  email: null
  // notConfirmed: true
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionsTypes.AUTH_REQUEST: {
      return {
        ...state,
        loading: true,
        authErrors: null,
      }
    }

    case actionsTypes.AUTH_SUCCESS:
    case actionsTypes.AUTH_LOGGEG_LOCAL: {
      const { email } = payload
      return {
        ...state,
        loading: false,
        loggedIn: true,
        email,
      }
    }

    case actionsTypes.AUTH_FAIL: {
      return {
        ...state,
        loading: false,
        authErrors: payload.error
      }
    }

    case actionsTypes.AUTH_LOGOUT: {
      return {
        ...state,
        user: null,
        loading: false,
        authErrors: null,
        loggedIn: false,
        email: null
      }
    }

    case actionsTypes.AUTH_GET_USER_SUCCESS: {
      const { user } = payload
      return {
        ...state,
        user
      }
    }

    case actionsTypes.AUTH_GET_USER_FAIL: {
      return {
        ...state,
        // authErrors: [{
        //   message: 'Network error'
        // }] 
      }
    }

    case actionsTypes.AUTH_ERRORS_CLEAR: {
      return {
        ...state,
        authErrors: null
      }
    }

  

    default:
      return state
  }
}


export default authReducer