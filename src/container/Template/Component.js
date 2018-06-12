import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classname';

import SnackBar from 'container/SnackBar';
import Header from 'component/Header';
import SideBar from 'component/SideBar';
import Tab from 'container/Tab';

const Template = ({
  classes, children, isSideBarOpen, toggleSideBar, isAuthorise, initials,
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
        {isAuthorise && <Tab />}
        {children}
      </div>
      <SnackBar />
    </div>
  );
};

Template.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
  isAuthorise: PropTypes.bool.isRequired,
  isSideBarOpen: PropTypes.bool.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  initials: PropTypes.string.isRequired,
};

export default Template;
