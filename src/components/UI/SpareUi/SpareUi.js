import React from 'react'
import SadBurger from '../../../assets/images/sad-burger.jpg'

const stylesWrap = {
  maxWidth: '300px',
  margin: 'auto'
}

const stylesImg = {
  maxWidth: '100%'
}

const SpareUi = ({ message, onClick }) => {
  return (
    <div style={stylesWrap}>
      <div style={{ textAlign: 'center' }}>
        {message ? message : 'Something went wrong :('}
        <br/>
        {onClick && <button onClick={onClick}>Retry</button>}
      </div>
      <img style={stylesImg} src={SadBurger} alt="Sad burger" />
    </div>
  )
}

export default SpareUi
