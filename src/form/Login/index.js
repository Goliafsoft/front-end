import { compose } from 'redux';
import { reduxForm } from 'redux-form';

import Component from './Component';
import withStyles from './withStyles';

export default compose(
  withStyles,
  reduxForm({
    form: 'login',
  }),
)(Component);
