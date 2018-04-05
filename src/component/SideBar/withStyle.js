import { withStyles } from 'material-ui/styles';

const style = ({
  sideBar, header, spacing, palette,
}) => ({
  sideBarClose: {
    width: sideBar.getWidth(),
    transition: sideBar.transition(),
    position: 'absolute',
    height: '100vh',
    backgroundImage: 'url("src/asset/image/side-bar.jpg")',
    backgroundSize: 'auto 100%',
    backgroundPositionX: 300,
    backgroundPosition: 'center',
  },
  sideBarOpen: {
    width: sideBar.getWidth(true),
  },
  logo: {
    height: header.height * spacing.unit,
    display: 'flex',
  },
  logoImage: {
    width: 50,
    marginLeft: 2,
    marginRight: 2,
  },
  menu: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  button: {
    justifyContent: 'normal',
    paddingLeft: 0,
    paddingRight: 0,
    minWidth: 0,
    overflow: 'hidden',
    color: palette.secondary.dark,
    '&:hover': {
      color: palette.secondary.main,
    },
  },
  sideBarInclude: {
    background: sideBar.background,
    height: '100vh',
  },
  label: {
    width: 'auto',
    whiteSpace: 'nowrap',
  },
  icon: {
    fontSize: 32,
    marginLeft: (sideBar.getWidth() - 32) / 2,
    marginRight: (sideBar.getWidth() - 32) / 2,
  },
});

export default withStyles(style);
