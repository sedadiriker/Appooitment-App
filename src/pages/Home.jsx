import AddModal from "../components/AddModal/AddModal";
import AppointmentList from "../components/AppointmentList/AppointmentList";
import Doctors from "../components/Doctors/Doctors";
import { doctorData } from "../helpers/data";
import { useState, useEffect } from "react";
import HomeStyle from "./Home.module.css";
import Swal from "sweetalert2";

const Home = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState(() => {
    const savedAppointments = localStorage.getItem("appointments"); //localstroge dan başlangıç verisi çekme..
    return JSON.parse(savedAppointments);
  });

  //* LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  });
  //*DOKTOR SEÇME VE MODALA GÖNDERME
  const onSelectDoctor = (name) => {
    setSelectedDoctor(name);
    setShowModal(true);
  };

  //* MODAL
  const handleClose = () => setShowModal(false);

  //* APPOİNTMENT EKLEME
  const addAppointment = (newAppointment) => {
    setAppointments([
      ...appointments,
      {
        patientName: `${newAppointment.patientName}`,
        date: `${newAppointment.date}`,
      },
    ]); //! appointment dizisini aç, yeni randevuyu ekle
  };

  //* APPOİNTMENT SİLME(appointmentden girilien index e göre silme)
  const removeAppointment = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res) {
        setAppointments((appointments) =>
          appointments.filter((app, i) => i !== index)
        );
        Swal.fire("Deleted!", "Appointment has been deleted.", "success");
      }
    });
  }

  //* CONSULTED
  const toggleConsulted = (index) => {
    setAppointments((appointments) => appointments.map((appointment,i) => i === index ? {...appointment, consulted: !appointment.consulted} : appointment))
  }
  return (
    <div className={`text-center ${HomeStyle.home}`}>
      <div className={`d-flex align-items-center gap-2 ${HomeStyle.logo}`}>
        <img src="img/medical-5459654_1280.png" alt="Logo" />
        <h1>Deniz Hospital</h1>
      </div>
      <div className="border position-relative pt-5 mt-5">
        <h3 className={`${HomeStyle.ourdoctor}`}>Our Doctors</h3>
        <div className="doctors-container d-flex flex-wrap gap-5 justify-content-center px-5">
          {doctorData.map((doctor) => (
            <Doctors
              onselectDoctor={onSelectDoctor}
              key={doctor.id}
              {...doctor}
            />
          ))}
        </div>
      </div>

      <AddModal
        show={showModal}
        handleClose={handleClose}
        selectedDoctor={selectedDoctor}
        addAppointment={addAppointment}
      />
      <AppointmentList
        appointments={appointments}
        selectedDoctor={selectedDoctor.name}
        removeAppointment={removeAppointment}
        handleToggleConsulted={toggleConsulted}
      />
    </div>
  );
};

export default Home;
