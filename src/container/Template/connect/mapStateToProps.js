import authSelector from 'reducer/auth/selector';

import snackBarSelector from 'reducer/snackBar/selector';
import sideBarSelector from 'reducer/sideBar/selector';
import tabSelector from 'reducer/tab/selector';

export default function (state) {
  return {
    openSnackBar: snackBarSelector.getIsSnackBarOpen(state),
    snackBarMessage: snackBarSelector.getSnackBarMessage(state),
    isSideBarOpen: sideBarSelector.isSideBarOpen(state),
    isAuthorise: authSelector.isAuthorise(state),
    initials: authSelector.getInitials(state),
    tabs: tabSelector.getTabs(state),
  };
}
