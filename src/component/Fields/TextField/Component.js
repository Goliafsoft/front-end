import React from 'react';
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
  Icon,
  meta: { touched, error },
  ...custom
}) => {
  const IconElement = onIconClick ? (
    <IconButton onClick={onIconClick}>
      {Icon}
    </IconButton>)
    : Icon;
  return (
    <FormControl>
      <InputLabel>{error || label}</InputLabel>
      <Input
        error={touched && !!error}
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
};

export default CustomTextField;

