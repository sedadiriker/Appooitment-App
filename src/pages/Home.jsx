import React, { useState } from 'react'
import Doctors from '../components/Doctors'
import AddModal from '../components/AddModal'
import AppointmentList from '../components/AppointmentList'
import { appointmentData } from '../helpers/data'
import "./Home.css"

const Home = ({ data }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false)
  const [appointments, setAppointments] = useState(appointmentData)


  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor)
    setShowModal(true)
  };

  const handleClose = () => setShowModal(false)
  
  const removeAppointment = (index) => {
    setAppointments(currentAppointments => currentAppointments.filter((_, i) => i !== index))
  };
  const addNewAppointment = (newAppointmentDetails) => {
    setAppointments([
      ...appointments,
      {
        patient: newAppointmentDetails.patientName,
        doctor: newAppointmentDetails.doctorName,
        day: newAppointmentDetails.date, 
        id: appointments.length + 1, 
        consulted: false 
      }
    ])
  }
  
  const toggleConsulted = (index) => {
    setAppointments(currentAppointments =>
      currentAppointments.map((appointment, i) =>
        i === index ? { ...appointment, consulted: !appointment.consulted } : appointment
      )
    )
  }

  return (
    <div className="d-flex justify-content-center flex-wrap gap-2 flex-column home">
      <div className='logo d-flex align-items-center gap-2'>
      <img src="img/medical-5459654_1280.png" alt="Logo" />
      <h1>Deniz Hospital</h1>

      </div>
      
      <fieldset className='border mt-5 position-relative pt-5'>
      <h3 className='ourdoctor'>Our Doctors</h3>
      <div className="d-flex justify-content-center flex-wrap gap-5">
        {data.map((doctor) => (
          <Doctors key={doctor.id} {...doctor} onDoctorSelect={handleDoctorSelect} />
        ))}
        <AddModal showModal={showModal} handleClose={handleClose} doctor={selectedDoctor} addAppointment={addNewAppointment} />
      </div>
      <AppointmentList appointments={appointments} handleClose={removeAppointment} handleToggleConsulted={toggleConsulted} />
      </fieldset>
      
    </div>
  );
};

export default Home;
