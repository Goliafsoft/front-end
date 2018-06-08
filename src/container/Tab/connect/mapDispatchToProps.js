import tabCreator from 'reducer/tab/creator';
import snackBarCreator from 'reducer/snackBar/creator';

export default function (dispatch) {
  return {
    closeTab: (href) => {
      dispatch(tabCreator.closeTab(href));
      dispatch(snackBarCreator.openSnackBar({
        message: 'Tab was closed',
      }));
    },
  };
}
