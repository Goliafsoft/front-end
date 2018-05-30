import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ classes }) => (
  <div className={classes.base} />
);

Loading.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default Loading;
