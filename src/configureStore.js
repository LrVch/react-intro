import { createStore, applyMiddleware, /*compose*/ } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reducer from './store/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import { initStateFromCookie } from './middleware/init-state-from-cookie';

const REACT_APP_SERVER_RENDER = process.env.REACT_APP_SERVER_RENDER

export default function configureStore(initialState = {}) {
  const epicMiddleware = createEpicMiddleware()
  const middlewares = [epicMiddleware]

  if (!REACT_APP_SERVER_RENDER) {
    middlewares.push(initStateFromCookie)
  }
  return {
    store: createStore(
      reducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(...middlewares)
      )
    ),
    epicMiddleware
  }
}