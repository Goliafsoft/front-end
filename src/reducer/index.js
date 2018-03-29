import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import snackBar from './snackBar';

export default combineReducers({
  auth,
  snackBar,
  form,
});
