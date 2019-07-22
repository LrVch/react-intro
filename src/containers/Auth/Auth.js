import React, { Component } from 'react'
import AuthForm from './AuthForm/AuthForm';
import { connect } from 'react-redux'
import { authRequest, autErrorsClear } from '../../store/actions';
import { authErrors, loading, loggedIn } from '../../store/selectors/auth';
import { Redirect } from 'react-router-dom'

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

  render() {
    const { authForm } = this.state
    const { authErrors, match, loggedIn, loading, autErrorsClear } = this.props
    return (
      <>
        {loggedIn ? <Redirect to="/" /> :
          <AuthForm
            loading={loading}
            onInit={autErrorsClear}
            formType={match.url}
            authForm={authForm}
            errors={authErrors}
            onSubmit={this.handleSubmit}
          />
        }
      </>
    )
  }
}

const mapStateToProps = state => ({
  authErrors: authErrors(state),
  loading: loading(state),
  loggedIn: loggedIn(state)
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
  ))
  , autErrorsClear: () => dispatch(autErrorsClear())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
