import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import LoginScreen from '../components/LoginScreen'
import MainScreen from '../components/MainScreen'
import ProfileScreen from '../components/ProfileScreen';
import Breezy from '../components/Breezy'


export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
//  Profile: { screen: ProfileScreen },
  Breezy: { screen: Breezy },
})

const AppWithNavigationState = ({ dispatch, Nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: Nav })} />
)


const mapStateToProps = state => ({
  Nav: state.Nav,
})

export default connect(mapStateToProps)(AppWithNavigationState);
