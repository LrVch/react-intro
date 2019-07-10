import React, {useEffect} from 'react'

const OrderDetails = ({ match, orders }) => {
  useEffect(() => {
    console.log('d')
  }, [])
  const order = orders.find(o => o.id === match.params.id)
  return (
    <>
      {order && <div>
        <p>{order.id}</p>
      </div>}
    </>
  )
}

export default OrderDetails
