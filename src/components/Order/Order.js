import React from 'react'
import styles from './Order.module.scss'

const Order = ({ ingredients, price, date }) => {
  const keys =  Object.keys(ingredients)
  const ingredientsArr = keys
    .map(ing => ({ title: ing, value: ingredients[ing] }))
    .map((ing, i) =>
          <span key={ing.title + i}>
            {ing.title} {ing.value}{i !== keys.length -1 ?  ', ' : '.'}
          </span>)

  return (
    <div className={styles.Order}>
      <p><b>Ingredients</b>: { ingredientsArr}
      </p>
      <p><b>Price</b>: {price} USD</p>
      {/* <p style={{fontSize: '12px'}}>{new Date(date).toDateString()}</p> */}
      <p style={{fontSize: '12px'}}>{date}</p>
    </div>
  )
}


export default Order
