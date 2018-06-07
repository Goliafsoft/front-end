import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';
import Button from 'material-ui/Button';
import history from '../../Route/history';

import MenuElement from './MenuElement';
import config from './config';
import logo from '../../asset/image/logo.svg';

class SideBar extends Component {
  static contextTypes = {
    history: PropTypes.shape(),
  };

  constructor(props) {
    super(props);
    this.history = history;
  }

  onLogoClick = () => this.changeUrl('/');

  changeUrl = (url) => {
    this.history.push(url);
  };

  render() {
    const { classes, open } = this.props;

    const sideBarClassName = classNames(classes.sideBarClose, { [classes.sideBarOpen]: open });
    const buttonClassName = classNames(classes.button, classes.logo);
    const logoClasses = { root: buttonClassName, label: classes.label };

    return (
      <div className={sideBarClassName}>
        <div className={classes.sideBarInclude}>
          <Button fullWidth classes={logoClasses} onClick={this.onLogoClick}>
            <img className={classes.logoImage} src={logo} alt="logo" />
            Eight pixels
          </Button>
          <menu className={classes.menu}>
            {config.menu.map(({ id, ...rest }) => (
              <li key={id}>
                <MenuElement classes={classes} showTooltip={!open} {...rest} />
              </li>
            ))}
          </menu>
        </div>
      </div>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  open: PropTypes.bool.isRequired,
};

export default SideBar;
