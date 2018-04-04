import React from 'react';
import PropTypes from 'prop-types';
import { SnackBar, Header } from '../../component';

const Component = ({
  classes, children, snackBarMessage, openSnackBar, closeSnackBar,
}) => (
  <div className={classes.base}>
    <Header />
    <div className={classes.wrapper}>
      {children}
    </div>
    <SnackBar open={openSnackBar} message={snackBarMessage} onClose={closeSnackBar} />
  </div>
);

Component.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
  snackBarMessage: PropTypes.string.isRequired,
  openSnackBar: PropTypes.bool.isRequired,
  closeSnackBar: PropTypes.func.isRequired,
};

export default Component;
