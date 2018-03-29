import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ hello, world, classes }) => (
  <div className={classes.base}>
    {hello} {world}
  </div>
);

Component.propTypes = {
  hello: PropTypes.string,
  world: PropTypes.string,
  classes: PropTypes.shape().isRequired,
};

Component.defaultProps = {
  hello: 'hello',
  world: 'word',
};

export default Component;
