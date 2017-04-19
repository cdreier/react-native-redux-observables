import { combineReducers } from 'redux'
import { nav } from './navigator'

const debug = (state = {}, action = {}) => {
  switch (action.type){
    case 'DEBUG':
      return state
  }
  return state
}

export default combineReducers({
  debug,
  nav,
})