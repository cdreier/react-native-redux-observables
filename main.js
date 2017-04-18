/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import 'rxjs'
import React, { Component } from 'react'
import {
  AppRegistry,
} from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/conf/store'
import App from './src/App'

const store = configureStore()

export default class ReactNativeBootstrap extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('reactnativebootstrap', () => ReactNativeBootstrap)
