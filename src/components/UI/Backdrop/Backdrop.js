import React from 'react'
import sytles from './Backdrop.module.scss';
// import PropTypes from 'prop-types'

const Backdrop = ({show, click}) => {
  return (
    show ? <div onClick={click} className={sytles.Backdrop}></div> : null
  )
}

// Backdrop.propTypes = {

// }

export default Backdrop
