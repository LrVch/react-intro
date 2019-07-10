import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import styles from './ContactData.module.scss'
import orders from '../../../axios-orders'
import Spiner from '../../../components/UI/Spiner/Spiner'
import Input from '../../../components/UI/Input/Input'

export default class ContactData extends Component {
  state = {
    name: 'Roman Lonskiy',
    loading: false,
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'You name',
          name: 'name'
        },
        validation: {
          required: true
        },
        valid: false,
        label: 'Name',
        value: '',
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'You street',
          name: 'street'
        },
        validation: {
          required: true
        },
        valid: false,
        label: 'Street',
        value: '',
        touched: false
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'You ZipCode',
          name: 'zipCode'
        },
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5
        },
        valid: false,
        label: 'ZipCode',
        value: '',
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'You country',
          name: 'country'
        },
        validation: {
          required: true
        },
        valid: false,
        label: 'Country',
        value: '',
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'You email',
          name: 'email'
        },
        validation: {
          required: true
        },
        valid: false,
        label: 'Email',
        value: '',
        touched: false
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
        validation: {
          required: true
        },
        valid: false,
        label: 'Delivery Method',
        value: '',
        touched: false
      },
    },
    isFormValid: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    })

    const form = this.state.orderForm;
    const orderData = Object
      .keys(form)
      .reduce((prev, next) => {
        return {
          ...prev,
          [next]: form[next].value
        }
      }, {})


    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData
    }

    orders.post('/orders.json', order)
      .then(result => {
        this.setState({
          loading: false,
        })
      })
      .catch(e => {
        this.setState({
          loading: false,
        })
      })
  }

  onChange = e => {
    const name = e.target.name
    const value = e.target.value

    this.setState(state => {
      const valid = this.checkValidity(value, state.orderForm[name].validation);

      return {
        ...state,
        orderForm: {
          ...state.orderForm,
          [name]: {
            ...state.orderForm[name],
            value: value,
            valid: valid,
            touched: true
          }
        }
      }
    }, () => {
      const form = this.state.orderForm;
      const isFormValid = Object
        .keys(form)
        .reduce((isValid, key) => {
          return form[key].valid && isValid
        }, true)

      this.setState({
        isFormValid: isFormValid
      })
    })

  }

  checkValidity = (value, rules) => {
    let isValid = true

    if (rules.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (rules.minLength) {
      isValid = value.trim().length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
      isValid = value.trim().length <= rules.maxLength && isValid
    }

    return isValid
  }

  render() {
    const { orderForm } = this.state
    const formElementsArr = Object.keys(orderForm).map(key => orderForm[key])
    const spinner = <Spiner />
    const form = (<div className={styles.ContactData}>
      <h4>Enter you contact data</h4>
      <form>
        {formElementsArr.map((elem, i) =>
          <Input
            onChange={this.onChange}
            key={elem.elementType + i}
            label={elem.label}
            value={elem.value}
            invalid={!elem.valid}
            touched={elem.touched}
            elementConfig={elem.elementConfig}
            elementType={elem.elementType}
          />
        )}
        <Button
          disabled={!this.state.isFormValid}
          onclick={this.orderHandler}
          type="success">ORDER</Button>
      </form>
    </div>)
    return (
      <>
        {this.state.loading ? spinner : form}
      </>
    )
  }
}
