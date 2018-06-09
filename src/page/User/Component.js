import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { page } from 'hoc';

@page
class CustomComponent extends Component {
  static propTypes = {
    world: PropTypes.string,
    openTab: PropTypes.func.isRequired,
    match: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    world: 'user',
  };

  state = {
    hello: 'hello',
  };

  componentDidMount() {
    const { openTab, match, location } = this.props;
    const { id } = match.params;
    openTab({
      href: location.pathname,
      label: `User ${id}`,
      logo: 'people',
    });
    console.log(id);
  }

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
