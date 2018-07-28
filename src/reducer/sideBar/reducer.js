import { handleActions } from 'redux-actions';

import { toggleSideBar } from './creator';
import initialState from './initialState';

export default handleActions({
  [toggleSideBar](state) {
    const open = !state.open;
    localStorage.setItem('isMenuOpen', open);
    return { ...state, open };
  },
}, initialState);
