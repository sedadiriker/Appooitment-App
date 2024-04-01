import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState,useEffect } from "react";

const AddModal = ({ show, handleClose, selectedDoctor,addAppointment }) => {
  function getLocalDateTime() {
    const now = new Date();
    const timezoneOffsetInMilliseconds = now.getTimezoneOffset() * 60 * 1000;
    // Yerel saat dilimi için ofseti çıkararak yerel zamanı elde edin
    const localDateTime = new Date(now.getTime() - timezoneOffsetInMilliseconds);
    // ISO string olarak dönüştürün ve sadece tarih ve saati alın (saniyeler ve milisaniyeler olmadan)
    return localDateTime.toISOString().slice(0, 16);
  }
  
  const isoDate = getLocalDateTime();
  


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
