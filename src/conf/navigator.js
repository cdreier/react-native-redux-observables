import { connect } from 'react-redux'
import React, { Component } from 'react' 
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import routes from './routes'

const PlainNavigator = StackNavigator(routes) //eslint-disable-line new-cap

export const nav = (state, action) => {
  const newState = PlainNavigator.router.getStateForAction(action, state)
  return (newState ? newState : state)
}

class NavigatorWithState extends Component {
  render(){
    return (
      <PlainNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    )
  }
}

const mapState = state => ({
  nav: state.nav,
})

export default connect(mapState)(NavigatorWithState)