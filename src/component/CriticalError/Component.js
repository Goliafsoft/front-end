import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ classes, message }) => (
  <div className={classes.base}>
    {message}
  </div>
);

Component.propTypes = {
  message: PropTypes.string,
  classes: PropTypes.shape().isRequired,
};

Component.defaultProps = {
  message: 'Oooops error',
};

export default Component;
