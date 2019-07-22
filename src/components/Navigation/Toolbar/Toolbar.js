import React from 'react'
import styles from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../ToggleButton/ToggleButton';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Toolbar = ({ loggedIn, toggleClick }) => {
  return (
    <header className={styles.Toolbar}>
      <ToggleButton click={toggleClick} />
      <Link to="/">
        <Logo />
      </Link>
      <nav className={styles.DesktopOnly}>
        <NavigationItems auth={loggedIn} />
      </nav>
    </header>
  )
}

Toolbar.propTypes = {
  toggleClick: PropTypes.func.isRequired
}

export default Toolbar
