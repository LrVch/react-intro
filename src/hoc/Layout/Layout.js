import React, { useState } from 'react';
import { content } from './Layout.module.scss'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux'
import { displayName, photoUrl, isFullLoggedIn } from '../../store/selectors/auth'
import { currentLanguage, languages } from '../../store/selectors/settings';
import { settingsChangeLanguage } from '../../store/actions/settings';

export const Layout = ({
  isFullLoggedIn,
  children,
  currentLang,
  displayName: name,
  languages,
  onLangChange,
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
        languages={languages}
        onLangChange={onLangChange}
        currentLang={currentLang}
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

const mapStateToProps = state => ({
  isFullLoggedIn: isFullLoggedIn(state),
  displayName: displayName(state),
  photoUrl: photoUrl(state),
  currentLang: currentLanguage(state),
  languages: languages(state)
})

const mapStateToDispatch = dispatch => ({
  onLangChange: lang => dispatch(settingsChangeLanguage(lang))
})

export default connect(mapStateToProps, mapStateToDispatch)(Layout);