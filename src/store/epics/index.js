import { combineEpics } from 'redux-observable'
import burger$ from './burger'
import orders$ from './orders'
import order$ from './order'
import auth$ from './auth'
import profile$ from './profile'
import settings$ from './settings'

const mainEpics$ = combineEpics(
  auth$,
  burger$,
  orders$,
  order$,
  profile$,
  settings$
);

export default mainEpics$