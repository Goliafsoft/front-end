import { createAction } from 'redux-actions';

import action from './action';

export default {
  init: createAction(action.INIT),
};
