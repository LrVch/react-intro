import React, { Component } from 'react'
import ErrorBoundary from '../../components/ErrorHandlers/ErrorBoundary';


export default (WrappedComponent, { module = {}, spareUi } = {}) => {
  const hocComponent = class extends Component {
    render() {
      return (
        <ErrorBoundary spareUi={spareUi} module={module}>
          <WrappedComponent {...this.props} />
        </ErrorBoundary>
      )
    }
  }

  return hocComponent
}
