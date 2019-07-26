import React, { Component } from 'react';
import { content } from './Layout.module.scss'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux'
import { displayName, photoUrl, isFullLoggedIn } from '../../store/selectors/auth'

class Layout extends Component {
  state = {
    isOpened: false
  }

  dropClickHandler = () => {
    this.setState({
      isOpened: false
    })
  }

  toggleClickHandler = () => {
    this.setState(state => {
      return {
        isOpened: !state.isOpened
      }
    })
  }

  render() {
    const {
      displayName: name,
      isFullLoggedIn,
      photoUrl: url
    } = this.props
    return (
      <>
        <Toolbar
          name={name}
          url={url}
          loggedIn={isFullLoggedIn}
          toggleClick={this.toggleClickHandler}
        />
        <SideDrawer
          loggedIn={isFullLoggedIn}
          isOpened={this.state.isOpened}
          dropClick={this.dropClickHandler}
        />
        <main className={content}>
          {this.props.children}
        </main>
      </>
    )
  }
}

const matStateToProps = state => ({
  isFullLoggedIn: isFullLoggedIn(state),
  displayName: displayName(state),
  photoUrl: photoUrl(state)
})

export default connect(matStateToProps)(Layout);