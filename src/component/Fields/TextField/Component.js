import React from 'react';
import PropTypes from 'prop-types';


import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Info from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';

import InputIcon from './Icon';

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
  const isError = touched && !!error;
  const inputLabel = isError ? error : label;

  return (
    <FormControl className={classes.input}>
      <InputLabel error={isError}>{inputLabel}</InputLabel>
      <Input
        error={isError}
        autoComplete={autoComplete}
        {...input}
        {...custom}
        endAdornment={
          <Tooltip title={tooltip}>
            <InputAdornment position="end">
              <InputIcon onIconClick={onIconClick} isError={isError} classes={classes} Icon={Icon} />
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

