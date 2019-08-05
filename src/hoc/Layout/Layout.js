import React, { useState } from 'react';
import { content } from './Layout.module.scss'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux'
import { displayName, photoUrl, isFullLoggedIn } from '../../store/selectors/auth'

export const Layout = ({
  displayName: name,
  children,
  isFullLoggedIn,
  photoUrl: url
}) => {
  const [isOpened, setIsOpened] = useState(false)

  const dropClickHandler = () => {
    setIsOpened(false)
  }

  const toggleClickHandler = () => {
    setIsOpened(state => !state.isOpened)
  }

  return (
    <>
      <Toolbar
        name={name}
        url={url}
        loggedIn={isFullLoggedIn}
        toggleClick={toggleClickHandler}
      />
      <SideDrawer
        loggedIn={isFullLoggedIn}
        isOpened={isOpened}
        dropClick={dropClickHandler}
      />
      <main className={content}>
        {children}
      </main>
    </>
  )
}

const matStateToProps = state => ({
  isFullLoggedIn: isFullLoggedIn(state),
  displayName: displayName(state),
  photoUrl: photoUrl(state)
})

export default connect(matStateToProps)(Layout);