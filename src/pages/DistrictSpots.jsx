import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const DistrictSpots = () => {
  const {districtName}= useParams(); // URL param (district name)
  const [places, setPlaces] = useState([]);
  console.log(districtName);

  useEffect(() => {
    axios
      .get("https://kerala-i5mr.onrender.com/api/places")
      .then((res) => {
        console.log(res.data.places);
        const filtered = res.data.places.filter(
          (place) => 
            // console.log(place.district)
            place.district.toLowerCase() === districtName.toLowerCase()
        );
        setPlaces(filtered);
      })
      .catch((err) => console.log(err));
  }, [districtName]);
  console.log(places)

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">{name} - Tourist Places</h2>

      <Row>
        {places.map((place) => (
          <Col md={4} key={place.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={place.imageUrl}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{place.name}</Card.Title>
                <Card.Text>{place.description}</Card.Text>
                <Link to={`/place/${place._id}`}>
        <Button variant="primary">View More</Button>
      </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {places.length === 0 && (
        <h4 className="text-center text-muted">No places found.</h4>
      )}
    </Container>
  );
};

export default DistrictSpots;
