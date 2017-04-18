import { combineReducers } from 'redux'

const debug = (state = {}, action = {}) => {
  switch (action.type){
    case 'DEBUG':
      return state
  }
  return state
}

export default combineReducers({
  debug,
})