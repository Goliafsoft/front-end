import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { page } from '../../hoc';

@page
class Home extends PureComponent {
  static propTypes = {
    home: PropTypes.string,
    classes: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    home: 'Home',
  };

  state = {
    hello: 'hello',
  };

  render() {
    console.log('render');
    const { hello } = this.state;
    const { home, classes } = this.props;
    return (
      <div className={classes.base}>
        {hello} {home}
      </div>
    );
  }
}

export default Home;
