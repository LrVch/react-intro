import React from 'react'
import styles from './FullLoader.module.scss'
import Loader from '../Loader/Loader';

const FullLoader = ({ center, hidden }) => {
  return (
    <div className={styles.FullLoaderWrapper}>
      <Loader/>
    </div>
  )
}

export default FullLoader
