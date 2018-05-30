import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ classes }) => (
  <div className={classes.base}>
    Not Found
  </div>
);

NotFound.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default NotFound;
