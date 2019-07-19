import { combineEpics } from 'redux-observable'
import burger$ from './burger'
import orders$ from './orders'
import order$ from './order'

const mainEpics$ = combineEpics(
  burger$,
  orders$,
  order$
);

export default mainEpics$