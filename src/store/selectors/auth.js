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

export const authErrors = createSelector(
  authState,
  authState => authState.authErrors
)

export const email = createSelector(
  authState,
  authState => authState.email
)

export const localId = createSelector(
  authState,
  authState => authState.localId
)


