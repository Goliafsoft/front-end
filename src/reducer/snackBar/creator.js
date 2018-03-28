import { createAction } from 'redux-actions';

import action from './action';

export default {
  openSnackBar: createAction(action.SNACK_BAR_OPEN),
  closeSnackBar: createAction(action.SNACK_BAR_CLOSE),
};
