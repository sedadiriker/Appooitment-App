import AppointmentStyle from "./AppointmentList.module.css"

const AppointmentList = ({ appointments,selectedDoctor,removeAppointment,handleToggleConsulted }) => {
  return (
    <div className="mt-5 border position-relative pt-5">
      <h3 className={`mt-5 ${AppointmentStyle["list-title"]}`}>Appointments List</h3>
      <div>
        {
          appointments.length === 0 ? (
            <div className="w-50 m-auto">
              <p>No appointment information found!</p>
              <img className="w-100" src="img/appointment.jpg" alt="" />
            </div>
          ) : (
            appointments.map((appointment,index) => (
        <div
          role="button"
          key={index}
          className={`${AppointmentStyle.appointment} position-relative d-flex justify-content-between align-items-center m-auto px-3 my-4 ${appointment.consulted ? `${AppointmentStyle.consulted}` : ''}`}
          onDoubleClick={() => handleToggleConsulted(index)}
        >
          {appointment.consulted && <legend className={AppointmentStyle["login-legend"]}>Consulted</legend>}

          <div className={`${AppointmentStyle.patient} d-flex flex-column align-items-baseline`}>
            <p><span className="fw-bold">Patient  :</span> {appointment.patienttName}</p>
            <p><span className="fw-bold">Doctor :</span> {selectedDoctor}</p>
          </div>
          <div className={`${AppointmentStyle.date} d-flex flex-column align-items-baseline text-nowrap`}>
            <p><span className="fw-bold">Date:</span>{appointment.date}</p>
            <p><span className="fw-bold">Time : </span>{(appointment.date).slice(11)}</p>
          </div>

          <div className={`${AppointmentStyle.buton} btn`}>
            <button onClick={() => removeAppointment(index)} className="btn  d-flex justify-content-center">X</button>
          </div>
        </div>
      ))
          )
        }
      </div>
      
    </div>
  );
};

export default AppointmentList;
