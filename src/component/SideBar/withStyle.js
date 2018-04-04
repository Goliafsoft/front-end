import { withStyles } from 'material-ui/styles';

const style = ({ sideBar }) => ({
  sideBarClose: {
    width: sideBar.getWidth(),
    height: '100vh',
    background: sideBar.background,
    float: 'left',
    transition: sideBar.transition,
  },
  sideBarOpen: {
    width: sideBar.getWidth(true),
  },
});

export default withStyles(style);
