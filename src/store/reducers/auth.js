import * as actionsTypes from '../actions';

const initialState = {
  user: null,
  localId: null,
  loading: false,
  authErrors: null,
  loggedIn: false,
  email: null,
  confirmed: false,
  isInfoUpdating: false,
  updateUserError: null
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
        loading: false,
        loggedIn: true,
        email,
        localId
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



    default:
      return state
  }
}


export default authReducer