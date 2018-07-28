import { withStyles } from '@material-ui/core/styles';

import sideBarImage from '../../asset/image/side-bar.jpg';

const style = ({
  sideBar, header, spacing, palette, color,
}) => ({
  sideBarClose: {
    width: sideBar.getWidth(),
    transition: sideBar.transition(''),
    position: 'absolute',
    height: '100vh',
    backgroundImage: `url("${sideBarImage}")`,
    backgroundSize: 'auto 100%',
    backgroundPositionX: 182,
    backgroundPosition: 'center',
  },
  sideBarOpen: {
    width: sideBar.getWidth(true),
    backgroundPositionX: 300,
  },
  logoImage: {
    width: 50,
    marginLeft: 3,
    marginRight: 3,
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
    color: color.darkGrey,
    '&:hover': {
      color: color.white,
    },
    '&:hover div': {
      height: '100%',
    },
  },
  sideBarInclude: {
    background: sideBar.background,
    height: '100vh',
  },
  label: {
    width: 'auto',
    whiteSpace: 'nowrap',
    '& span': {
      fontSize: 4 * spacing.unit,
      marginLeft: (sideBar.getWidth() - (4 * spacing.unit)) / 2,
      marginRight: (sideBar.getWidth() - (4 * spacing.unit)) / 2,
    },
  },
  strip: {
    height: 0,
    width: 0.5 * spacing.unit,
    background: palette.primary.dark,
    position: 'absolute',
    transition: sideBar.transition(''),
  },
  logo: {
    height: header.height * spacing.unit,
    display: 'flex',
    fontSize: '1rem',
    color: palette.secondary.main,
  },
  link: {
    textDecoration: 'none',
  },
});

export default withStyles(style);
