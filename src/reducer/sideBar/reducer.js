import { handleActions } from 'redux-actions';

import creator from './creator';
import initialState from './initialState';

export default handleActions({
  [creator.toggleSideBar](state) {
    return { ...state, open: !state.open };
  },
}, initialState);
