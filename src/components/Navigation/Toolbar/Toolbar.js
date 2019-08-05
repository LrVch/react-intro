import React, {memo} from 'react'
import styles from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../ToggleButton/ToggleButton';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Avatar from '../../UI/Avatar/Avatar';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const Toolbar = ({ loggedIn, toggleClick, url, name }) => {
  return (
    <header className={styles.Toolbar}>
      <ToggleButton click={toggleClick} />
      <Link to="/">
        <Logo />
      </Link>
      <nav className={cx('DesktopOnly', 'Nav')}>
        <NavigationItems auth={loggedIn} />
      </nav>
      {loggedIn &&
        <Link to="/profile">
          <Avatar url={url} name={name} />
        </Link>
      }
    </header>
  )
}

Toolbar.propTypes = {
  toggleClick: PropTypes.func.isRequired
}

export default memo(Toolbar)
