/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Modal from './modal';
import Button from '../button/button';
import Image from '../image/image';

class Sandbox extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    console.log('Submit function!');
    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Fragment>
        <h2><span>1. Base Dialog (Modal) window:</span></h2>
        <Button onClick={this.openModal}>Show modal</Button>
        <Modal
          title="Test Dialog window"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p>
        
        <Image width={50} height={50} style={{ marginRight: "20px" }} />
        <Image width={100} height={100} style={{ marginRight: "20px" }} />
        <Image width={150} height={150} />
        </Modal>

      </Fragment>
    );
  }
}

export default Sandbox;
/* eslint-enable */
