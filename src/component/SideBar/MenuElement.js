import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';

const SideBar = ({
  classes, showTooltip, label, iconName, onChange, href,
}) => {
  const buttonClasses = { root: classes.button, label: classes.label };
  const tooltip = showTooltip ? label : '';

  return (
    <Tooltip title={tooltip} placement="right">
      <Button onClick={() => onChange(href)} fullWidth classes={buttonClasses}>
        <div className={classes.strip} />
        <Icon className={classes.icon} >{iconName}</Icon>
        {label}
      </Button>
    </Tooltip>
  );
};

SideBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  showTooltip: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired,
};

export default SideBar;
