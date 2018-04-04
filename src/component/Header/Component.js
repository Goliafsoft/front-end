import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Badge from 'material-ui/Badge';
import Notifications from 'material-ui-icons/Notifications';
import Avatar from 'material-ui/Avatar';
import classNames from 'classname';

const Component = ({ classes, open, toggle }) => (
  <AppBar position="static">
    <Toolbar className={classNames(classes.tool, { [classes.toolOpen]: open })}>
      <IconButton aria-label="Menu" color="secondary" onClick={toggle}>
        <MenuIcon />
      </IconButton>
      <Typography className={classes.title} type="title" color="secondary">
        Admin Panel
      </Typography>
      <div>
        <Badge color="error" badgeContent={10} classes={{ badge: classes.badge, root: classes.icons }}>
          <IconButton color="secondary">
            <Notifications />
          </IconButton>
        </Badge>
        <IconButton
          aria-owns="menu-appbar"
          aria-haspopup="true"
          color="secondary"
        >
          <Avatar className={classes.avatar}>MD</Avatar>
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

Component.propTypes = {
  classes: PropTypes.shape().isRequired,
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Component;
