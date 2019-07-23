import React from 'react'
import styles from './NavigationItems.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = ({ auth, onClick, items = [
  {
    active: true,
    url: '/',
    text: 'BurgerBuilder',
    exact: true,
  },
  {
    url: '/orders',
    text: 'Orders',
    auth: true
  },
  {
    url: '/logout',
    text: 'Logout',
    auth: true
  },
  {
    url: '/login',
    text: 'SingIn',
    auth: false
  },
  {
    url: '/signup',
    text: 'SignUp',
    auth: false
  }
] }) => {
  const authed = item => item.auth === true || item.auth === undefined
  const notAuthed = item => item.auth === undefined || !item.auth
  return (
    <ul className={styles.NavigationItems}>
      {items.filter(auth ? authed : notAuthed).map((item, i) =>
        <NavigationItem
          onClick={onClick}
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
