import React from 'react'
import styles from './Order.module.scss'

const Order = ({ ingredients, price }) => {
  const keys =  Object.keys(ingredients)
  const ingredientsArr = keys
    .map(ing => ({ title: ing, value: ingredients[ing] }))
    .map((ing, i) =>
          <span key={ing.title + i}>
            {ing.title} {ing.value}{i !== keys.length -1 ?  ', ' : '.'}
          </span>)

  return (
    <div className={styles.Order}>
      <p>Ingredients: { ingredientsArr}
      </p>
      <p>Price: {price} USD</p>
    </div>
  )
}


export default Order
