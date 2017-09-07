import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');

const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);


export default function Nav(state = initialNavState, action) {

  let nextState;

  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break;
    case 'Logout':
      console.log("in nav reducer, logout")
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      )
      break;
    case 'Breezy':
      console.log("in nav, breezy")
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Breezy' }),
        state
      )
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
