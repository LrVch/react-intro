import { combineReducers } from 'redux'
import burgerReducer from './burger'
import orderReducer from './order'
import ordersReducer from './orders'
import authReducer from './auth'
import profileReducer from './profile'
import settingsReducer from './settings'

export default combineReducers({
  auth: authReducer,
  burger: burgerReducer,
  order: orderReducer,
  orders: ordersReducer,
  profile: profileReducer,
  settings: settingsReducer
})