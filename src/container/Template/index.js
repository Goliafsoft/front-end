import { compose } from 'redux';
import { withRouter } from 'react-router';

import Component from './Component';
import connect from './connect';
import withStyles from './withStyles';

export default compose(
  withRouter,
  withStyles,
  connect,
)(Component);
