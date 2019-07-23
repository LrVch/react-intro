import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reducer from './store/reducers'
import mainEpics$ from './store/epics'

const {NODE_ENV} = process.env;
const isDev = NODE_ENV === 'development'

console.log(process.env)

const composeEnhancers = (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const epicMiddleware = createEpicMiddleware()

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)

epicMiddleware.run(mainEpics$)

export default store
