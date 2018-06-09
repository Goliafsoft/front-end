import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { page } from 'hoc';

@page
class CustomComponent extends Component {
  static propTypes = {
    world: PropTypes.string,
  };

  static defaultProps = {
    world: 'users',
  };

  state = {
    hello: 'hello',
  };

  render() {
    const { hello } = this.state;
    const { world } = this.props;
    return (
      <div>
        <NavLink to="/user/1">User 1</NavLink>
        <NavLink to="/user/2">User 1</NavLink>
        {hello} {world}
      </div>
    );
  }
}

export default CustomComponent;
