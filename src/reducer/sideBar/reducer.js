import { handleActions } from 'redux-actions';

import creator from './creator';
import initialState from './initialState';

export default handleActions({
  [creator.toggleSideBar](state) {
    const open = !state.open;
    localStorage.setItem('isMenuOpen', open);
    return { ...state, open };
  },
}, initialState);
