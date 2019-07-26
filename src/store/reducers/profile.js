import * as actionsTypes from '../actions';

const initialState = {
  isProfileDeleting: false,
  deleteProfileErrors: null
}

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionsTypes.PROFILE_DELETE_REQUEST: {
      return {
        ...state,
        isProfileDeleting: true,
        deleteProfileErrors: null
      }
    }

    case actionsTypes.PROFILE_DELETE_SUCCESS: {
      return {
        ...state,
        isProfileDeleting: false

      }
    }

    case actionsTypes.PROFILE_DELETE_FAIL: {
      return {
        ...state,
        isProfileDeleting: false,
        deleteProfileErrors: payload.error
      }
    }

    case actionsTypes.PROFILE_CLEAR_DELETE_ERRORS: {
      return {
        ...state,
        deleteProfileErrors: null
      }
    }

    default:
      return state
  }
}

export default profileReducer