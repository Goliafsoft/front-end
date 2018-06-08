import { compose } from 'redux';
import { withRouter } from 'react-router';

import Component from './Component';
import connect from './connect';

export default compose(
  withRouter,
  connect,
)(Component);
