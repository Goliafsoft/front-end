import { selector as selectorSnackBar } from '../../../reducer/snackBar';
import { selector as selectorSideBar } from '../../../reducer/sideBar';

export default function (state) {
  return {
    openSnackBar: selectorSnackBar.getIsSnackBarOpen(state),
    snackBarMessage: selectorSnackBar.getSnackBarMessage(state),
    isSideBarOpen: selectorSideBar.isSideBarOpen(state),
  };
}
