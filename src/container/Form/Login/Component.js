import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';

import { TextField } from '../../../component/Fields';
import { SaveButton } from '../../../component/Button';

import Form from '../../../component/Form';

class LoginForm extends Component {
  state = {
    showPassword: false,
  };

  togglePassword = () => {
    this.setState(({ showPassword }) => ({ showPassword: !showPassword }));
  };

  render() {
    const { classes, handleSubmit } = this.props;
    const { showPassword } = this.state;
    return (
      <Form className={classes.base} handleSubmit={handleSubmit}>
        <Field
          name="name"
          label="Name"
          component={TextField}
          type="text"
          tooltip="Enter Name"
        />
        <Field
          name="password"
          label="Password"
          component={TextField}
          type={showPassword ? 'text' : 'password'}
          onIconClick={this.togglePassword}
          tooltip={showPassword ? 'Hide Password' : 'Show Password'}
          Icon={showPassword ? <Visibility /> : <VisibilityOff />}
        />
        <SaveButton label="LOG IN" />
      </Form>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.shape().isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
