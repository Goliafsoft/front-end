import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import snackBar from './snackBar';
import sideBar from './sideBar';

export default combineReducers({
  auth,
  snackBar,
  form,
  sideBar,
});
