import React from 'react'
import styles from './ContactDataForm.module.scss'
import Input from '../../../../components/UI/Input/Input'
import { Formik } from 'formik';
import Button from '../../../../components/UI/Button/Button'
import ErrorMessage from '../../../../components/UI/Input/ErrorMessage/ErrorMessage'
import Loader from '../../../../components/UI/Loader/Loader';

const ContactDataForm = ({ orderForm, onSubmit, error }) => {
  const initState = Object.keys(orderForm)
    .reduce((state, key) => {
      return {
        ...state,
        [key]: orderForm[key].value
      }
    }, {})

  let formElementsArr = Object.keys(orderForm).map(key => orderForm[key])

  formElementsArr = formElementsArr.map(elem => {
    return elem.elementType !== 'select' ? elem :
      {
        ...elem, elementConfig: {
          ...elem.elementConfig,
          options: Object.keys(elem.elementConfig.options).map(option => {
            return elem.elementConfig.options[option]
          })
        }
      }
  })
  return (
    <div className={styles.ContactData}>
      <h4>Enter you contact data</h4>
      {error && <p className={styles.ErrorMessage}>{error.message}</p>}
      <Formik
        initialValues={initState}
        validate={values => {
          let errors = {};

          if (!values.name.trim()) {
            errors.name = {
              required: true
            }
          }

          if (!values.country.trim()) {
            errors.country = {
              required: true
            }
          }

          if (!values.street.trim()) {
            errors.street = {
              required: true
            }
          }

          if (!values.deliveryMethod.trim()) {
            errors.deliveryMethod = {
              required: true
            }
          }

          if (!values.zipCode.trim()) {
            errors.zipCode = {
              required: true
            }
          } else if (values.zipCode.length < 5) {
            errors.zipCode = {
              minLenght: {
                value: 5,
                actulaValue: values.zipCode.length
              }
            }
          } else if (values.zipCode.length > 5) {
            errors.zipCode = {
              maxLenght: {
                value: 5,
                actulaValue: values.zipCode.length
              }
            }
          }

          if (!values.email.trim()) {
            errors.email = {
              required: true
            }
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = {
              notMatched: true
            }
          }


          return errors;
        }}
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
          setTouched
        }) => (
            <form noValidate onSubmit={handleSubmit}
            >
              {/* values
              <pre>{JSON.stringify(values, '', 4)}</pre> */}
              <fieldset disabled={isSubmitting}>
                {formElementsArr.map((elem, i) => {
                  const name = elem.elementConfig.name || elem.elementConfig.config.name
                  const invalid = errors[name] && touched[name] && errors[name]
                  return (
                    <div key={elem.elementType + i}>
                      <Input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        label={elem.label}
                        value={values[name]}
                        invalid={invalid}
                        elementConfig={elem.elementConfig}
                        elementType={elem.elementType}
                      />
                      <div>
                        {invalid && errors[name].required && <ErrorMessage>This field is required</ErrorMessage>}
                        {invalid && errors[name].minLenght &&
                          <ErrorMessage>
                            Min length should be {errors[name].minLenght.value},
                            but actual value is {errors[name].minLenght.actulaValue}
                          </ErrorMessage>}
                        {invalid && errors[name].maxLenght &&
                          <ErrorMessage>
                            maxLenght length should be {errors[name].maxLenght.value},
                            but actual value is {errors[name].maxLenght.actulaValue}
                          </ErrorMessage>}
                        {invalid &&
                          errors[name].notMatched &&
                          <ErrorMessage>Wrong {name}</ErrorMessage>}
                      </div>
                    </div>
                  )
                })}
              </fieldset>
              {/* <button
                disabled={isSubmitting}
                onClick={(event) => {
                  event.preventDefault()
                  validateForm().then(errors => {
                    if (!Object.keys(errors).length) {
                      handleSubmit()
                    } else {
                      setTouched(errors)
                      setErrors(errors)
                    }
                    // console.log(errors)
                  })
                }}
              >ORDER
              </button> */}
              <Button 
              hidden={isSubmitting}
              disabled={isSubmitting}
              type="success">
              ORDER
              </Button>
              <Loader center hidden={!isSubmitting}/>
              <br />

              {/* errors
              <pre>{JSON.stringify(errors, '', 4)}</pre> */}
            </form>
          )}
      </Formik>
    </div>
  )
}

export default ContactDataForm
