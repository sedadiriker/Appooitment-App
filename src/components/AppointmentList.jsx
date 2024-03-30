import React from "react";
import Button from 'react-bootstrap/Button';
import "./Appointment.css"

const AppointmentList = ({ appointments, handleClose, handleToggleConsulted }) => {
  return (
    <div className="border position-relative pt-5 app-main">
      <h3 className="mt-5 list-title">Appointments List</h3>
      {appointments.map((appointment, index) => (
        <fieldset
          key={appointment.id}
          role="button"
          className={`appointment d-flex justify-content-between gap-5 align-items-center my-4 ${appointment.consulted ? 'consulted' : ''} position-relative`}
          onDoubleClick={() => handleToggleConsulted(index)}
        >
          {appointment.consulted && <legend className="login-legend">Consulted</legend>}
          <div className="d-flex flex-column align-items-baseline patient">
            <p>
              <span className="fw-bold">Patient : </span>
              {appointment.patient}
            </p>
            <p>
              <span className="fw-bold">Doctor : </span>
              {appointment.doctor}
            </p>
          </div>

          <div className="date">
            <p>
              <strong>Date :</strong> {new Date(appointment.day).toLocaleDateString('tr-TR')}
              <strong> Time:</strong> {new Date(appointment.day).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>

          <div className="btn d-flex justify-content-center">
            <Button className="d-flex  justify-content-center" variant="danger" onClick={() => handleClose(index)}>X</Button>
          </div>
        </fieldset>     
      ))}
    </div>
  );
};

export default AppointmentList;


