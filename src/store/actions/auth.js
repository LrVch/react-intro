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
export const AUTH_UPDATE_USER_REQUEST = 'AUTH_UPDATE_USER_REQUEST'
export const AUTH_UPDATE_USER_SUCCESS = 'AUTH_UPDATE_USER_SUCCESS'
export const AUTH_UPDATE_USER_FAIL = 'AUTH_UPDATE_USER_FAIL'


export const authRequest = (authType, credentials, actions, history) => ({
  type: AUTH_REQUEST,
  payload: {
    authType,
    credentials,
    actions,
    history
  }
})

export const authSuccess = (email, idToken, expiresIn, refreshToken, localId) => ({
  type: AUTH_SUCCESS,
  payload: {
    email,
    idToken,
    expiresIn,
    refreshToken,
    localId
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

export const authLoggedLocal = (email, idToken, localId) => ({
  type: AUTH_LOGGEG_LOCAL,
  payload: { email, idToken, localId }
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

export const authUpdateUserRequest = (displayName, photoUrl, actions) => ({
  type: AUTH_UPDATE_USER_REQUEST,
  payload: { displayName, photoUrl, actions }
})

export const authUpdateUserSuccess = (displayName, photoUrl) => ({
  type: AUTH_UPDATE_USER_SUCCESS,
  payload: { displayName, photoUrl }
})

export const authUpdateUserFail = (error) => ({
  type: AUTH_UPDATE_USER_FAIL,
  payload: { error }
})


