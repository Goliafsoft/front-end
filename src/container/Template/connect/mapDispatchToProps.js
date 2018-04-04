import { creator as snackBarCreator } from '../../../reducer/snackBar';
import { creator as sideBarCreator } from '../../../reducer/sideBar';

const { closeSnackBar } = snackBarCreator;
const { toggleSideBar } = sideBarCreator;

export default {
  closeSnackBar,
  toggleSideBar,
};
