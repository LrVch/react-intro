import React, { Component } from 'react';
import { content } from './Layout.module.scss'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
    return (
      <>
        <Toolbar 
          toggleClick={this.toggleClickHandler}
        />
        <SideDrawer
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

export default Layout;