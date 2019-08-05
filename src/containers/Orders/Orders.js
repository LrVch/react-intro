import React, { useEffect } from 'react'
import Order from '../../components/Order/Order'
import Spiner from '../../components/UI/Spiner/Spiner'
import { Route, Link, Switch } from 'react-router-dom'
import OrderDetails from '../OrderDetails/OrderDetails';
import { connect } from 'react-redux'
import withErrorBoundary from '../../hoc/withErrorBoundary/withErrorBoundary'
import SpareUi from '../../components/UI/SpareUi/SpareUi'
import { ordersRetry, ordersRequest, ordersRequestAbort } from '../../store/actions';
import { getOrders, loadingOrders, errorLoadingOrders, selectedOrder } from '../../store/selectors';

export const Orders = ({
  errorLoadingOrders,
  orders,
  selectedOrder,
  loadingOrders,
  requestOrders,
  abortOrdersRequest,
  match,
  retryOrders
}) => {
  useEffect(() => {
    requestOrders()
    return () => {
      abortOrdersRequest()
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const sortedOrders = orders.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  const spinner = <Spiner />
  const error = errorLoadingOrders &&
    <SpareUi
      onClick={retryOrders}
      message={errorLoadingOrders.message} />
  const ordersRender = <div>
    {sortedOrders.length > 0 ? sortedOrders.map(order =>
      <Link style={{ textDecoration: "none" }} key={order.createdAt} to={`${match.url}/${order.id}`}>
        <Order
          date={order.createdAt}
          price={order.price}
          ingredients={order.ingredients}
        />
      </Link>
    ) : <p style={{ textAlign: 'center' }}>There is no orders yet.</p>}
  </div>
  return (
    <>
      <Switch>
        <Route
          path={`${match.path}/:id`}
          render={props => (
            <div>
              <div>
                <OrderDetails returUrl={match.url} {...props} />
              </div>
            </div>
          )} />
        <Route
          path={`${match.path}`}
          exact
          render={props => (
            <div>
              {loadingOrders ?
                spinner : errorLoadingOrders ?
                  error : !selectedOrder && ordersRender
              }
            </div>
          )} />
      </Switch>
    </>
  )
}

const mapStateToProps = state => ({
  orders: getOrders(state),
  loadingOrders: loadingOrders(state),
  errorLoadingOrders: errorLoadingOrders(state),
  selectedOrder: selectedOrder(state),
})

const matDispathToProps = dispatch => ({
  requestOrders: () => dispatch(ordersRequest()),
  retryOrders: () => dispatch(ordersRetry()),
  abortOrdersRequest: () => dispatch(ordersRequestAbort())
})


export default connect(
  mapStateToProps,
  matDispathToProps
)(withErrorBoundary(Orders, {
  module: module,
  spareUi: <SpareUi />
}))
