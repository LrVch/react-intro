import React, { Component } from 'react'
import AuthForm from './AuthForm/AuthForm';
import { connect } from 'react-redux'
import {
  authRequest,
  autErrorsClear,
  authHideNotConfirmedMessage,
  authVerifyEmailRequest,
  authLeaveLgin
} from '../../store/actions';
import {
  authErrors,
  confirmed,
  isConfirmMessageShow,
  isFullLoggedIn,
  loading,
  loggedIn,
  confirmEmailError,
} from '../../store/selectors/auth';
import { Redirect } from 'react-router-dom'
import { ingredients } from '../../store/selectors/burger';
import Alert from '../../components/UI/Alert/Alert';
import ErrorMessage from '../../components/UI/Input/ErrorMessage/ErrorMessage';

class Auth extends Component {
  state = {
    authForm: {
      email: {
        elementConfig: {
          name: 'email',
          placeholder: 'Your email',
          type: 'email'
        },
        elementType: 'input',
        label: 'Email',
        value: '',
        validationSchema: {
          type: 'string',
          validators: [
            {
              name: 'email',
              message: 'Not valid email'
            },
            {
              name: 'required',
              message: 'Email is Required'
            }
          ]
        }
      },
      name: {
        elementConfig: {
          name: 'name',
          placeholder: 'Your name',
          type: 'text'
        },
        elementType: 'input',
        label: 'Name',
        value: '',
        validationSchema: {
          type: 'string',
          validators: [
            {
              name: 'min',
              value: 2,
              message: 'At least 2 chars'
            },
            {
              name: 'max',
              value: 20,
              message: 'Max 20 chars'
            },
            {
              name: 'required',
              message: 'Name is Required'
            }
          ]
        }
      },
      password: {
        elementConfig: {
          name: 'password',
          placeholder: 'Your password',
          type: 'password'
        },
        elementType: 'input',
        label: 'Password',
        value: '',
        validationSchema: {
          type: 'string',
          validators: [
            {
              name: 'min',
              value: 6,
              message: 'At least 6 chars'
            },
            {
              name: 'max',
              value: 20,
              message: 'Max 20 chars'
            },
            {
              name: 'required',
              message: 'Password is Required'
            }
          ]
        }
      }
    }
  }

  handleSubmit = (values, actions) => {
    this.props.onLogin(
      this.props.match.url, values, actions, this.props.history)
  }

  handleOnInit = type => {
    this.props.autErrorsClear()

    if (type === '/signup' && this.props.isConfirmMessageShow) {
      this.props.onAuthHideConfirmMessage()
    }
  }

  handleRequestConfirmEmail = e => {
    e.preventDefault()

    this.props.onRequestConfirmEmail()
  }

  handleLeavePage = type => {
    if (type === '/login' && !this.props.confirmed) {
      this.props.onLeaveLoginPage()
    }
  }

  render() {
    const { authForm } = this.state
    const {
      authErrors,
      confirmed,
      confirmEmailError,
      isConfirmMessageShow,
      ingredients,
      isFullLoggedIn,
      loading,
      loggedIn,
      match,
    } = this.props

    const isLoginUrl = match.url === '/login'

    const isBuilding = !!Object.values(ingredients)
      .reduce((prev, next) => {
        return prev + next
      }, 0)

    const redirect = isBuilding ? <Redirect to="/checkout" /> : <Redirect to="/" />

    const errorMessages = errors => (
      errors.map((error, i) =>
        <div style={{ margin: '10px 0' }} key={i} >
          <ErrorMessage center>{
            error.message.toLowerCase().replace(/_/gi, ' ')
          }</ErrorMessage></div>)
    )

    return (
      <>
        {isFullLoggedIn && redirect}
        {isConfirmMessageShow && <Redirect to="/login" />}
        {
          <div style={{ margin: 'auto', padding: '20px, 0' }}>

            {loggedIn && !confirmed && isLoginUrl && isConfirmMessageShow && !confirmEmailError &&
              <Alert center>
                We have sent you a confirmation email
              </Alert>
            }

            {loggedIn && !confirmed && isLoginUrl && isConfirmMessageShow && confirmEmailError &&
              <Alert center>
                We couldn't send you a confirmation email

                {errorMessages(confirmEmailError)}
              </Alert>
            }

            <br />

            <AuthForm
              loading={loading}
              onInit={this.handleOnInit}
              onDestroy={this.handleLeavePage}
              formType={match.url}
              authForm={authForm}
              errors={authErrors}
              onSubmit={this.handleSubmit}
            />

            {loggedIn && !confirmed && isLoginUrl &&
              <div style={{ textAlign: 'center', paddingTop: '20px' }}>
                <a
                  onClick={this.handleRequestConfirmEmail}
                  style={{
                    fontSize: '14px',
                    color: 'blue',
                    textAlign: 'center'
                  }} href="/">send confirmaion email</a>
              </div>
            }

          </div>
        }
      </>
    )
  }
}

const mapStateToProps = state => ({
  authErrors: authErrors(state),
  confirmed: confirmed(state),
  confirmEmailError: confirmEmailError(state),
  ingredients: ingredients(state),
  isFullLoggedIn: isFullLoggedIn(state),
  loading: loading(state),
  loggedIn: loggedIn(state),
  isConfirmMessageShow: isConfirmMessageShow(state)
})

const mapDispatchToProps = dispatch => ({
  onLogin: (
    authType,
    credentials,
    actions,
    history
  ) => dispatch(authRequest(
    authType,
    credentials,
    actions,
    history
  )),
  autErrorsClear: () => dispatch(autErrorsClear()),
  onAuthHideConfirmMessage: () => dispatch(authHideNotConfirmedMessage()),
  onRequestConfirmEmail: () => dispatch(authVerifyEmailRequest()),
  onLeaveLoginPage: () => dispatch(authLeaveLgin())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
