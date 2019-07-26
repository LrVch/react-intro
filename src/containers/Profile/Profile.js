import React, { Component } from 'react'
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
  loggedIn,
  photoUrl,
  updateUserError,
} from '../../store/selectors/auth';
import { Redirect } from 'react-router-dom'
import UserInfo from '../../components/UserInfo/UserInfo';

class Profile extends Component {

  render() {
    const {
      isDeleting,
      isInfoUpdating,
      deleteProfileErrors,
      displayName,
      loggedIn,
      photoUrl,
      onDeleteRequest,
      onProfileClearDeleteErrors,
      onUpdateUserInfo,
      updateUserError,
    } = this.props

    return (
      <div>
        {!loggedIn && <Redirect to="/" />}
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
}

const mapStateToProps = state => ({
  isDeleting: isDeleting(state),
  loggedIn: loggedIn(state),
  deleteProfileErrors: deleteProfileErrors(state),
  displayName: displayName(state),
  photoUrl: photoUrl(state),
  updateUserError: updateUserError(state),
  isInfoUpdating: isInfoUpdating(state)
})

const mapDispathToProps = dispatch => ({
  onDeleteRequest: () => dispatch(profileDeleteRequest()),
  onProfileClearDeleteErrors: () => dispatch(profileClearDeleteErrors()),
  onUpdateUserInfo: ({displayName, photoUrl},  actions) =>
  dispatch(authUpdateUserRequest(displayName, photoUrl, actions))
})

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Profile)
