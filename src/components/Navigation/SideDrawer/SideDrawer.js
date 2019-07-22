import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.scss'
import classNames from 'classnames/bind'
import Backdrop from '../../UI/Backdrop/Backdrop'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)


const SideDrawer = ({loggedIn, dropClick, isOpened }) => {
  return (
    <>
      <Backdrop click={dropClick} show={isOpened} />
      <div className={cx('SideDrawer', {
        Open: isOpened,
        Close: !isOpened
      })
      }>
        <Logo />
        <nav>
          <NavigationItems auth={loggedIn} />
        </nav>
      </div>
    </>
  )
}

SideDrawer.propTypes = {
  dropClick: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired
}

export default SideDrawer
