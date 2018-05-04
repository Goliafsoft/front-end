import React, { Component } from 'react';
import PropTypes from 'prop-types';


class BaseForm extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    openSnackBar: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  submit = () => {
    const { openSnackBar } = this.props;
    openSnackBar('loooogin');
  };

  render() {
    const { classes, children, handleSubmit } = this.props;
    return (
      <form className={classes.base} onSubmit={handleSubmit(this.submit)}>
        {children}
      </form>
    );
  }
}

export default BaseForm;
