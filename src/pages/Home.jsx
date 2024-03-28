// Üst bileşeniniz (ParentComponent.js)
import React, { useState } from 'react';
import Doctors from '../components/Doctors';
import AddModal from '../components/AddModal';

const Home = ({data}) => {

  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="d-flex justify-content-center flex-wrap gap-2 flex-column">
            <h1>Deniz Hospital</h1>
            <h3>Our  Doctors</h3>

      <div className="d-flex justify-content-center flex-wrap gap-5">
      {data.map((doctor) => (
        <Doctors key={doctor.id} {...doctor} onDoctorSelect={handleDoctorSelect} />
      ))}

      <AddModal showModal={showModal} handleClose={handleClose} doctor={selectedDoctor} />
      </div>
      
    </div>
  );
  
};

export default Home;
