import { createMuiTheme } from 'material-ui/styles';
import teal from 'material-ui/colors/teal';
import grey from 'material-ui/colors/grey';

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
});
