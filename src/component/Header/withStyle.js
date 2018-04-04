import { withStyles } from 'material-ui/styles';

const style = ({
  spacing, palette, sideBar, header,
}) => ({
  tool: {
    height: header.height,
    marginLeft: sideBar.getWidth(),
    transition: sideBar.transition('margin'),
  },
  toolOpen: {
    marginLeft: sideBar.getWidth(true),
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
