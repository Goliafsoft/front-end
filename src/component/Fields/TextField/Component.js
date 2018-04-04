import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';


import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Info from 'material-ui-icons/Info';
import Tooltip from 'material-ui/Tooltip';

const CustomTextField = ({
  input,
  label,
  tooltip,
  onIconClick,
  autoComplete,
  Icon,
  classes,
  meta: { touched, error },
  ...custom
}) => {
  const IconElement = onIconClick ? (
    <IconButton onClick={onIconClick} color="primary">
      {Icon}
    </IconButton>)
    : cloneElement(Icon, { color: 'primary', className: classes.icon });
  return (
    <FormControl className={classes.input}>
      <InputLabel>{error || label}</InputLabel>
      <Input
        error={touched && !!error}
        autoComplete={autoComplete}
        {...input}
        {...custom}
        endAdornment={
          <Tooltip title={tooltip}>
            <InputAdornment position="end">
              {IconElement}
            </InputAdornment>
          </Tooltip>
        }
      />
    </FormControl>
  );
};

CustomTextField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
  tooltip: PropTypes.string,
  onIconClick: PropTypes.func,
  autoComplete: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  classes: PropTypes.shape().isRequired,
};

CustomTextField.defaultProps = {
  tooltip: '',
  onIconClick: undefined,
  Icon: <Info />,
  autoComplete: 'off',
};

export default CustomTextField;

