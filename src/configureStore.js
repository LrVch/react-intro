import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import burgerReducer from './store/reducers'
import mainEpics$ from './store/epics'

const epicMiddleware = createEpicMiddleware()

const store = createStore(
  burgerReducer,
  composeWithDevTools(
    applyMiddleware(epicMiddleware)
  )
)

epicMiddleware.run(mainEpics$)

export default store
