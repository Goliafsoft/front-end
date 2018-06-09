import { withStyles } from '@material-ui/core/styles';

const style = ({ spacing, palette }) => ({
  base: {
    display: 'flex',
    background: '#fff',
  },
  link: {
    width: spacing.unit * 30,
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
  },
  linkIcon: {
    textDecoration: 'none',
    paddingLeft: spacing.unit,
    paddingRight: spacing.unit,
    minWidth: 8 * spacing.unit,
    borderBottom: `1px solid ${palette.primary.main}`,
    borderRadius: 0,
  },
  icon: {
    marginRight: spacing.unit,
    marginLeft: spacing.unit,
  },
  buttonWrapper: {
    display: 'flex',
  },
  tabButton: {
    justifyContent: 'left',
    display: 'flex',
    width: '100%',
    borderTop: `1px solid ${palette.primary.main}`,
    borderBottom: `1px solid ${palette.primary.main}`,
    background: '#e6e6e6',
    borderRadius: 0,
  },
  activeLink: {
    '& > button': {
      background: '#fff',
      borderBottom: 0,
    },
    '& > button:hover': {
      background: '#fff',
    },
  },
  leftCorner: {
    left: 0,
    borderRight: `${3 * spacing.unit}px solid transparent`,
  },
  rightCorner: {
    right: 0,
    borderLeft: `${3 * spacing.unit}px solid transparent`,
  },
  corner: {
    borderTop: `${5 * spacing.unit}px solid #fff`,
    position: 'absolute',
    height: 0,
    width: 0,
    top: 0,
  },
  leftCornerSplit: {
    top: -3,
    left: 11,
    transform: 'rotate(30deg)',
  },
  rightCornerSplit: {
    top: -3,
    right: 11,
    transform: 'rotate(-30deg)',
  },
  split: {
    width: 1,
    background: palette.primary.main,
    position: 'absolute',
    height: 48,
  },
  deleteIcon: {
    '&:hover': {
      color: 'red',
    },
  },
  label: {
    flex: 1,
    textAlign: 'left',
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  loading: {
    textAlign: 'center',
  },
});

export default withStyles(style);
