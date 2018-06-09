import authSelector from 'reducer/auth/selector';

import snackBarSelector from 'reducer/snackBar/selector';
import sideBarSelector from 'reducer/sideBar/selector';

export default function (state) {
  return {
    openSnackBar: snackBarSelector.getIsSnackBarOpen(state),
    snackBarMessage: snackBarSelector.getSnackBarMessage(state),
    isSideBarOpen: sideBarSelector.isSideBarOpen(state),
    undo: snackBarSelector.getUndo(state),
    isAuthorise: authSelector.isAuthorise(state),
    initials: authSelector.getInitials(state),
  };
}
