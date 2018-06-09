import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';

const OPEN_SIDE_BAR_WIDTH = 30;
const CLOSE_SIDE_BAR_WIDTH = 7;
const HEADER_HEIGHT = 8;

const baseTheme = createMuiTheme({});

export default createMuiTheme({
  palette: {
    primary: {
      light: teal.A700,
      main: teal[800],
      dark: teal[900],
    },
    secondary: {
      light: grey[100],
      main: grey[100],
      dark: grey[500],
    },
  },
  header: {
    height: HEADER_HEIGHT,
  },
  sideBar: {
    openWidth: OPEN_SIDE_BAR_WIDTH,
    closeWidth: CLOSE_SIDE_BAR_WIDTH,
    color: grey[500],
    background: 'rgba(0,0,0, 0.7)',
    transition: (val = 'width') => `${val} .35s ${baseTheme.transitions.easing.easeInOut}`,
    getWidth(isOpen = false) {
      const width = isOpen ? OPEN_SIDE_BAR_WIDTH : CLOSE_SIDE_BAR_WIDTH;
      return width * baseTheme.spacing.unit;
    },
  },
});
