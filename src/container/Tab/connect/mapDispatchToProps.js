import tabCreator from 'reducer/tab/creator';
import snackBarCreator from 'reducer/snackBar/creator';
import history from 'Route/history';

export default function (dispatch) {
  return {
    closeTab: (href) => {
      const startUrl = history.location.pathname;
      dispatch(tabCreator.closeTab(href));
      dispatch(snackBarCreator.openSnackBar({
        message: 'Tab was closed',
        undo: () => {
          dispatch(tabCreator.resetTab());
          history.push(startUrl);
        },
      }));
    },
    openTab: tab => dispatch(tabCreator.openTab(tab)),
  };
}
