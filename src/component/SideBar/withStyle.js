import { withStyles } from 'material-ui/styles';

const style = ({ sideBar, header, spacing }) => ({
  sideBarClose: {
    width: sideBar.getWidth(),
    height: '100vh',
    background: sideBar.background,
    transition: sideBar.transition(),
    position: 'absolute',
  },
  sideBarOpen: {
    width: sideBar.getWidth(true),
  },
  logo: {
    height: header.height * spacing.unit,
  },
});

export default withStyles(style);
