import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import Spiner from '../../components/UI/Spiner/Spiner'
import { Route, Link, Switch } from 'react-router-dom'
import OrderDetails from '../OrderDetails/OrderDetails';
import { connect } from 'react-redux'
import withErrorBoundary from '../../hoc/withErrorBoundary/withErrorBoundary'
import SpareUi from '../../components/UI/SpareUi/SpareUi'
import { ordersRetry, ordersRequest, ordersRequestAbort } from '../../store/actions';
import { getOrders } from '../../store/reducers';

class Orders extends Component {
  componentDidMount() {
    this.props.requestOrders()
  }

  componentWillUnmount() {
    this.props.abortOrdersRequest()
  }

  render() {
    const { errorLoadingOrders, orders, selectedOrder, loadingOrders } = this.props
    const sordedOrders = orders.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    const spinner = <Spiner />
    const error = errorLoadingOrders &&
      <SpareUi
        onClick={this.props.retryOrders}
        message={errorLoadingOrders.message} />
    const ordersRender = <div>
      {sordedOrders.length > 0 ? sordedOrders.map(order =>
        <Link style={{ textDecoration: "none" }} key={order.createdAt} to={`${this.props.match.url}/${order.id}`}>
          <Order
            date={order.createdAt}
            price={order.price}
            ingredients={order.ingredients}
          />
        </Link>
      ) : <p>There is not orders yet.</p>}
    </div>
    return (
      <>
        <Switch>
          <Route
            path={`${this.props.match.path}/:id`}
            render={props => (
              <div>
                <div>
                  <OrderDetails returUrl={this.props.match.url} {...props} />
                </div>
              </div>
            )} />
          <Route
            path={`${this.props.match.path}`}
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
}

const mapStateToProps = state => ({
  orders: getOrders(state),
  loadingOrders: state.burger.loadingOrders,
  errorLoadingOrders: state.burger.errorLoadingOrders,
  selectedOrder: state.burger.selectedOrder,
  selectedOrderLoading: state.burger.selectedOrderLoading
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
