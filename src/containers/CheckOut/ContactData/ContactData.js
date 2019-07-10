import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import styles from './ContactData.module.scss'
import orders from '../../../axios-orders'
import Spiner from '../../../components/UI/Spiner/Spiner'
import Input from '../../../components/UI/Input/Input'
import { Formik } from 'formik';
import ErrorMessage from '../../../components/UI/Input/ErrorMessage/ErrorMessage'
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
// import * as Yup from 'yup';

class ContactData extends Component {
  state = {
    loading: true,
    isFormValid: false,
    orderForm: {}
  }

  componentDidMount() {
    this.setState({
      loading: false,
      orderForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'You name',
            name: 'name'
          },
          label: 'Name',
          value: ''
        },
        street: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'You street',
            name: 'street'
          },
          label: 'Street',
          value: ''
        },
        zipCode: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'You ZipCode',
            name: 'zipCode'
          },
          label: 'ZipCode',
          value: ''
        },
        country: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'You country',
            name: 'country'
          },
          valid: false,
          label: 'Country',
          value: '',
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'You email',
            name: 'email'
          },
          valid: false,
          label: 'Email',
          value: ''
        },
        deliveryMethod: {
          elementType: 'select',
          elementConfig: {
            options: [
              { value: '', displayName: 'Not chosen' },
              { value: 'fastest', displayName: 'Fastest' },
              { value: 'cheapest', displayName: 'Cheapest' },
            ],
            config: {
              name: 'deliveryMethod'
            }
          },
          valid: false,
          label: 'Delivery Method',
          value: ''
        },
      },
    })
  }

  orderHandler = (orderData) => {
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData
    }

    return orders.post('/orders.json', order)
  }

  render() {
    const { orderForm } = this.state
    const initState = Object.keys(orderForm)
      .reduce((state, key) => {
        return {
          ...state,
          [key]: orderForm[key].value
        }
      }, {})
    const formElementsArr = Object.keys(orderForm).map(key => orderForm[key])
    const spinner = <Spiner />
    const form = (
      <div className={styles.ContactData}>
        <h4>Enter you contact data</h4>
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
          }
          }
          // validationSchema={userSchema}
          onSubmit={(values, actions) => {
            console.log(actions)
            this.orderHandler(values)
              .then(result => {
                actions.setSubmitting(false);
                actions.resetForm(initState);
                // actions.setStatus({ success: true })
              })
              .catch(e => {
                actions.setSubmitting(false);
              })
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
            isValidating
          }) => (
              <form noValidate onSubmit={handleSubmit}>
                {/* values
                <pre>{JSON.stringify(touched, '', 4)}</pre> */}
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
                          value={values[elem.elementConfig.name || elem.elementConfig.config.name]}
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
                <Button
                  disabled={isSubmitting}
                  // click={this.handleSubmitClick}
                  type="success">ORDER
                  </Button>
                <br />

                {/* errors
                <pre>{JSON.stringify(errors, '', 4)}</pre> */}
              </form>
            )}
        </Formik>
      </div>)
    return (
      <>
        {this.state.loading ? spinner : form}
      </>
    )
  }
}

export default withErrorHandler(ContactData, orders) 