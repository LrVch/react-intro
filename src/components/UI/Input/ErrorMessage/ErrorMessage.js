import React from 'react'

const ErrorMessage = ({ children, center }) => {
  return (
    <div style={{ fontSize: '12px', color: 'red', textAlign: center ? 'center': 'left' }}>
      {children}
    </div>
  )
}

export default ErrorMessage
