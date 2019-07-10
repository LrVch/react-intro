import React, { Component } from 'react'
import styles from './Modal.module.scss'
import Backdrop from '../Backdrop/Backdrop';
import PropTypes from 'prop-types'

class Modal extends Component {

  shouldComponentUpdate(nextProps) {
    return (nextProps.show !== this.props.show)
      || (this.props.children !== nextProps.children)
  }

  render() {
    const { show, children, dropClick } = this.props;
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
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  dropClick: PropTypes.func.isRequired,
  // children: PropTypes.element.isRequired
}

export default Modal
