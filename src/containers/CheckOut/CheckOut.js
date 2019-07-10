import React, { Component } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

export default class CheckOut extends Component {
  state = {
    ingredients: {},
    totalPrice: 0
  }

  componentDidMount() {
    // if (!this.props.location.search) {
    //   this.props.history.push('/')
    // }
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {}
    for (let param of query.entries()) {
      ingredients[param[0]] = parseFloat(param[1], 10)
    }
    const totalPrice = ingredients.totalPrice;
    delete ingredients.totalPrice
    this.setState({
      ingredients: ingredients,
      totalPrice: totalPrice
    })
  }

  checkOutHandler = () => {
    this.props.history.goBack()
  }

  checkOutContinue = () => {
    this.props.history.push(`${this.props.match.url}/contactdata`)
  }

  render() {
    return (
      <div>
        <CheckOutSummary
          onCheckOutCancel={this.checkOutHandler}
          onCheckOutContinue={this.checkOutContinue}
          ingredients={this.state.ingredients}
        />
        <Route
          path={`${this.props.match.path}/:id`}
          render={(props) => (
            <ContactData
              {...props}
              {...this.state}
            />
          )}
        />
      </div>
    )
  }
}
