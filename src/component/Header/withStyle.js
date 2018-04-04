import { withStyles } from 'material-ui/styles';

const style = ({ spacing, palette, sideBar }) => ({
  header: {
    width: `calc(100vw - ${sideBar.getWidth()}px)`,
    float: 'left',
    transition: sideBar.transition,
  },
  headerFull: {
    width: `calc(100vw - ${sideBar.getWidth(true)}px)`,
  },
  title: {
    flex: 1,
  },
  badge: {
    top: 0,
    right: 0,
  },
  avatar: {
    width: 4 * spacing.unit,
    height: 4 * spacing.unit,
    fontSize: '1rem',
    color: palette.primary.main,
    background: palette.secondary.main,
  },
});

export default withStyles(style);
