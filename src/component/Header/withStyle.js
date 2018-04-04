import { withStyles } from 'material-ui/styles';

const style = theme => ({
  title: {
    flex: 1,
  },
  badge: {
    top: 0,
    right: 0,
  },
  avatar: {
    width: 4 * theme.spacing.unit,
    height: 4 * theme.spacing.unit,
    fontSize: '1rem',
    color: theme.palette.primary.main,
    background: theme.palette.secondary.main,
  },
});

export default withStyles(style);
