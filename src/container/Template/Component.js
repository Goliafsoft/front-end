import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

import { SnackBar, Header, SideBar } from '../../component';

const Component = ({
  classes, children, snackBarMessage, openSnackBar, closeSnackBar, isSideBarOpen, toggleSideBar,
}) => (
  <div className={classes.base}>
    <SideBar open={isSideBarOpen} />
    <Header open={isSideBarOpen} toggle={toggleSideBar} />
    <div className={classNames(classes.wrapper, { [classes.wrapperFull]: isSideBarOpen })}>
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
  isSideBarOpen: PropTypes.bool.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
};

export default Component;
