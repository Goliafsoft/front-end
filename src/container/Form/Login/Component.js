import React, { Component } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import { TextField } from '../../../component/Fields';


class LoginForm extends Component {
  state = {
    showPassword: false,
  };

  togglePassword = () => {
    this.setState(({ showPassword }) => ({ showPassword: !showPassword }));
  };

  render() {
    const { classes } = this.props;
    const { showPassword } = this.state;
    return (
      <form className={classes.base} >
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
      </form>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default LoginForm;
