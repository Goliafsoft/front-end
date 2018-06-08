import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from 'component/Tab';
import history from 'Route/history';

class TabsContainer extends Component {
  static propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape).isRequired,
    closeTab: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { closeTab } = this.props;
    window.addEventListener('keydown', (event) => {
      if (event.key === 'w') {
        closeTab(history.location.pathname);
        event.preventDefault();
      }
    });
  }

  render() {
    const { tabs, closeTab } = this.props;
    return (
      <Tab
        items={tabs}
        closeTab={closeTab}
      />
    );
  }
}

export default TabsContainer;
