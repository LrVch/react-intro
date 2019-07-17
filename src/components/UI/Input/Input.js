import React, { memo } from 'react'
import styles from './Input.module.scss';
import className from 'classnames/bind'

const cx = className.bind(styles)

const Input = ({
  elementType,
  label,
  onChange,
  onBlur,
  value,
  invalid,
  ...props
}) => {
  let inputElement = null
  const id = Math.random().toString(32).slice(2)
  const classes = cx('InputElement', {
    Invalid: invalid
  })

  switch (elementType) {
    case ('input'):
      inputElement = <input
        value={value}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        className={classes}
        {...props.elementConfig} />
      break
    case ('textarea'):
      inputElement = <textarea
        vallue={value}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        className={classes}
        {...props.elementConfig}></textarea>
      break
    case ('select'):
      inputElement = <select
        value={value}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        name={props.elementConfig.config.name}
        className={classes}
      >
        {props.elementConfig.options.map((opt, i) =>
          <option key={opt.value + i} value={opt.value}>{opt.displayName}</option>
        )}
      </select>
      break
    default:
      inputElement = <input
        vallue={value}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        className={classes}
        {...props.elementConfig} />
  }
  return (
    <div className={styles.Input}>
      <label htmlFor={id} className={styles.Label}>{label}</label>
      {inputElement}
    </div>
  )
}

export default memo(Input)
