import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import PermissionDenied from 'component/PermissionDenied';

const CustomRoute = ({ Component, canVisit, ...rest }) => (
  <Route {...rest} render={() => (canVisit ? <Component /> : <PermissionDenied />)} />
);

CustomRoute.propTypes = {
  Component: PropTypes.func.isRequired,
  canVisit: PropTypes.bool,
};

CustomRoute.defaultProps = {
  canVisit: true,
};

export default CustomRoute;
