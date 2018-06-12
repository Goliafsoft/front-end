import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SnackBarComponent from 'component/SnackBar';

class SnackBarContainer extends Component {
  static propTypes = {
    isSnackBarOpen: PropTypes.bool.isRequired,
    closeSnackBar: PropTypes.func.isRequired,
    undo: PropTypes.func,
    snackBarMessage: PropTypes.string.isRequired,
  };

  static defaultProps = {
    undo: undefined,
  };

  undo = () => {
    const { undo, closeSnackBar } = this.props;
    undo();
    closeSnackBar();
  };

  render() {
    const {
      isSnackBarOpen, closeSnackBar, snackBarMessage, undo,
    } = this.props;
    return (
      <SnackBarComponent
        open={isSnackBarOpen}
        message={snackBarMessage}
        onClose={closeSnackBar}
        undo={undo ? this.undo : undefined}
      />
    );
  }
}

export default SnackBarContainer;
