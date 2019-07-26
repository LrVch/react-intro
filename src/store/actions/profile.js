export const PROFILE_DELETE_REQUEST = 'PROFILE_DELETE_REQUEST'
export const PROFILE_DELETE_SUCCESS = 'PROFILE_DELETE_SUCCESS'
export const PROFILE_DELETE_FAIL = 'PROFILE_DELETE_FAIL'
export const PROFILE_CLEAR_DELETE_ERRORS = 'PROFILE_CLEAR_DELETE_ERRORS'

export const profileDeleteRequest = () => ({
  type: PROFILE_DELETE_REQUEST
})

export const profileDeleteSuccess = (idToken, localId) => ({
  type: PROFILE_DELETE_SUCCESS,
  payload: {idToken, localId}
})

export const profileDeleteFail = (error) => ({
  type: PROFILE_DELETE_FAIL,
  payload: { error }
})

export const profileClearDeleteErrors = () => ({
  type: PROFILE_CLEAR_DELETE_ERRORS
})

