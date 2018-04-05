import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';
import MenuElement from './MenuElement';
import config from './config';

const SideBar = ({ classes, open }) => {
  const sideBarClassName = classNames(classes.sideBarClose, { [classes.sideBarOpen]: open });

  return (
    <div className={sideBarClassName}>
      <div className={classes.sideBarInclude}>
        <div className={classes.logo}>
          <img className={classes.logoImage} src="/src/asset/image/logo.svg" alt="logo" />
        </div>
        <menu className={classes.menu}>
          {config.menu.map(({ id, label, iconLabel }) => (
            <li key={id}>
              <MenuElement classes={classes} open={open} label={label} iconName={iconLabel} />
            </li>
          ))}
        </menu>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  open: PropTypes.bool.isRequired,
};

export default SideBar;
