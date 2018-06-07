const getState = state => state.tab;

export default {
  getTabs: state => getState(state).value,
};
