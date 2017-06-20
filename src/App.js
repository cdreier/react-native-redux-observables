import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import NavigationButton from './containers/NavigationButtonContainer'


export default class App extends Component {

  static navigationOptions = {
    title: 'Start',
  }

  render(){
    return (
      <View>
        <Text>App is running!</Text>
        <NavigationButton routeName={'Page1'} >Navigate!</NavigationButton>
      </View>
    )
  }

}