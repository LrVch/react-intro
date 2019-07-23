import React, { Component } from 'react'
import withErrorBoundary from '../../../hoc/withErrorBoundary/withErrorBoundary'
import { connect } from 'react-redux';
import SpareUi from '../../../components/UI/SpareUi/SpareUi'
import ContactDataForm from './ContactDataForm/ContactDataForm';
import {
  orderRequest, orderFormRequest
} from '../../../store/actions';
import Spiner from '../../../components/UI/Spiner/Spiner'
import { orderForm, orderFormErrors, orderFormLoading, orderFormLoadingError } from '../../../store/selectors/order';
import {
  ingredients, totalPrice
} from '../../../store/selectors/burger'
import { localId } from '../../../store/selectors/auth';

class ContactData extends Component {
  componentDidMount() {
    this.props.orderFormConfigRequest()
  }

  handleSubmit = (values, actions) => {
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: values,
      createdAt: new Date(),
      localId: this.props.localId
    }
    this.props.sendOrder(order, actions, this.props.history)
  }

  render() {
    const spiner = <Spiner />
    const { orderFormErrors, orderForm, orderFormLoading, orderFormLoadingError } = this.props
    const error = orderFormLoadingError && <SpareUi message={orderFormLoadingError.message} />
    return (
      <>
        {orderFormLoading ? spiner : orderFormLoadingError ? error :
          orderForm && Object.keys(orderForm).length > 0 &&
          <ContactDataForm
            error={orderFormErrors}
            orderForm={orderForm}
            onSubmit={this.handleSubmit} />
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: ingredients(state),
    totalPrice: totalPrice(state),
    orderForm: orderForm(state),
    orderFormErrors: orderFormErrors(state),
    orderFormLoading: orderFormLoading(state),
    orderFormLoadingError: orderFormLoadingError(state),
    localId: localId(state)
  }
}

const mapDispatchToProps = dispatch => ({
  orderFormConfigRequest: () => dispatch(orderFormRequest()),
  sendOrder: (order, actions, history) => dispatch(orderRequest(order, actions, history))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorBoundary(ContactData, {
  module: module,
  spareUi: <SpareUi />
}))

