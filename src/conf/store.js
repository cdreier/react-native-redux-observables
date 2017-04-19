import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { persistStore, autoRehydrate } from 'redux-persist'

import rootEpic from './rootEpic'
import rootReducer from './rootReducer'


const configureStore = (initialState) => {

  const epicMiddleware = createEpicMiddleware(rootEpic)
  const createStoreWithMiddleware = compose(
    applyMiddleware(epicMiddleware),
    autoRehydrate(),
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  persistStore(store, {
    whitelist: [],
    storage: AsyncStorage,
  })

  return store
}


export default configureStore
