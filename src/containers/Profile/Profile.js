import React from 'react'
import { connect } from 'react-redux'
import DeleteProfile from '../../components/DeleteProfile/DeleteProfile';
import { isDeleting, deleteProfileErrors } from '../../store/selectors/profile';
import {
  authUpdateUserRequest,
  profileDeleteRequest,
  profileClearDeleteErrors,
} from '../../store/actions';
import {
  isInfoUpdating,
  displayName,
  photoUrl,
  updateUserError,
} from '../../store/selectors/auth';
import UserInfo from '../../components/UserInfo/UserInfo';
import withErrorBoundary from '../../hoc/withErrorBoundary/withErrorBoundary'
import SpareUi from '../../components/UI/SpareUi/SpareUi'

export const Profile = ({
  isDeleting,
  isInfoUpdating,
  deleteProfileErrors,
  displayName,
  photoUrl,
  onDeleteRequest,
  onProfileClearDeleteErrors,
  onUpdateUserInfo,
  updateUserError,
}) => {
  return (
    <div>
      {}
      <UserInfo
        displayName={displayName}
        photoUrl={photoUrl}
        errors={updateUserError}
        loading={isInfoUpdating}
        onSubmit={onUpdateUserInfo}
      />
      <DeleteProfile
        onClearErrors={onProfileClearDeleteErrors}
        errors={deleteProfileErrors}
        loading={isDeleting}
        confirmDelete={onDeleteRequest} />
    </div>
  )
}

const mapStateToProps = state => ({
  isDeleting: isDeleting(state),
  deleteProfileErrors: deleteProfileErrors(state),
  displayName: displayName(state),
  photoUrl: photoUrl(state),
  updateUserError: updateUserError(state),
  isInfoUpdating: isInfoUpdating(state)
})

const mapDispathToProps = dispatch => ({
  onDeleteRequest: () => dispatch(profileDeleteRequest()),
  onProfileClearDeleteErrors: () => dispatch(profileClearDeleteErrors()),
  onUpdateUserInfo: ({ displayName, photoUrl }, actions) =>
    dispatch(authUpdateUserRequest(displayName, photoUrl, actions))
})

export default connect(
  mapStateToProps,
  mapDispathToProps
)(
  withErrorBoundary(Profile, {
    module,
    spareUi: <SpareUi />
  })
)
