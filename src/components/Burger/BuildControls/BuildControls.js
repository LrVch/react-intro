import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import styels from './BuildControls.module.scss'
import { useTranslation } from 'react-i18next';

const BuildControls = ({
  addIngrediend,
  removeIngrediend,
  controls,
  disabledState,
  price,
  purchasable,
  purchaseHandler,
  loggedIn
}) => {

  const { t } = useTranslation()
  return (
    <div className={styels.BuildControls}>
      <p>{t('price')} : {price} $</p>
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
          className={styels.OrderButton}>
          {loggedIn ? 'Order now' : 'SIGNIN TO ORDER'}
        </button>
      </p>
    </div>
  )
}

export default BuildControls
