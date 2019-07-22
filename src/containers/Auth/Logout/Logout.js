import React from 'react'
import {connect} from 'react-redux'
import { authLogout } from '../../../store/actions';
import { Redirect } from 'react-router-dom'

const Logout = ({authLogout}) => {
  authLogout()
  return (
    <div>
      <Redirect to="/"/>
    </div>
  )
}

const mapDispathToProps = dispatch => ({
  authLogout: () => dispatch(authLogout())
})

export default connect(null, mapDispathToProps)(Logout)
