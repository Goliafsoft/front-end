import React from 'react';
import { Field } from 'redux-form';

import PropTypes from 'prop-types';

const LoginForm = ({ classes }) => (
  <form className={classes.base} >
    <Field
      name="name"
      component="input"
      type="text"
      placeholder="Name"
    />
    <Field
      name="password"
      component="input"
      type="password"
      placeholder="Password"
    />
  </form>
);

LoginForm.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default LoginForm;
