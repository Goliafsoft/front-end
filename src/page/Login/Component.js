import React, { Component } from 'react';

import LoginForm from 'form/Login';

import { page } from 'hoc';

@page
class LoginPage extends Component {
  render() {
    return (
      <LoginForm />
    );
  }
}

export default LoginPage;
