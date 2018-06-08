import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
  icon: {
    marginLeft: 1.5 * theme.spacing.unit,
    marginRight: 1.5 * theme.spacing.unit,
  },
  input: {
    width: 36 * theme.spacing.unit,
    marginBottom: 3 * theme.spacing.unit,
  },
});

export default withStyles(style);
