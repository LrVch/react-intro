import React from 'react'

const ErrorMessage = ({ children }) => {
  return (
    <div style={{ fontSize: '12px', color: 'red', textAlign: 'left' }}>
      {children}
    </div>
  )
}

export default ErrorMessage
