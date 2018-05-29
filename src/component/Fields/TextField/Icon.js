import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

const InputIcon = ({
  onIconClick, Icon, classes, isError,
}) => {
  const color = isError ? 'error' : 'primary';
  const InputIconElement = cloneElement(Icon, { color, className: classes.icon });

  return (
    onIconClick ?
      <IconButton onClick={onIconClick}>
        {InputIconElement}
      </IconButton> : InputIconElement
  );
};

InputIcon.propTypes = {
  Icon: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]).isRequired,
  onIconClick: PropTypes.func,
  classes: PropTypes.shape().isRequired,
  isError: PropTypes.bool.isRequired,
};

InputIcon.defaultProps = {
  onIconClick: undefined,
};

export default InputIcon;
