import Card from "react-bootstrap/Card";
import DoctorsStyle from "./Doctors.Module.css";

const Doctors = ({ name, dep, img, onselectDoctor }) => {
  const handleSelectDoctor = () => {
    onselectDoctor({ name });
  };
  return (
    <Card
      className={`${DoctorsStyle.card} border-0`}
      onClick={handleSelectDoctor}
      style={{ width: "17rem", textAlign: "center" }}
    >
      <Card.Img
        role="button"
        className="w-100 m-auto h-100"
        variant="top"
        src={img}
      />
      <Card.Body>
        <Card.Title className="fs-5">{name}</Card.Title>
        <Card.Text>{dep}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Doctors;
