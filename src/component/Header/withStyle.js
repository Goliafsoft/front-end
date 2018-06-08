import { withStyles } from 'material-ui/styles';

const style = ({
  spacing, palette, sideBar, header,
}) => ({
  tool: {
    height: header.height * spacing.unit,
    marginLeft: sideBar.getWidth(),
    transition: sideBar.transition('margin'),
    '& svg': {
      color: palette.getContrastText(palette.primary.main),
    },
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
  icons: {
    marginRight: 2 * spacing.unit,
  },
  avatar: {
    width: 4 * spacing.unit,
    height: 4 * spacing.unit,
    fontSize: '1rem',
    color: palette.getContrastText(palette.primary.main),
    background: palette.primary.light,
  },
});

export default withStyles(style);
