import React from 'react'
import sytles from './CheckOutSummary.module.scss';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckOutSummary = ({
  ingredients,
  onCheckOutCancel,
  onCheckOutContinue
}) => {
  return (
    <div className={sytles.CheckOutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button onclick={onCheckOutCancel} type="danger">
        CANCEL
      </Button>
      <Button onclick={onCheckOutContinue} type="success">
        CONTINUE
      </Button>
    </div>
  )
}

export default CheckOutSummary
