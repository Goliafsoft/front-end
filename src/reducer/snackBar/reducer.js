import { handleActions } from 'redux-actions';

import creator from './creator';
import initialState from './initialState';

export default handleActions({
  [creator.openSnackBar](state, { payload: message }) {
    return { ...state, open: true, message };
  },
  [creator.closeSnackBar](state) {
    return { ...state, open: false, message: '' };
  },
}, initialState);
