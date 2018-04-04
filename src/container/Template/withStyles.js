import { withStyles } from 'material-ui/styles';

const style = ({ sideBar }) => ({
  wrapper: {
    width: `calc(100vw - ${sideBar.getWidth()}px)`,
    transition: sideBar.transition,
    height: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    float: 'right',
  },
  wrapperFull: {
    width: `calc(100vw - ${sideBar.getWidth(true)}px)`,
  },
});

export default withStyles(style);
