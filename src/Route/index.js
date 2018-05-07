import React from 'react';
import { Router } from 'react-router-dom';

import Template from '../container/Template';
import Main from './Main';
import history from './history';

const Route = () => (
  <Router history={history}>
    <Template>
      <Main />
    </Template>
  </Router>
);

export default Route;
