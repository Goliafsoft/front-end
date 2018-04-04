import { createAction } from 'redux-actions';

import action from './action';

export default {
  toggleSideBar: createAction(action.TOGGLE_SIDE_BAR),
};
