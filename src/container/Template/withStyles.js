import { withStyles } from 'material-ui/styles';

const style = () => ({
  wrapper: {
    height: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
  },
});

export default withStyles(style);
