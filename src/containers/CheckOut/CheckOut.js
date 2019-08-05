import React, { useEffect, lazy } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import { connect } from 'react-redux';
import withErrorBoundary from '../../hoc/withErrorBoundary/withErrorBoundary';
import SpareUi from '../../components/UI/SpareUi/SpareUi';
import {
  ingredients, totalPrice
} from '../../store/selectors/burger'
import LazeRoute from '../../components/Navigation/LazeRoute/LazeRoute';

const ContactData = lazy(() => import('./ContactData/ContactData'));

export const CheckOut = ({
  ingredients,
  history,
  match
}) => {
  const purchasable = !!Object.values(ingredients)
    .reduce((prev, next) => {
      return prev + next
    }, 0)

  useEffect(() => {
    if (!purchasable) {
      history.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const checkOutHandler = () => {
    history.goBack()
  }

  return (
    <>
      {purchasable &&
        <div>
          <CheckOutSummary
            onCheckOutCancel={checkOutHandler}
            to={`${match.url}/contactdata`}
            ingredients={ingredients}
          />
          <LazeRoute
            path={`${match.path}/:id`}
            component={ContactData} />
        </div>
      }
    </>
  )
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
