import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import orders from '../../axios-orders';
import Spiner from '../../components/UI/Spiner/Spiner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux'
import { addIngredient, removeIngredient, restoreInitState } from '../../store/actions';

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  }

  componentDidMount() {
    this.props.restoreInitState()
  }

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout')
  }

  purchaseOpenHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  purchaseCloseHandler = () => {
    this.setState({
      purchasing: false
    })
  }

  render() {
    const {
      loading,
      error,
      purchasing
    } = this.state;

    const {
      ingredients,
      totalPrice,
      onIngredientAdd,
      onIngredientRemove
    } = this.props

    const controls = Object.keys(ingredients).map(i => ({
      label: i[0].toUpperCase() + i.slice(1), type: i
    }))

    const disabledState = { ...ingredients };

    for (let key in disabledState) {
      disabledState[key] = disabledState[key] <= 0
    }

    const spiner = error ? <p>Server error</p> : <Spiner />;

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
        {ingredients ? burger : spiner}
        {ingredients && <Modal
          dropClick={this.purchaseCloseHandler}
          show={purchasing}>
          {loading ? spiner : orderSummary}
        </Modal>}
      </>
    )
  }
}

const mapStateToProps = state => {
  const {ingredients, totalPrice, loadingIgredients, errorLoadingIngredints} = state.burger
  return {ingredients, totalPrice, loadingIgredients, errorLoadingIngredints}
}

const mapStateDispatchToProps = dispatch => ({
  onIngredientAdd: (ingredient) => dispatch(addIngredient(ingredient)),
  onIngredientRemove: (ingredient) => dispatch(removeIngredient(ingredient)),
  restoreInitState: () => dispatch(restoreInitState()),
})

export default connect(
  mapStateToProps,
  mapStateDispatchToProps
)(withErrorHandler(BurgerBuilder, orders));