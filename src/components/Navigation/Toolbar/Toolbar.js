import React, { memo, useState } from 'react'
import styles from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../ToggleButton/ToggleButton';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Avatar from '../../UI/Avatar/Avatar';
import classNames from 'classnames/bind'
import { Progress } from '../../../context/indicator';
import Input from '../../UI/Input/Input';

const cx = classNames.bind(styles);

const Toolbar = ({
  currentLang,
  loggedIn,
  toggleClick,
  name,
  url
}) => {
  const [lang, setLang] =  useState(currentLang)
  const handleLang = (event) => {
    setLang(event.target.value)
  }
  return (
    <>
      <header className={styles.Toolbar}>
        <ToggleButton click={toggleClick} />
        <Link to="/">
          <Logo />
        </Link>
        <nav className={cx('DesktopOnly', 'Nav')}>
          <NavigationItems auth={loggedIn} />
        </nav>
        <div className={styles.User}>
          {loggedIn &&
            <Link className={styles.Avatar} to="/profile">
              <Avatar url={url} name={name} />
            </Link>
          }
          <Input
            onBlur={() => { }}
            onChange={handleLang}
            value={lang}
            elementConfig={{
              config: {
                name: 'lang'
              },
              options: [
                {
                  displayName: 'en',
                  value: 'en'
                },
                {
                  displayName: 'ru',
                  value: 'ru'
                }
              ]
            }}
            elementType="select"
          />
        </div>
        <Progress className={cx('Progress')} />
      </header>
    </>
  )
}

Toolbar.propTypes = {
  toggleClick: PropTypes.func.isRequired
}

export default memo(Toolbar)
