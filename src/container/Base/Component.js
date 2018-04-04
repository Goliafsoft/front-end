import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomComponent extends Component {
  static propTypes = {
    world: PropTypes.string,
    classes: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    world: 'word',
  };

  state = {
    hello: 'hello',
  };

  submit = () => {

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
