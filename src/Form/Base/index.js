import { compose } from 'redux';

import Component from './Component';
import connect from './connect';
import withStyles from './withStyles';

export default compose(withStyles, connect)(Component);
