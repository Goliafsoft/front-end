const getState = state => state.sideBar;

export default {
  isSideBarOpen: state => getState(state).open,
};
