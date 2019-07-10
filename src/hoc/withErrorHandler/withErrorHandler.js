import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal';

export default (WrappedComponent, axios) => {
  const hocComponent = class extends Component {
    state = {
      error: null
    }

    constructor() {
      super()
      this.requestInt = axios.interceptors.request.use(request => {
        this.setState({
          error: null
        })
        return request;
      })
      this.responseInt = axios.interceptors.response.use(null, error => {
        this.setState({
          error: error
        })
        return Promise.reject(error)
      })
    }

    errorConfirmedHandler = () => {
      this.setState({
        error: null
      })
    }

    componentWillMount() {
      axios.interceptors.request.eject(this.requestInt);
      axios.interceptors.request.eject(this.responseInt);
    }

    render() {
      return (
        <>
          <Modal
            show={!!this.state.error}
            dropClick={this.errorConfirmedHandler}>
            {!!this.state.error && <p>{this.state.error.message}</p>}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }

  return hocComponent
}
