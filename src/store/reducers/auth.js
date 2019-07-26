import * as actionsTypes from '../actions';

const initialState = {
  authErrors: null,
  confirmed: false,
  confirmEmailError: null,
  email: null,
  isConfirmMessageShow: false,
  isInfoUpdating: false,
  localId: null,
  loading: false,
  loggedIn: false,
  updateUserError: null,
  user: null,
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
      const { email, localId } = payload
      return {
        ...state,
        email,
        confirmed: true,
        loading: false,
        localId,
        loggedIn: true,
      }
    }

    case actionsTypes.AUTH_NOT_CONFIRMED: {
      const { email, localId } = payload
      return {
        ...state,
        email,
        loading: false,
        localId,
        loggedIn: true,
      }
    }

    case actionsTypes.AUTH_SHOW_NOT_CONFIRMED_MESSAGE: {
      return {
        ...state,
        isConfirmMessageShow: true
      }
    }

    case actionsTypes.AUTH_HIDE_NOT_CONFIRMED_MESSAGE: {
      return {
        ...state,
        isConfirmMessageShow: false
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
        email: null,
        confirmed: false
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
      }
    }

    case actionsTypes.AUTH_ERRORS_CLEAR: {
      return {
        ...state,
        authErrors: null
      }
    }



    case actionsTypes.AUTH_UPDATE_USER_REQUEST: {
      return {
        ...state,
        isInfoUpdating: true,
        updateUserError: null
      }
    }

    case actionsTypes.AUTH_UPDATE_USER_SUCCESS: {
      const { displayName, photoUrl } = payload
      return {
        ...state,
        user: {
          ...state.user,
          displayName,
          photoUrl
        },
        isInfoUpdating: false,
      }
    }

    case actionsTypes.AUTH_UPDATE_USER_FAIL: {
      return {
        ...state,
        isInfoUpdating: false,
        updateUserError: payload.error
      }
    }



    case actionsTypes.AUTH_VERIFY_EMAIL_REQUEST: {
      return {
        ...state,
        isConfirmMessageShow: true,
        confirmEmailError: null
      }
    }


    case actionsTypes.AUTH_VERIFY_EMAIL_FAIL: {
      return {
        ...state,
        confirmEmailError: payload.error,
      }
    }



    default:
      return state
  }
}


export default authReducer