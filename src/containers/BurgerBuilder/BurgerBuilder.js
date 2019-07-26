import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spiner from '../../components/UI/Spiner/Spiner'
import { connect } from 'react-redux'
import {
  addIngredient,
  removeIngredient,
  restoreInitState,
  initStateRetry,
  initStateRequest
} from '../../store/actions';
import withErrorBoundary from '../../hoc/withErrorBoundary/withErrorBoundary';
import SpareUi from '../../components/UI/SpareUi/SpareUi';
import {
  ingredients, totalPrice, loadingInitState, errorLoadingInitState
} from '../../store/selectors/burger'
import {  isFullLoggedIn } from '../../store/selectors/auth';

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  }

  componentDidMount() {
    this.props.initStateRequest()
    this.props.restoreInitState()
  }

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout')
  }

  purchaseOpenHandler = () => {
    if (this.props.isFullLoggedIn) {
      this.setState({
        purchasing: true
      })
    } else {
      this.props.history.push('/login')
    }
  }

  purchaseCloseHandler = () => {
    this.setState({
      purchasing: false
    })
  }

  render() {
    const {
      purchasing
    } = this.state;

    const {
      ingredients,
      totalPrice,
      loadingInitState,
      errorLoadingInitState,
      onIngredientAdd,
      onIngredientRemove,
      isFullLoggedIn
    } = this.props

    const controls = Object.keys(ingredients).map(i => ({
      label: i[0].toUpperCase() + i.slice(1), type: i
    }))

    const disabledState = { ...ingredients };

    for (let key in disabledState) {
      disabledState[key] = disabledState[key] <= 0
    }

    const spiner = <Spiner />;
    const error = errorLoadingInitState &&
      <SpareUi onClick={this.props.retryInitState} message={errorLoadingInitState.message} />

    const orderSummary = <OrderSummary
      cancel={this.purchaseCloseHandler}
      nextStep={this.purchaseContinueHandler}
      total={totalPrice}
      ingredients={ingredients}
    />

    const purchasable = !!Object.values(ingredients)
      .reduce((prev, next) => {
        return prev + next
      }, 0)

    const burger = (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls
          loggedIn={isFullLoggedIn}
          price={totalPrice}
          controls={controls}
          disabledState={disabledState}
          purchasable={purchasable}
          addIngrediend={onIngredientAdd}
          removeIngrediend={onIngredientRemove}
          purchaseHandler={this.purchaseOpenHandler}
        />
      </>
    )

    return (
      <>
        {loadingInitState ? spiner : errorLoadingInitState ? error : burger}
        {ingredients &&
          <Modal
            dropClick={this.purchaseCloseHandler}
            show={purchasing}>
            {orderSummary}
          </Modal>}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: ingredients(state),
    totalPrice: totalPrice(state),
    loadingInitState: loadingInitState(state),
    errorLoadingInitState: errorLoadingInitState(state),
    isFullLoggedIn: isFullLoggedIn(state),
  }
}

const mapStateDispatchToProps = dispatch => ({
  onIngredientAdd: (ingredient) => dispatch(addIngredient(ingredient)),
  onIngredientRemove: (ingredient) => dispatch(removeIngredient(ingredient)),
  restoreInitState: () => dispatch(restoreInitState()),
  retryInitState: () => dispatch(initStateRetry()),
  initStateRequest: () => dispatch(initStateRequest())
})

export default connect(
  mapStateToProps,
  mapStateDispatchToProps
)(withErrorBoundary(BurgerBuilder, {
  module,
  spareUi: <SpareUi />
}));