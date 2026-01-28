import React from "react";
import { Modal, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const districts = [
  "Thiruvananthapuram","Kollam","Pathanamthitta","Alappuzha","Kottayam",
  "Idukki","Ernakulam","Thrissur","Palakkad","Malappuram",
  "Kozhikode","Wayanad","Kannur","Kasaragod"
];

const Home = ({ districtModal, closeModal }) => {
  const navigate = useNavigate();

  const goToDistrict = (districtName) => {
    closeModal();
    navigate(`/district/${districtName}`);
  };

  return (
    <Modal show={districtModal} onHide={closeModal} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Select District</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {districts.map((d) => (
            <Col key={d} md={4} className="mb-3">
              <Card 
                onClick={() => goToDistrict(d)} 
                style={{ cursor: "pointer", textAlign: "center", padding: "20px" }}
              >
                <Card.Body>{d}</Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Home;
