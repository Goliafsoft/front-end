import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { compose } from 'redux';

import Component from './Component';
import { mapStateToProps, mapDispatchToFunc } from './controller';
import style from './style';

export default compose(
  withStyles(style),
  connect(mapStateToProps, mapDispatchToFunc),
)(Component);

