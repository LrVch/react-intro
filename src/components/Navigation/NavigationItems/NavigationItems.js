import React from 'react'
import styles from './NavigationItems.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem';
import { useTranslation } from 'react-i18next';

const NavigationItems = ({ auth, onClick, items = [
  {
    active: true,
    url: '/',
    text: 'navigation.burgerBuilder',
    exact: true,
  },
  {
    url: '/orders',
    text: 'navigation.orders',
    auth: true
  },
  {
    url: '/profile',
    text: 'navigation.profile',
    auth: true
  },
  {
    url: '/logout',
    text: 'navigation.logout',
    auth: true
  },
  {
    url: '/login',
    text: 'navigation.singIn',
    auth: false
  },
  {
    url: '/signup',
    text: 'navigation.signUp',
    auth: false
  }
] }) => {

  const { t } = useTranslation()
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
          url={item.url}
        >
          {t(item.text)}
        </NavigationItem>
      )}
    </ul>
  )
}

export default NavigationItems
