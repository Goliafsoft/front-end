import { createAction } from 'redux-actions';

import action from './action';

export const openSnackBar = createAction(action.SNACK_BAR_OPEN);
export const closeSnackBar = createAction(action.SNACK_BAR_CLOSE);
