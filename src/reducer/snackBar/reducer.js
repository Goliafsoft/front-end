import { handleActions } from 'redux-actions';

import creator from './creator';
import initialState from './initialState';

export default handleActions({
  [creator.openSnackBar](state, { payload: { message, undo } }) {
    return {
      ...state,
      open: true,
      message,
      undo,
    };
  },
  [creator.closeSnackBar]() {
    return initialState;
  },
}, initialState);
