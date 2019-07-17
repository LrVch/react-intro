import React, {Component} from 'react'
import ErrorNotifyService from '../../services/errorNotify.service';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    ErrorNotifyService.sendErrorDetails({
      module: this.props.module,
      errorMessage: error.toString(),
      info
    })
  }

  render() {
    if (this.state.hasError) {
      return this.props.spareUi ? this.props.spareUi : <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary