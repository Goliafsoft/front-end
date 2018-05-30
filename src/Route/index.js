import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';

import Template from 'container/Template';

import connect from './connect';
import Main from './Main';
import history from './history';

const Route = ({ isAuthDone }) => {
  if (!isAuthDone) return null;
  return (
    <Router history={history}>
      <Template>
        <Main />
      </Template>
    </Router>
  );
};

Route.propTypes = {
  isAuthDone: PropTypes.bool.isRequired,
};

export default connect(Route);
