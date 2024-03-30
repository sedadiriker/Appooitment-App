import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const AddModal = ({ showModal, handleClose, doctor, addAppointment }) => {
  const [patientName, setPatientName] = useState('')
  const [date, setDate] = useState('')

  const handleSaveClick = () => {
    if (doctor && patientName && date) {
      addAppointment({
        patientName: patientName,
        doctorName: doctor.name,
        date: date, 
      });
      setPatientName('');
      setDate('');
      handleClose();
    }
  };
  

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{doctor ? `Appointment for ${doctor.name}` : "No Doctor selected"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {doctor && (
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="primary" onClick={handleSaveClick}>Save</Button>
              <Button variant="danger" onClick={handleClose}>Close</Button>
            </div>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
