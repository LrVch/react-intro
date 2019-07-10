import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import styles from './Burger.module.scss'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

class Burger extends PureComponent {
  render() {
    const { ingredients } = this.props;
    const keys = Object.keys(ingredients);
    const transormedIngredients = keys.map(key => {
      return [...Array(ingredients[key])]
        .map((_, i) => {
          return <BurgerIngredients key={key + i} type={key} />
        })
    })
      .reduce((arr, el) => {
        return [...arr, ...el]
      }, [])

    const message = <p>Please start adding engridients</p>
    return (
      <div className={styles.Burger}>
        <BurgerIngredients type="bread-top" />
        {!!transormedIngredients.length ? transormedIngredients : message}
        <BurgerIngredients type="bread-bottom" />
      </div>
    )
  }
}

// const Burger = ({ ingredients }) => {
//   const keys = Object.keys(ingredients);
//   const transormedIngredients = keys.map(key => {
//     return [...Array(ingredients[key])]
//       .map((_, i) => {
//         return <BurgerIngredients key={key + i} type={key} />
//       })
//   })
//     .reduce((arr, el) => {
//       return [...arr, ...el]
//     }, [])

//   const message = <p>Please start adding engridients</p>

//   return (
//     <div className={styles.Burger}>
//       <BurgerIngredients type="bread-top" />
//       {!!transormedIngredients.length ? transormedIngredients : message}
//       <BurgerIngredients type="bread-bottom" />
//     </div>
//   )
// }

// Burger.propTypes = {
//   ingredients: PropTypes.Object
// }

export default Burger
