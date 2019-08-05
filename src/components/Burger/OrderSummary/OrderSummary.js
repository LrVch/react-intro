import React from 'react'
import styles from './OrderSummary.module.scss'
import Button from '../../UI/Button/Button';

const OrderSummary = ({ ingredients, total, cancel, nextStep }) => {
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
      <p>Total: {total} $</p>
      <p>Continue to checkout?</p>
      <Button onclick={cancel} type="danger">CANCEL</Button>
      <Button onclick={nextStep} type="success">CONTINUE</Button>
    </div>
  )
}

export default OrderSummary
