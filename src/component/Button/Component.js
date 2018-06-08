import React from 'react';
import PropTypes from 'prop-types';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

const SaveButton = ({ label, classes }) => (
  <Button className={classes.button} variant="raised" color="primary" type="submit" >
    {label}
    <Send className={classes.rightIcon} />
  </Button>
);

SaveButton.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.shape().isRequired,
};

SaveButton.defaultProps = {
  label: 'Save',
};

export default SaveButton;
