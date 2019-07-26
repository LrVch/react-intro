import { combineEpics } from 'redux-observable'
import burger$ from './burger'
import orders$ from './orders'
import order$ from './order'
import auth$ from './auth'
import profile$ from './profile'

const mainEpics$ = combineEpics(
  auth$,
  burger$,
  orders$,
  order$,
  profile$
);

export default mainEpics$