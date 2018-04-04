import { createMuiTheme } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';
import grey from 'material-ui/colors/grey';

const OPEN_SIDE_BAR_WIDTH = 30;
const CLOSE_SIDE_BAR_WIDTH = 5;
const baseTheme = createMuiTheme({});

export default createMuiTheme({
  palette: {
    primary: {
      light: teal[300],
      main: teal[600],
      dark: teal[800],
    },
    secondary: {
      light: grey[100],
      main: grey[100],
      dark: grey[700],
    },
  },
  sideBar: {
    openWidth: OPEN_SIDE_BAR_WIDTH,
    closeWidth: CLOSE_SIDE_BAR_WIDTH,
    background: grey[800],
    transition: `width 0.3s ${baseTheme.transitions.easing.easeInOut}`,
    getWidth(isOpen = false) {
      const width = isOpen ? OPEN_SIDE_BAR_WIDTH : CLOSE_SIDE_BAR_WIDTH;
      return width * baseTheme.spacing.unit;
    },
  },
});
