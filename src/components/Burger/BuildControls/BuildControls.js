import React from 'react'
// import PropTypes from 'prop-types'
import BuildControl from './BuildControl/BuildControl';
import styels from './BuildControls.module.scss'

// class BuildControls extends Component {
//   // shouldComponentUpdate(nextProps) {
//   //   const state = this.props.disabledState
//   //   const nextState = nextProps.disabledState
//   //   let update = false;
//   //   for (let key in state) {
//   //     if (state[key] !== nextState[key]) {
//   //       update = true;
//   //     }
//   //   }
//   //   return update;
//   // }

//   render() {
//     return (
//         <div className={styels.BuildControls}>
//         <p>Price : {this.props.price}</p>
//           {this.props.controls.map((c, i) => (
//             <BuildControl
//               disabled={this.props.disabledState[c.type]}
//               key={c.label + i}
//               label={c.label}
//               addIngrediend={() => this.props.addIngrediend(c.type)}
//               removeIngrediend={() => this.props.removeIngrediend(c.type)} />)
//           )}
//         </div>
//     )
//   }
// }

const BuildControls = ({
  addIngrediend,
  removeIngrediend,
  controls,
  disabledState,
  price,
  purchasable,
  purchaseHandler
}) => {
  return (
    <div className={styels.BuildControls}>
      <p>Price : {price.toFixed(2)} $</p>
      {controls.map((c, i) => (
        <BuildControl
          disabled={disabledState[c.type]}
          key={c.label + i}
          label={c.label}
          addIngrediend={() => addIngrediend(c.type)}
          removeIngrediend={() => removeIngrediend(c.type)} />)
      )}
      <br />
      <p>
        <button
          onClick={purchaseHandler}
          disabled={!purchasable}
          className={styels.OrderButton}>Order now</button>
      </p>
    </div>
  )
}

// BuildControls.propTypes = {

// }

export default BuildControls
