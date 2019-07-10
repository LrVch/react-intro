import React from 'react'
import styles from './NavigationItems.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem';

const NavigationItems = ({ items = [
  {
    active: true,
    url: '/',
    text: 'BurgerBuilder'
  },
  {
    url: '/orders',
    text: 'Orders'
  }
] }) => {
  return (
    <ul className={styles.NavigationItems}>
      {items.map((item, i) =>
        <NavigationItem
          key={item.text + i}
          active={item.active}
          url={item.url}>{item.text}
        </NavigationItem>
      )}
    </ul>
  )
}

export default NavigationItems
