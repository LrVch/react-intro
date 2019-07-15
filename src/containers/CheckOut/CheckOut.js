import React, { Component } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

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
        <Route
          path={`${this.props.match.path}/:id`}
          component={ContactData}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { ingredients, totalPrice } = state.burger
  return { ingredients, totalPrice }
}

export default connect(
  mapStateToProps
)(CheckOut)
