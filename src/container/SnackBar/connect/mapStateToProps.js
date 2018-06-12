import snackBarSelector from 'reducer/snackBar/selector';

export default function (state) {
  return {
    isSnackBarOpen: snackBarSelector.getIsSnackBarOpen(state),
    snackBarMessage: snackBarSelector.getSnackBarMessage(state),
    undo: snackBarSelector.getUndo(state),
  };
}
