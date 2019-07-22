export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAIL = 'AUTH_FAIL'
export const AUTH_ERRORS_CLEAR = 'AUTH_ERRORS_CLEAR'
export const AUTH_REFRESH_TOKEN = 'AUTH_REFRESH_TOKEN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_LOGGEG_LOCAL = 'AUTH_LOGGEG_LOCAL'
export const AUTH_GET_USER_REQUEST = 'AUTH_GET_USER_REQUEST'
export const AUTH_GET_USER_SUCCESS = 'AUTH_GET_USER_SUCCESS'
export const AUTH_GET_USER_FAIL = 'AUTH_GET_USER_FAIL'
export const AUTH_REFRESH_TOKEN_REQUEST = 'AUTH_REFRESH_TOKEN_REQUEST'
export const AUTH_REFRESH_TOKEN_SUCCESS = 'AUTH_REFRESH_TOKEN_SUCCESS'
export const AUTH_REFRESH_TOKEN_FAIL = 'AUTH_REFRESH_TOKEN_FAIL'


export const authRequest = (authType, credentials, actions, history) => ({
  type: AUTH_REQUEST,
  payload: {
    authType,
    credentials,
    actions,
    history
  }
})

export const authSuccess = (email, idToken, expiresIn, refreshToken) => ({
  type: AUTH_SUCCESS,
  payload: {
    email,
    idToken,
    expiresIn,
    refreshToken
  }
})

export const authFail = (error) => ({
  type: AUTH_FAIL,
  payload: {
    error
  }
})

export const autErrorsClear = () => ({
  type: AUTH_ERRORS_CLEAR
})

export const authRefreshToken = () => ({
  type: AUTH_REFRESH_TOKEN
})

export const authLogout = () => ({
  type: AUTH_LOGOUT
})

export const authLoggedLocal = (email, idToken) => ({
  type: AUTH_LOGGEG_LOCAL,
  payload: { email, idToken }
})

export const authGetUserRequest = (idToken) => ({
  type: AUTH_GET_USER_REQUEST,
  payload: { idToken }
})

export const authGetUserSuccess = (user) => ({
  type: AUTH_GET_USER_SUCCESS,
  payload: { user }
})

export const authGetUserFail = (error) => ({
  type: AUTH_GET_USER_FAIL,
  payload: { error }
})

export const authRefreshTokenRequest = (idToken) => ({
  type: AUTH_REFRESH_TOKEN_REQUEST,
  payload: { idToken }
})

export const authRefreshTokenSuccess = (idToken, refreshToken, expiresIn) => ({
  type: AUTH_REFRESH_TOKEN_SUCCESS,
  payload: { idToken, refreshToken, expiresIn }
})

export const authRefreshTokenFail = (error) => ({
  type: AUTH_REFRESH_TOKEN_FAIL,
  payload: { error }
})

