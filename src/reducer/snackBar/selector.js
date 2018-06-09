const getState = state => state.snackBar;

export default {
  getSnackBarMessage: state => getState(state).message,
  getIsSnackBarOpen: state => getState(state).open,
  getUndo: state => getState(state).undo,
};
