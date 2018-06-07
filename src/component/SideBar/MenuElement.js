import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';
import { NavLink } from 'react-router-dom';

const MenuElement = ({
  classes, showTooltip, label, iconName, href,
}) => {
  const buttonClasses = { root: classes.button, label: classes.label };
  const tooltip = showTooltip ? label : '';

  return (
    <Tooltip title={tooltip} placement="right">
      <NavLink className={classes.link} to={href}>
        <Button fullWidth classes={buttonClasses}>
          <div className={classes.strip} />
          <Icon className={classes.icon} >{iconName}</Icon>
          {label}
        </Button>
      </NavLink>
    </Tooltip>
  );
};

MenuElement.propTypes = {
  classes: PropTypes.shape().isRequired,
  showTooltip: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default MenuElement;
