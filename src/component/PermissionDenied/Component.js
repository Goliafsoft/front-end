import React from 'react';
import PropTypes from 'prop-types';

const PermissionDenied = ({ classes }) => (
  <div className={classes.base}>
    Permission denied
  </div>
);

PermissionDenied.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default PermissionDenied;
