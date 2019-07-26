import React from 'react'
import styles from './Loader.module.scss'

const Loader = ({center, hidden }) => {
  return (
    <div
      style={{margin: center ?  '0 auto': ''}}
      hidden={hidden}
      className={styles['Lds-ellipsis']}><div></div><div></div><div></div><div></div></div>
  )
}

export default Loader
