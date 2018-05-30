import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

import SnackBar from 'component/SnackBar';
import Header from 'component/Header';
import SideBar from 'component/SideBar';

const Component = ({
  classes, children, snackBarMessage, openSnackBar, closeSnackBar, isSideBarOpen, toggleSideBar, isAuthorise, initials,
}) => {
  const className = classNames(
    classes.wrapper,
    { [classes.wrapperFull]: isSideBarOpen, [classes.wrapperPage]: !isAuthorise },
  );
  return (
    <div className={classes.base}>
      {isAuthorise && <SideBar open={isSideBarOpen} />}
      {isAuthorise && <Header open={isSideBarOpen} toggle={toggleSideBar} initials={initials} />}
      <div className={className}>
        {children}
      </div>
      <SnackBar open={openSnackBar} message={snackBarMessage} onClose={closeSnackBar} />
    </div>
  );
};

Component.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
  snackBarMessage: PropTypes.string.isRequired,
  openSnackBar: PropTypes.bool.isRequired,
  isAuthorise: PropTypes.bool.isRequired,
  closeSnackBar: PropTypes.func.isRequired,
  isSideBarOpen: PropTypes.bool.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  initials: PropTypes.string.isRequired,
};

export default Component;
