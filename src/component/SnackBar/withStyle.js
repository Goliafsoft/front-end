import { withStyles } from '@material-ui/core/styles';

const style = ({ spacing, palette }) => ({
  close: {
    width: spacing.unit * 4,
    height: spacing.unit * 4,
  },
  button: {
    color: palette.error.main,
  },
});

export default withStyles(style);
