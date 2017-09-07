import { combineReducers } from 'redux';

import Nav from './Nav'
import MyAuth from './Auth'
import OldAuth from './OldAuth'
import User from './User'



const AppReducer = combineReducers({
  Nav,
  OldAuth,
  MyAuth,
  User,
});

export default AppReducer;
