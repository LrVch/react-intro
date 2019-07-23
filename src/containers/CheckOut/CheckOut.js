import React, { Component, Suspense, lazy } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import { Route } from 'react-router-dom';
// import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import withErrorBoundary from '../../hoc/withErrorBoundary/withErrorBoundary';
import SpareUi from '../../components/UI/SpareUi/SpareUi';
import {
  ingredients, totalPrice
} from '../../store/selectors/burger'
import LazeRoute from '../../components/Navigation/LazeRoute/LazeRoute';

const ContactData = lazy(() => import('./ContactData/ContactData'));

class CheckOut extends Component {
  componentDidMount() {
    const purchasable = !!Object.values(this.props.ingredients)
      .reduce((prev, next) => {
        return prev + next
      }, 0)

    if (!purchasable) {
      this.props.history.push('/')
    }
  }

  checkOutHandler = () => {
    this.props.history.goBack()
  }

  render() {
    const { ingredients } = this.props
    return (
      <div>
        <CheckOutSummary
          onCheckOutCancel={this.checkOutHandler}
          to={`${this.props.match.url}/contactdata`}
          ingredients={ingredients}
        />
        <LazeRoute 
          path={`${this.props.match.path}/:id`}
          component={ContactData}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: ingredients(state),
    totalPrice: totalPrice(state),
  }
}

export default connect(
  mapStateToProps
)(withErrorBoundary(CheckOut, {
  module: module,
  spareUi: <SpareUi />
}))
