import React from 'react'
import styles from './Alert.module.scss'

const Alert = ({ children, center }) => {
  return (
    <div
      style={{ textAlign: center ? 'center' : 'left' }}
      className={styles.Alert}>
      {children}
    </div>
  )
}

export default Alert
