import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../style.css'


export class WelcomeModal extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       showModal: false,
     }
  }

  componentDidMount() {
    this.setState({ showModal: true });

  }

  render() {
    return (
      <div>

        <Modal isOpen={ this.state.showModal } >
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => { this.setState({ showModal: !this.state.showModal }) } }>Cancel</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }

}

