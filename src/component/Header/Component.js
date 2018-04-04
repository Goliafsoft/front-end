import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Badge from 'material-ui/Badge';
import MailIcon from 'material-ui-icons/Mail';
import AddAlert from 'material-ui-icons/AddAlert';
import Avatar from 'material-ui/Avatar';

const Component = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton aria-label="Menu" color="secondary">
        <MenuIcon />
      </IconButton>
      <Typography className={classes.title} type="title" color="secondary">
        Admin Panel
      </Typography>
      <div>
        <Badge color="error" badgeContent={10} classes={{ badge: classes.badge }}>
          <IconButton color="secondary">
            <AddAlert />
          </IconButton>
        </Badge>
        <Badge color="error" badgeContent={4} classes={{ badge: classes.badge }}>
          <IconButton color="secondary">
            <MailIcon />
          </IconButton>
        </Badge>
        <IconButton
          aria-owns="menu-appbar"
          aria-haspopup="true"
          color="secondary"
        >
          <Avatar className={classes.avatar}>DM</Avatar>
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
);

Component.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default Component;
