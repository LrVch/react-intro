import React, { memo } from 'react'
import styles from './Avatar.module.scss'

const Avatar = memo(({ url, name }) => {
  const defaul = 'https://png.pngtree.com/svg/20161027/631929649c.svg'
  return (
    <div className={styles.Avatar}>
      <img
        alt={name || 'anonymous'}
        src={url || defaul}
        title={name || 'anonymous'} />
    </div>
  )
})

export default Avatar
