import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';

const Component = ({ open, message, onClose }) => (
  <Snackbar
    message={message}
    open={open}
    autoHideDuration={3000}
    onClose={onClose}
  />
);

Component.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Component;
