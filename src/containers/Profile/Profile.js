import React, { Component } from 'react'
import { connect } from 'react-redux'
import DeleteProfile from '../../components/DeleteProfile/DeleteProfile';
import { isDeleting, deleteProfileErrors } from '../../store/selectors/profile';
import { profileDeleteRequest, profileClearDeleteErrors } from '../../store/actions';
import { loggedIn } from '../../store/selectors/auth';
import { Redirect } from 'react-router-dom'

class Profile extends Component {

  render() {
    const {
      isDeleting,
      onDeleteRequest,
      loggedIn,
      errors,
      onProfileClearDeleteErrors
    } = this.props

    return (
      <div>
        {!loggedIn && <Redirect to="/"/>}
        <DeleteProfile
          onClearErrors={onProfileClearDeleteErrors}
          errors={errors}
          loading={isDeleting}
          confirmDelete={onDeleteRequest} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isDeleting: isDeleting(state),
  loggedIn: loggedIn(state),
  errors: deleteProfileErrors(state)
})

const mapDispathToProps = dispatch => ({
  onDeleteRequest: () =>  dispatch(profileDeleteRequest()),
  onProfileClearDeleteErrors: () => dispatch(profileClearDeleteErrors())
})

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Profile)
