import history from 'Route/history';

const getState = state => state.tab;
const getTabs = state => getState(state).value.sort((a, b) => a.index - b.index);

const getActiveTabIndex = state => getTabs(state).findIndex(({ href }) => (href === history.location.pathname));

export default {
  getTabs,
  getNextTab(state) {
    const activeTabIndex = getActiveTabIndex(state);
    const tabs = getTabs(state);
    if (tabs.length < 2) return false;
    const index = activeTabIndex ? activeTabIndex - 1 : 1;
    return tabs[index];
  },
};
