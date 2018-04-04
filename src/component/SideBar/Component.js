import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

const SideBar = ({ classes, open }) => (
  <div className={classNames(classes.sideBarClose, { [classes.sideBarOpen]: open })}>
    <div className={classes.logo}> LOGO </div>
    menu
  </div>
);

SideBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  open: PropTypes.bool.isRequired,
};

export default SideBar;
