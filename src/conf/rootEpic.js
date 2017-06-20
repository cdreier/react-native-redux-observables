import { combineEpics } from 'redux-observable'

const debugEpic = action => action.ofType('DEBUG')
  .map(() => ({
    type: 'NEXT_DEBUG',
  }))

export default combineEpics(
  debugEpic,
)