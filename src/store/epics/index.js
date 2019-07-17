import { combineEpics } from 'redux-observable'
import epics$ from './epics'

const mainEpics$ = combineEpics(
  epics$
);

export default mainEpics$