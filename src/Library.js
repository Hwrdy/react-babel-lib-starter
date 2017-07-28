/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SimpleModal extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
    overlayStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    closeHandleStyle: PropTypes.object,
    enableModal: PropTypes.bool,
    enableClose: PropTypes.bool,
    closeHandler: PropTypes.func,
  };

  static defaultProps = {
    enableModal: false,
    enableClose: true,
    overlayStyle: undefined,
    containerStyle: undefined,
    closeHandleStyle: undefined,
    closeHandler: undefined,
  };

  handleClose = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (this.props.closeHandler) {
      this.props.closeHandler(e);
    }
  }

  render() {
    const {
      overlayStyle,
      containerStyle,
      closeHandleStyle,
      enableClose,
      enableModal,
    } = this.props;

    if (enableModal) {
      return (
        <div style={overlayStyle} >
          <div style={containerStyle} >
            {
              enableClose &&
              <div style={closeHandleStyle} onClick={this.handleClose} />
            }
            { this.props.children }
          </div>
        </div>
      );
    }

    return null;
  }
}

export default SimpleModal;
