import React, { Component } from 'react';
import Modal from 'react-modal';

const modalify = (ModalTrigger, WrappedComponent) => {
  class ModalWrapper extends Component {
    constructor(props) {
      super(props);

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.toggleModal = this.toggleModal.bind(this);

      this.state = {
        isOpen: false,
      }
    }

    openModal(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      this.setState({
        isOpen: true,
      });
    }

    closeModal(evt, data) {
      this.setState({
        isOpen: false,
      }, () => this.props.onModalClose(evt, data));
    }

    toggleModal() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      const { isOpen } = this.state;

      return (
        <div>
          <ModalTrigger onClick={this.toggleModal}>
            {isOpen
                ? this.props.modalOpenTriggerText
                : this.props.modalClosedTriggerText
            }
          </ModalTrigger>

          <Modal
            overlayClassName="modal-overlay"
            className="modal modal-container"
            isOpen={isOpen}
            onRequestClose={this.closeModal}
          >
            <WrappedComponent
              closeModal={this.closeModal}
              {...this.props}
            />
          </Modal>
        </div>
      );
    }
  }

  return ModalWrapper;
}

export default modalify;
