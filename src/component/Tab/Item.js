import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Close from 'material-ui-icons/Close';
import CircularProgress from 'material-ui/Progress/CircularProgress';
import classNames from 'classname';

class TabItem extends Component {
  closeTab = (e) => {
    e.preventDefault();
  };

  render() {
    const {
      label, classes, href, logo,
    } = this.props;
    const labelClassName = classNames(classes.label, { [classes.loading]: !label });
    console.log(labelClassName);
    return (
      <NavLink to={href} activeClassName={classes.activeLink} className={classes.link}>
        <Button
          color="primary"
          className={classes.tabButton}
        >
          <Icon className={classes.icon} >{logo}</Icon>
          <span className={labelClassName}> {label || <CircularProgress size={20} />}</span>
          <Close onClick={this.closeTab} color="primary" className={classNames(classes.icon, classes.deleteIcon)} />
        </Button>
        <div className={classNames(classes.corner,classes.leftCorner)} />
        <div className={classNames(classes.corner,classes.rightCorner)} />
        <div className={classNames(classes.split, classes.leftCornerSplit)} />
        <div className={classNames(classes.split, classes.rightCornerSplit)} />
      </NavLink>
    );
  }
}

TabItem.propTypes = {
  classes: PropTypes.shape().isRequired,
  label: PropTypes.string,
  href: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

TabItem.defaultProps = {
  label: undefined,
};

export default TabItem;
