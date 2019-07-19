export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAIL = 'AUTH_FAIL'


export const authRequest = (authType, credentials, actions, history) => ({
  type: AUTH_REQUEST,
  payload: {
    authType,
    credentials,
    actions,
    history
  }
})

export const authSuccess = (user) => ({
  type: AUTH_REQUEST,
  payload: {
    user
  }
})

export const authFail = (error) => ({
  type: AUTH_REQUEST,
  payload: {
    error
  }
})