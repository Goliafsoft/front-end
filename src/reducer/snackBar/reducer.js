import { handleActions } from 'redux-actions';

import { openSnackBar, closeSnackBar } from './creator';
import initialState from './initialState';

export default handleActions({
  [openSnackBar](state, { payload: { message, undo } }) {
    return {
      ...state,
      open: true,
      message,
      undo,
    };
  },
  [closeSnackBar]() {
    return initialState;
  },
}, initialState);
