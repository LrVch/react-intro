import React from 'react'
// import PropTypes from 'prop-types'
import styles from './BuildControl.module.scss'

// class BuildControl extends PureComponent {
//   render() {
//     return (
//       <div className={styles.BuildControl}>
//         <div className={styles.Label}>{this.props.label}</div>
//         <button
//           className={styles.Less + ' '}
//           disabled={this.props.disabled}
//           onClick={this.props.removeIngrediend}
//         >Less</button>
//         <button
//           className={styles.More}
//           onClick={this.props.addIngrediend}
//         >More</button>
//       </div>
//     )
//   }
// }


const BuildControl = ({ label, addIngrediend, removeIngrediend, disabled }) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{label}</div>
      <button
        className={styles.Less + ' '}
        disabled={disabled}
        onClick={removeIngrediend}
      >Less</button>
      <button
        className={styles.More}
        onClick={addIngrediend}
      >More</button>
    </div>
  )
}

// BuildControl.propTypes = {

// }

export default BuildControl
