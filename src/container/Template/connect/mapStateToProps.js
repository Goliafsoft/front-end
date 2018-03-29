import { selector } from '../../../reducer/snackBar';

export default function (state) {
  return {
    openSnackBar: selector.getIsSnackBarOpen(state),
    snackBarMessage: selector.getSnackBarMessage(state),
  };
}
