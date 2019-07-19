import { combineReducers } from 'redux'
import burgerReducer from './burger'
import orderReducer from './order'
import ordersReducer from './orders'
import authReducer from './auth'

export default combineReducers({
  auth: authReducer,
  burger: burgerReducer,
  order: orderReducer,
  orders: ordersReducer
})