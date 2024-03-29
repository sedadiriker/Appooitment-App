import React from 'react';
import  Card  from 'react-bootstrap/Card';
import "./Doctors.css"
const Doctors = ({ name, img, dep, onDoctorSelect }) => {
  
  const handleClick = () => {
    onDoctorSelect({ name, img, dep })
  };
  
  return (
    <div>
      <Card role='button' onClick={handleClick}  className="card border-0" style={{ width: "15rem" }} >
        <img  src={img} className="card-img-top w-100 m-auto" alt={name} />
        <div className="card-body">
          <h5 className="card-title fs-5 text-nowrap">{name}</h5>
          <p className="card-text">{dep}</p>
        </div>
      </Card>
    </div>
  );
};

export default Doctors;
