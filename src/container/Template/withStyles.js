import { withStyles } from 'material-ui/styles';

const style = ({ sideBar, header, spacing }) => ({
  wrapper: {
    padding: 3 * spacing.unit,
    paddingLeft: sideBar.getWidth() + (3 * spacing.unit),
    width: '100%',
    transition: sideBar.transition('padding'),
    height: `calc(100vh - ${header.height * spacing.unit}px)`,
    display: 'flex',
    flexDirection: 'column',
  },
  wrapperFull: {
    paddingLeft: sideBar.getWidth(true) + (3 * spacing.unit),
  },
});

export default withStyles(style);
