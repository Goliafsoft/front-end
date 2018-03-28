const label = 'snackBar';

export default {
  getSnackBarMessage: state => state[label].message,
  getIsSnackBarOpen: state => state[label].open,
};
