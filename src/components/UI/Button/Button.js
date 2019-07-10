import React,{memo} from 'react'
import sytles from './Button.module.scss'
import className from 'classnames/bind'

const cx = className.bind(sytles)

const Button = ({children, type, onclick, disabled}) => {
  return (
    <button 
    disabled={disabled}
    className={cx('Button', {
      Success: type=== 'success',
      Danger: type=== 'danger'
    })}
    onClick={onclick}>{children}</button>
  )
}

export default memo(Button)
