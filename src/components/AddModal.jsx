// AddModal.js
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import  Form  from 'react-bootstrap/Form';


const AddModal = ({ showModal, handleClose, doctor }) => {
  return (
    <Modal show={showModal} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {
            doctor ? (
              <p>Appointment for {doctor.name}</p>
            ): (
              <p>No Doctor selected</p>
            )
          }
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          doctor ? (
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Password" />
      </Form.Group>
      
      <div className="d-flex justify-content-center gap-3">
      <Button variant="primary" type="submit">
        Save
      </Button>
      <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </div>
      
    </Form>

          ) : (
            <p>No Doctor selected</p>
          )
        }
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
