import React, { Component } from 'react'
import styles from './OrderSummary.module.scss'
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  render() {
    const { ingredients, total, cancel, nextStep } = this.props
    const summary = Object.keys(ingredients)
      .map((key, i) => {
        return <li key={key + i}>{key} : {ingredients[key]}</li>
      })
    return (
      <div className={styles.OrderSummary}>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients</p>
        <hr />
        <ul>
          {summary}
        </ul>
        <hr />
        <p>Total: {total.toFixed(2)} $</p>
        <p>Continue to checkout?</p>
        <Button onclick={cancel} type="success">CANCEL</Button>
        <Button onclick={nextStep} type="danger">CONTINUE</Button>
      </div>
    )
  }


}

export default OrderSummary
