import React, { memo, useEffect } from 'react'
import Button from '../../../components/UI/Button/Button'
import styles from './AuthForm.module.scss'
import Input from '../../../components/UI/Input/Input'
import { Formik, Form } from 'formik'
import ErrorMessage from '../../../components/UI/Input/ErrorMessage/ErrorMessage'
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import Loader from '../../../components/UI/Loader/Loader';


const AuthForm = ({
  authForm,
  errors,
  formType,
  loading,
  onInit,
  onDestroy,
  onSubmit
}) => {

  useEffect(() => {
    onInit(formType)

    return () => {
      onDestroy(formType)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formType])

  const isLogin = formType === '/login'
  const initState = Object.keys(authForm)
    .reduce((state, key) => {
      if (isLogin && key === 'name') {
        return state
      }
      return {
        ...state,
        [key]: authForm[key].value
      }
    }, {})

  let formElementsArr = Object.keys(authForm).filter(key => {
    return isLogin ? !(key === 'name') : true
  }).map(key => authForm[key])

  const createField = (validationSchema) => {
    const { type, validators } = validationSchema
    let schema = Yup[type]()

    schema = validators.reduce((schema, validator) => {
      const { name, value, message } = validator
      const field = value ? schema[name](value, message) :
        schema[name](message)
      return field
    }, schema)

    return schema;
  }

  const schemaFields = Object.keys(initState)
    .reduce((schema, name) => {
      const { validationSchema } = authForm[name]
      return {
        ...schema,
        [name]: createField(validationSchema)
      }
    }, {})

  const errorMessages = errors => (
    errors.map((error, i) =>
      <div style={{ margin: '10px 0' }} key={i} >
        <ErrorMessage center>{
          error.message.toLowerCase().replace(/_/gi, ' ')
        }</ErrorMessage></div>)
  )

  const authSchema = Yup.object().shape(schemaFields)

  return (
    <div className={styles.AuthForm}>
      <h4>{isLogin ? 'SingIn' : 'SingUp'}</h4>
      {isLogin ?
        <Link className={styles.AuthFormLink} to="/signup">Need an account?</Link> :
        <Link className={styles.AuthFormLink} to="/login">Have an account?</Link>}
      {errors && errorMessages(errors)}
      <Formik
        enableReinitialize
        initialValues={initState}
        validationSchema={authSchema}
        onSubmit={(values, actions) => {
          onSubmit(values, actions)
        }}
      >
        {({
          values,
          errors,
          status,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValidating,
          validateForm,
          setErrors,
          setTouched,
          resetForm
        }) => (
            <Form noValidate>
              {/* values
              <pre>{JSON.stringify(values, '', 4)}</pre>
              <br />
              errors
              <pre>{JSON.stringify(errors, '', 4)}</pre> */}
              <fieldset disabled={isSubmitting}>
                {formElementsArr.map((elem, i) => {
                  const name = elem.elementConfig.name
                  const invalid = errors[name] && touched[name] && errors[name]
                  return (
                    <div key={name + i}>
                      {values[name] !== undefined && <Input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label={elem.label}
                        value={values[name]}
                        invalid={invalid}
                        elementConfig={elem.elementConfig}
                        elementType={elem.elementType}
                      />}
                      {invalid &&
                        <ErrorMessage>{errors[name]}</ErrorMessage>}
                    </div>
                  )
                })}
              </fieldset>
              <Button
                hidden={loading}
                disabled={isSubmitting}
                btnType="submit"
                type="success">
                SUBMIT
              </Button>
              <Loader center hidden={!loading} />
              <br />
            </Form>
          )}
      </Formik>
    </div>
  )
}

export default memo(AuthForm)
