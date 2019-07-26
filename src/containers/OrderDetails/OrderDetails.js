import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getOrder } from '../../store/selectors';
import { ordersSetSelected } from '../../store/actions'

const OrderDetails = ({ match, returUrl, order = {}, setSelectedOrder }) => {
  const id = match.params.id
  useEffect(() => {
    setSelectedOrder(id)

    return () => {
      setSelectedOrder(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const {
    country,
    deliveryMethod,
    email,
    name,
    zipCode,
    street
  } = order.orderData || {}

  const date = new Date(order.createdAt).toDateString()

  return (
    <>
      {order &&
        <div>
          <div style={{ margin: '10px auto', maxWidth: '500px', padding: '10px', boxShadow: '0 2px 3px #ccc' }}>
            <p><b>date: </b>{date}</p>
            <p><b>name: </b>{name}</p>
            <p><b>country: </b>{country}</p>
            <p><b>zipCode: </b>{zipCode}</p>
            <p><b>street: </b>{street}</p>
            <p><b>email: </b>{email}</p>
            <p><b>deliveryMethod: </b>{deliveryMethod}</p>
            <p><b>email: </b>{email}</p>
            <Link to={returUrl}>Close</Link>
          </div>
        </div>
      }
    </>
  )
}

const mapStateToProps = state => ({
  order: getOrder(state)
})

const mapDistapthToProps = dispatch => ({
  setSelectedOrder: id => dispatch(ordersSetSelected(id))
})


export default connect(
  mapStateToProps,
  mapDistapthToProps
)(OrderDetails)
