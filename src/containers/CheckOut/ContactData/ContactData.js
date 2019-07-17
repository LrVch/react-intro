import React, { Component } from 'react'
import withErrorBoundary from '../../../hoc/withErrorBoundary/withErrorBoundary'
import { connect } from 'react-redux';
import SpareUi from '../../../components/UI/SpareUi/SpareUi'
import ContactDataForm from './ContactDataForm/ContactDataForm';
import { orderRequest } from '../../../store/actions';

class ContactData extends Component {
  handleSubmit = (values, actions) => {
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: values,
      createdAt: new Date()
    }
    this.props.sendOrder(order, actions, this.props.history)
  }

  render() {
    const { orderForm, orderFormErrors } = this.props
    return (
      <>
        {Object.keys(orderForm).length > 0 &&
          <ContactDataForm
            error={orderFormErrors}
            orderForm={orderForm}
            onSubmit={this.handleSubmit}
          />}
      </>
    )
  }
}

const mapStateToProps = state => {
  const { ingredients, totalPrice, orderForm, orderFormErrors } = state.burger
  return { ingredients, totalPrice, orderForm, orderFormErrors }
}

const mapDispatchToProps = dispatch => ({
  sendOrder: (order, actions, history) => dispatch(orderRequest(order, actions, history))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorBoundary(ContactData, {
  module: module,
  spareUi: <SpareUi />
}))