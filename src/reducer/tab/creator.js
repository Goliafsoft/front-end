import { createAction } from 'redux-actions';
import history from 'Route/history';

import action from './action';
import selector from './selector';

const removeTab = createAction(action.REMOVE_TAB);

export default {
  removeTab,
  closeTab(href) {
    return (dispatch, getState) => {
      const isActiveTab = history.location.pathname === href;
      if (isActiveTab) {
        const nextTab = selector.getNextTab(getState());
        if (nextTab) history.push(nextTab.href);
      }
      dispatch(removeTab(href));
    };
  },
};
