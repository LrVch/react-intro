import { createSelector } from 'reselect'

export const authState = state => state.auth

export const user = createSelector(
  authState,
  authState => authState.user
)

export const loading = createSelector(
  authState,
  authState => authState.loading
)

export const loggedIn = createSelector(
  authState,
  authState => authState.loggedIn
)

export const confirmed = createSelector(
  authState,
  authState => authState.confirmed
)

export const isFullLoggedIn = createSelector(
  loggedIn,
  confirmed,
  (loggedIn, confirmed) => loggedIn && confirmed
)

export const isConfirmMessageShow = createSelector(
  authState,
  authState => authState.isConfirmMessageShow
)

export const authErrors = createSelector(
  authState,
  authState => authState.authErrors
)

export const confirmEmailError = createSelector(
  authState,
  authState => authState.confirmEmailError
)

export const email = createSelector(
  authState,
  authState => authState.email
)

export const localId = createSelector(
  authState,
  authState => authState.localId
)

export const displayName = createSelector(
  authState,
  authState =>  authState.user && authState.user.displayName
)

export const photoUrl = createSelector(
  authState,
  authState => authState.user && authState.user.photoUrl
)

export const isInfoUpdating = createSelector(
  authState,
  authState => authState.isInfoUpdating
)

export const updateUserError = createSelector(
  authState,
  authState => authState.updateUserError
)


