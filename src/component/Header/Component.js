import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import Notifications from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classname';
import Fullscreen from '@material-ui/icons/Fullscreen';
import FullscreenExit from '@material-ui/icons/FullscreenExit';
import screenfull from 'screenfull';

class Header extends Component {
  state = {
    fullScreen: false,
    fullScreenEnable: screenfull.enabled,
  };


  componentDidMount() {
    screenfull.onchange(() => this.setState(({ fullScreen }) => ({ fullScreen: !fullScreen })));
  }

  toggleFullScreen = () => {
    screenfull.toggle();
  };

  render() {
    const { fullScreen, fullScreenEnable } = this.state;
    const {
      classes, open, toggle, initials,
    } = this.props;
    const badgeClasses = { badge: classes.badge, root: classes.icons };
    const toolbarClassName = classNames(classes.tool, { [classes.toolOpen]: open });

    return (
      <AppBar position="static">
        <Toolbar className={toolbarClassName}>
          <IconButton aria-label="Menu" color="secondary" onClick={toggle}>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} type="title">
            Admin Panel
            {fullScreenEnable && (
              <IconButton color="secondary" onClick={this.toggleFullScreen}>
                {fullScreen ? <FullscreenExit /> : <Fullscreen />}
              </IconButton>)}
          </Typography>
          <div>
            <Badge color="error" badgeContent={10} classes={badgeClasses}>
              <IconButton color="secondary">
                <Notifications />
              </IconButton>
            </Badge>
            <IconButton aria-owns="menu-appbar" aria-haspopup="true" color="secondary">
              <Avatar className={classes.avatar}>{initials}</Avatar>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.shape().isRequired,
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  initials: PropTypes.string.isRequired,
};

export default Header;
