// Doctors.js
import React from 'react';
import  Card  from 'react-bootstrap/Card';

const Doctors = ({ name, img, dep, onDoctorSelect }) => {
  
  const handleClick = () => {
    onDoctorSelect({ name, img, dep })
  };
  
  return (
    <div>
      <Card className="card border-0" style={{ width: "15rem" }} >
        <img src={img} onClick={handleClick} className="card-img-top w-75 m-auto" alt={name} />
        <div className="card-body">
          <h5 className="card-title fs-5">{name}</h5>
          <p className="card-text">{dep}</p>
        </div>
      </Card>
    </div>
  );
};

export default Doctors;
