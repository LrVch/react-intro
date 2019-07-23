import { createSelector } from 'reselect'

export const authState = state => state.auth

export const user = createSelector(
  authState,
  orderState => orderState.user
)

export const loading = createSelector(
  authState,
  orderState => orderState.loading
)

export const loggedIn = createSelector(
  authState,
  orderState => orderState.loggedIn
)

export const authErrors = createSelector(
  authState,
  orderState => orderState.authErrors
)

export const email = createSelector(
  authState,
  orderState => orderState.email
)

export const localId = createSelector(
  authState,
  orderState => orderState.localId
)


