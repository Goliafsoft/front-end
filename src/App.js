
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
import Route from './Route';
import MaterialTheme from './MaterialTheme';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

export default () => (
  <Provider store={store}>
    <MaterialTheme>
      <Route />
    </MaterialTheme>
  </Provider>
);
