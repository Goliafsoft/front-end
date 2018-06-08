import { handleActions } from 'redux-actions';

import creator from './creator';
import initialState from './initialState';

export default handleActions({
  [creator.removeTab](state, { payload }) {
    return {
      ...state,
      value: state.value.filter(({ href }) => (href !== payload)),
    };
  },
}, initialState);
