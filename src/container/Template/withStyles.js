import { withStyles } from 'material-ui/styles';

const style = ({ sideBar, header, spacing }) => ({
  wrapper: {
    paddingTop: 3 * spacing.unit,
    paddingBottom: 3 * spacing.unit,
    paddingLeft: sideBar.getWidth(),
    width: '100%',
    transition: sideBar.transition('padding'),
    height: `calc(100vh - ${header.height * spacing.unit}px)`,
    display: 'flex',
    flexDirection: 'column',
  },
  wrapperFull: {
    paddingLeft: sideBar.getWidth(true),
  },
  wrapperPage: {
    height: '100vh',
    padding: 0,
  },
});

export default withStyles(style);
