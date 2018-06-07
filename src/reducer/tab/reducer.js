import { handleActions } from 'redux-actions';

import creator from './creator';
import initialState from './initialState';

export default handleActions({
  [creator.init](state, { payload }) {
    return { ...state, ...payload };
  },
}, initialState);
