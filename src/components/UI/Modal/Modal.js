import React, {memo} from 'react'
import styles from './Modal.module.scss'
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ show, children, dropClick }) => {

  return (
    <>
      <div
        className={styles.Modal}
        style={{
          transform: show ? 'translate(0)' : 'translate(-100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        {children}
      </div>
      <Backdrop
        click={dropClick}
        show={show}
      />
    </>
  )
}


export default memo(Modal)

