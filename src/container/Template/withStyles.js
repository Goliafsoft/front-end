import { withStyles } from 'material-ui/styles';

const style = ({ sideBar, header, spacing }) => ({
  wrapper: {
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
});

export default withStyles(style);
