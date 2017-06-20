import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
} from 'react-native'


export default class NavigationButton extends Component {

  static propTypes = {
    children: PropTypes.string,
    routeName: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
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