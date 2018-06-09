import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const SnackBar = ({
  open, message, onClose, classes, undo,
}) => (
  <Snackbar
    message={message}
    open={open}
    autoHideDuration={3000}
    onClose={onClose}
    action={[
      undo && (
        <Button key="undo" color="secondary" className={classes.button} size="small" onClick={undo}>
          UNDO
        </Button>
      ),
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        className={classes.close}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>,
    ]}
  />
);

SnackBar.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
  undo: PropTypes.func,
};

SnackBar.defaultProps = {
  undo: undefined,
};

export default SnackBar;
