import React, { memo } from 'react'
import sytles from './Button.module.scss'
import className from 'classnames/bind'
import { Link } from 'react-router-dom';

const cx = className.bind(sytles)

const Button = ({ 
  children, 
  btnType,
  type, 
  onclick, 
  disabled,
   elem = 'button', to 
  }) => {
  return (
    <>
      {elem === 'button' ?
        <button
          type={btnType}
          disabled={disabled}
          className={cx('Button', {
            Success: type === 'success',
            Danger: type === 'danger'
          })}
          onClick={onclick}>{children}</button>
        :
        <Link className={cx('Button', {
          Success: type === 'success',
          Danger: type === 'danger'
        })} to={to}>{children}</Link>
      }
    </>
  )
}

export default memo(Button)
