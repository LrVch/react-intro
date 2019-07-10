import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import orders from '../../axios-orders';
import Spiner from '../../components/UI/Spiner/Spiner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

const controls = [
  { label: 'Salad', type: 'salad', id: 'Salad' },
  { label: 'Meat', type: 'meat', id: 'Meat' },
  { label: 'Cheese', type: 'cheese', id: 'Cheese' },
  { label: 'Bacon', type: 'bacon', id: 'Bacon' }
]

class BurgerBuilder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ingredients: null,
      totalPrice: 3,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false
    }

    this.addIngrediendHandler = this.addIngrediendHandler.bind(this)
    this.removeIngrediendHandler = this.removeIngrediendHandler.bind(this)
    this.purchaseOpenHandler = this.purchaseOpenHandler.bind(this)
    this.purchaseCloseHandler = this.purchaseCloseHandler.bind(this)
  }

  purchaseContinueHandler = () => {
    const queryParams = [];
    const ingredients = this.state.ingredients
    for (let i in ingredients) {
      queryParams.push(
        encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i])
      )
    }
    queryParams.push('totalPrice=' + this.state.totalPrice)
    const queryParamsString = queryParams.join('&')
    this.props.history.push('/checkout?' + queryParamsString)
  }

  purchaseOpenHandler() {
    this.setState({
      purchasing: true
    })
  }

  purchaseCloseHandler() {
    this.setState({
      purchasing: false
    })
  }

  updatePurchaseState() {
    this.setState(state => {
      const ingredientsSumm = Object.values(state.ingredients)
        .reduce((prev, next) => {
          return prev + next
        }, 0)

      return {
        purchasable: !!ingredientsSumm
      }
    })
  }

  addIngrediendHandler(type) {
    this.setState((state) => {
      return {
        ingredients: {
          ...state.ingredients,
          [type]: state.ingredients[type] + 1
        },
        totalPrice: state.totalPrice + INGREDIENTS_PRICES[type]
      }
    })
    this.updatePurchaseState()
  }

  removeIngrediendHandler(type) {
    this.setState((state, props) => {
      const count = state.ingredients[type];
      if (count === 0) {
        return state;
      }
      return {
        ingredients: {
          ...state.ingredients,
          [type]: count - 1
        },
        totalPrice: state.totalPrice - INGREDIENTS_PRICES[type]
      }
    })
    this.updatePurchaseState()
  }

  componentDidMount() {
    orders.get('/ingredients.json')
      .then(({ data }) => {
        this.setState({
          ingredients: data
        })
      })
      .catch(error => {
        this.setState({ error: error })
      })
  }

  render() {
    const {
      loading,
      ingredients,
      error,
      purchasing,
      totalPrice,
      purchasable
    } = this.state;
    const disabledState = { ...ingredients };
    for (let key in disabledState) {
      disabledState[key] = disabledState[key] <= 0
    }

    const spiner = error ? <p>Server error</p> : <Spiner />;
    const orderSummary = <OrderSummary
      cancel={this.purchaseCloseHandler}
      nextStep={this.purchaseContinueHandler}
      total={this.state.totalPrice}
      ingredients={ingredients}
    />
    const burger = (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls
          price={totalPrice}
          controls={controls}
          disabledState={disabledState}
          purchasable={purchasable}
          addIngrediend={this.addIngrediendHandler}
          removeIngrediend={this.removeIngrediendHandler}
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

export default withErrorHandler(BurgerBuilder, orders);