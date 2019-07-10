import React from 'react'
import styles from './NavigationItem.module.scss';
// import className from 'classnames/bind'
import { NavLink } from 'react-router-dom'

// const cx = className.bind(styles);

const NavigationItem = ({ url, children, active }) => {
  return (
    <li className={styles.NavigationItem}>
      <NavLink activeClassName={styles.active} exact to={url}>{children}</NavLink>
    </li>
  )
}

export default NavigationItem
