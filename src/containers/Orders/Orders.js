import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import orders from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spiner from '../../components/UI/Spiner/Spiner'
import { Route, Link } from 'react-router-dom'
import OrderDetails from '../../components/Order/OrderDetails/OrderDetails';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }
  componentDidMount() {
    orders.get('/orders.json')
      .then(({ data }) => {
        const orders = Object
          .keys(data)
          .map(key => ({ ...data[key], id: key }))

        this.setState({
          loading: false,
          orders: orders
        })
      })
      .catch(() => [
        this.setState({
          loading: false,
        })
      ])
  }
  render() {
    const spinner = <Spiner />
    const orders = <div>
      {this.state.orders.map(order =>
        <Link key={order.id} to={`${this.props.match.url}/${order.id}`}>
          <Order
            price={order.price}
            ingredients={order.ingredients}
          />
        </Link>
      )}
    </div>
    return (
      <>
        {this.state.loading ? spinner : orders}

        <Route
          path={`${this.props.match.path}/:id`}
          render={props => (
            <div>
              <Link to={`${this.props.match.url}`}>Close</Link>
              <div>
                <OrderDetails {...props} orders={this.state.orders} />
              </div>
            </div>
          )} />
      </>
    )
  }
}

export default withErrorHandler(Orders, orders)
