import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { page } from 'hoc';

@page
class CustomComponent extends Component {
  static propTypes = {
    world: PropTypes.string,
  };

  static defaultProps = {
    world: 'user',
  };

  state = {
    hello: 'hello',
  };

  render() {
    const { hello } = this.state;
    const { world } = this.props;
    return (
      <div>
        {hello} {world}
      </div>
    );
  }
}

export default CustomComponent;
