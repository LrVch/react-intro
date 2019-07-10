import React from 'react'
import styles from './Logo.module.scss'
import logo from '../../assets/images/burger-logo.png'
// import PropTypes from 'prop-types'

const Logo = props => {
  return (
    <div className={'Logo ' + styles.Logo}>
      <img src={logo} alt="logo"/>
    </div>
  )
}

// Logo.propTypes = {

// }

export default Logo
