import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reducer from './store/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const { REACT_APP_SERVER_RENDER: isServer } = process.env
const { NODE_ENV } = process.env
const isDev = NODE_ENV === 'development'

const composeEnhancers = (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose

export const epicMiddleware = createEpicMiddleware()

const middlewares = []

if (!isServer) {
  middlewares.push(epicMiddleware)
}

export default function configureStore(initialState = {}) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )
}