import React, { Component } from 'react';

import PropTypes from 'prop-types';
import LoginForm from 'form/Login';

import { page } from 'hoc';

@page
class LoginPage extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <LoginForm style={classes} />
    );
  }
}

export default LoginPage;
