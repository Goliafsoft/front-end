import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from 'material-ui/Button';
import AppsIcon from 'material-ui-icons/Apps';
import Add from 'material-ui-icons/Add';

import Item from './Item';

const Tab = ({ classes, items }) => (
  <div className={classes.base}>
    <Button component={NavLink} color="primary" className={classes.linkIcon} to="/">
      <AppsIcon />
    </Button>
    {items.map(({ label, href, logo }) => (
      <Item
        key={href}
        label={label}
        classes={classes}
        href={href}
        logo={logo}
      />
    ))}
    <Button color="primary" className={classes.linkIcon} to="/">
      <Add />
    </Button>
  </div>
);

Tab.propTypes = {
  classes: PropTypes.shape().isRequired,
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Tab;
