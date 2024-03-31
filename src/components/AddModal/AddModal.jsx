import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const AddModal = ({ show, handleClose, selectedDoctor,addAppointment }) => {
//! default olarak tarih veriyorum burda. Ama ıso formatında olmalı date ın algılaması için.
const localDate = new Date().toLocaleString();
const ısoDate = `${localDate.slice(6, 10)}-${localDate.slice(3,5)}-${localDate.slice(0, 2)}T${localDate.slice(11)}`;

//! Modal verileri
//* STATE OLUŞTUR
  const [data,setData] = useState({
    patientName : "",
    date:`${ısoDate}`
  })
  const{patientName,date} = data

//* STATE GÜNCELLE
  const handledata = (e) => {
    setData({...data, [e.target.id] : e.target.value }) // dinamik veri güncelleme(controlID ile aynı olmalı!!!)
    
  } 
//* FORM GÖNDERME 
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(data.patientName) //! data verileri
    addAppointment(data)
    setData({
        patientName : "",
        date:""
    })
    handleClose() // Modalın kapanması için!!
  }
  

  

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Appointment for {selectedDoctor.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="patientName">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={patientName}
              onChange={handledata} // state i güncelle
              
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="datetime-local"
              value={date}
              onChange={handledata}
              
            />
          </Form.Group>

          <div className="btns d-flex justify-content-center gap-3">
            <Button type="submit" variant="primary">Submit</Button>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
