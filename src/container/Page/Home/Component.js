import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { page } from '../../../hoc';

@page
class CustomComponent extends Component {
  static propTypes = {
    world: PropTypes.string,
    classes: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    world: 'Home',
  };

  state = {
    hello: 'hello',
  };

  render() {
    const { hello } = this.state;
    const { world, classes } = this.props;
    return (
      <div className={classes.base}>
        {hello} {world}
      </div>
    );
  }
}

export default CustomComponent;
