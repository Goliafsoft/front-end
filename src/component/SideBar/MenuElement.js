import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';

const SideBar = ({
  classes, open, label, iconName,
}) => {
  const buttonClasses = { root: classes.button, label: classes.label };
  const tooltip = open ? '' : label;

  return (
    <Tooltip title={tooltip} placement="right">
      <Button fullWidth classes={buttonClasses}>
        <Icon className={classes.icon} >{iconName}</Icon>
        {label}
      </Button>
    </Tooltip>
  );
};

SideBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  open: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default SideBar;
