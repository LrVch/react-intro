import React from 'react'
import styles from './NavigationItems.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = ({ items = [
  {
    active: true,
    url: '/',
    text: 'BurgerBuilder',
    exact: true
  },
  {
    url: '/orders',
    text: 'Orders'
  },
  {
    url: '/login',
    text: 'Login',
    auth: true
  },
  {
    url: '/signup',
    text: 'SignUp',
    auth: true
  }
] }) => {
  return (
    <ul className={styles.NavigationItems}>
      {items.map((item, i) =>
        <NavigationItem
          exact={item.exact}
          key={item.text + i}
          active={item.active}
          url={item.url}>{item.text}
        </NavigationItem>
      )}
    </ul>
  )
}

export default NavigationItems
