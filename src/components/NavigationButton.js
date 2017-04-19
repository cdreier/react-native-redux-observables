import React, { Component } from 'react'
import {
  Button,
} from 'react-native'


export default class NavigationButton extends Component {

  static propTypes = {
    children: React.PropTypes.string,
    routeName: React.PropTypes.string.isRequired,
    navigate: React.PropTypes.func.isRequired,
  }

  static navigationOptions = {
    title: 'Start',
  }

  navigate(){
    this.props.navigate(this.props.routeName)
  }

  render(){
    return (
      <Button 
        onPress={() => this.navigate()}
        title={this.props.children} />
    )
  }

}