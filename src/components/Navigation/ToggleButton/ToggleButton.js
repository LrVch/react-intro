import React from 'react'
import styles from './ToggleButton.module.scss';
import PropTypes from 'prop-types'

const ToggleButton = ({ click }) => {
  return (
    <div
      className={styles.ToggleButton}
      onClick={click}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

ToggleButton.propTypes = {
  click: PropTypes.func.isRequired
}

export default ToggleButton
