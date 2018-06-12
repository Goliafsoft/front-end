import snackBarCreator from 'reducer/snackBar/selector';
import sideBarCreator from 'reducer/sideBar/selector';

const { closeSnackBar } = snackBarCreator;
const { toggleSideBar } = sideBarCreator;


export default {
  closeSnackBar,
  toggleSideBar,
};
