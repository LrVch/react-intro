import { createSelector } from 'reselect'

export const profileState = state => state.profile

export const isDeleting = createSelector(
  profileState,
  profileState => profileState.isProfileDeleting
)

export const deleteProfileErrors = createSelector(
  profileState,
  profileState => profileState.deleteProfileErrors
)


