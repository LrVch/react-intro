import React from 'react'
import styles from './NavigationItem.module.scss';
// import className from 'classnames/bind'
import { NavLink } from 'react-router-dom'

// const cx = className.bind(styles);

const NavigationItem = ({ url, children, active, exact, onClick }) => {
  return (
    <li className={styles.NavigationItem}>
      <NavLink
        onClick={onClick}
        activeClassName={styles.active}
        exact={exact}
        to={url}
      >
        {children}
      </NavLink>
    </li>
  )
}

export default NavigationItem
