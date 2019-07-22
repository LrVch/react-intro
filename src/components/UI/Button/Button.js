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
  elem = 'button',
  to,
  hidden
}) => {
  return (
    <>
      {elem === 'button' ?
        <button
          hidden={hidden}
          type={btnType}
          disabled={disabled}
          className={cx('Button', {
            Success: type === 'success',
            Danger: type === 'danger'
          })}
          onClick={onclick}>{children}</button>
        :
        <Link
          hidden={hidden}
          className={cx('Button', {
            Success: type === 'success',
            Danger: type === 'danger'
          })} to={to}>{children}</Link>
      }
    </>
  )
}

export default memo(Button)
