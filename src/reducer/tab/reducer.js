import { handleActions } from 'redux-actions';

import creator from './creator';
import initialState from './initialState';

export default handleActions({
  [creator.removeTab](state, { payload }) {
    return {
      value: state.value.filter(({ href }) => (href !== payload)),
      reset: state.value.find(({ href }) => (href === payload)),
    };
  },
  [creator.openTab](state, { payload }) {
    const isTabExist = state.value.find(({ href }) => (href === payload.href));
    if (isTabExist) return state;
    return {
      value: [...state.value, payload],
    };
  },
  [creator.resetTab](state) {
    return {
      value: [...state.value, state.reset],
    };
  },
}, initialState);
