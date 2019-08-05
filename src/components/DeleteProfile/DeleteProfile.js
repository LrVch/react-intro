import React, { useState, memo } from 'react'
import styles from './DeleteProfile.module.scss'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal'
import ErrorMessage from '../UI/Input/ErrorMessage/ErrorMessage'

const DeleteProfile = ({ confirmDelete, loading, errors, onClearErrors }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen)

    if (!isOpen) {
      onClearErrors()
    }
  }

  const errorMessages = errors => (
    errors.map((error, i) =>
      <div style={{ margin: '10px 0' }} key={i} >
        <ErrorMessage center>{
          error.message.toLowerCase().replace(/_/gi, ' ')
        }</ErrorMessage></div>)
  )

  return (
    <div className={styles.DeleteProfile}>
      <h3>Delete your profile</h3>
      <Button
        type="success"
        onclick={toggleModal}
      >DELETE</Button>
      <Modal
        show={isOpen}>
        <div>
          {errors && errorMessages(errors)}
          <p>Are you sure?</p>
          <Button
            disabled={loading}
            type="success"
            onclick={confirmDelete}
          >CONFIRM</Button>
          <Button
            disabled={loading}
            type="danger"
            onclick={toggleModal}
          >CANCEL</Button>
        </div>
      </Modal>
    </div >
  )
}

export default memo(DeleteProfile)
