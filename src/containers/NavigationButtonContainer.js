import { connect } from 'react-redux'
import NavigationButton from './../components/NavigationButton'
import { NavigationActions } from 'react-navigation'

const mapStateToProps = () => {
  return {
  }
}

const bindDispatch = {
  navigate: (route) => NavigationActions.navigate({routeName: route}),
}

export default connect(mapStateToProps, bindDispatch)(NavigationButton)
