import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import tentImg from "../images/camping.jpg"; // <-- Change to your image

const Middlepage = () => {
  return (
    <div style={{ backgroundColor: "#15201B", color: "white", minHeight: "100vh", padding: "40px 0" }}>
     <div
  style={{
    backgroundColor: "#475646ff",
    color: "white",
    fontSize: "20px",
    fontWeight: "700",
    padding: "5px 4px",
    borderRadius: "10px",
    textAlign: "center",
    width: "fit-content",
    margin: "0 auto 20px auto",
    
  }}
>
  Popular Activity
</div>

<div
  style={{
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "500",
    lineHeight: "1.4",
    marginBottom: "50px",
  }}
>
  Feel Real Adventure <br /> and Very Close to Nature
</div>

      <Container>
        <Row>

          {/* ---------------- LEFT SIDE CATEGORY LIST ---------------- */}
          <Col md={3}>
            <Card style={{ background: "#ffffff", borderRadius: "12px", padding: "20px" }}>
              <ListGroup variant="flush">

                <ListGroup.Item
                  style={{
                    background: "#F7941D",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    padding: "15px",
                    fontSize: "20px",
                  }}
                >
                  Tent Camping
                </ListGroup.Item>

                {["Mountain Biking", "Birdwatching", "Fishing", "Mountain Hiking"].map((item, index) => (
                  <ListGroup.Item
                    key={index}
                    style={{
                      background: "#F7F7F7",
                      marginBottom: "10px",
                      borderRadius: "10px",
                      fontSize: "20px",
                      fontWeight: "600",
                      padding: "15px",
                      color: "#1E5DBC",
                    }}
                  >
                    {item}
                  </ListGroup.Item>
                ))}

              </ListGroup>
            </Card>
          </Col>

          {/* ---------------- MIDDLE CONTENT ---------------- */}
          <Col md={5} style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "45px", fontWeight: "700", lineHeight: "1.2" }}>
              Real Adventure & Enjoy <br /> Your Dream Tours
            </h1>

            <p style={{ fontSize: "18px", marginTop: "20px", lineHeight: "1.7", color: "#d6d6d6" }}>
              Explore India 
              Sodales volutpat neque fermeny malesuada scelerisque massa lacus.
            </p>

            <ul style={{ marginTop: "30px", fontSize: "20px", listStyle: "none", paddingLeft: "0" }}>
              <li>✔ Family Camping</li>
              <li>✔ Couple Camping</li>
              <li>✔ Wild Camping</li>
            </ul>

            <Button variant="success" size="lg" style={{ marginTop: "20px" }}>
              Book Now
            </Button>
          </Col>

          {/* ---------------- RIGHT SIDE IMAGE ---------------- */}
          <Col md={4}>
            <img
              src={tentImg}
              alt="Camping"
              style={{ width: "100%", height: "100%", borderRadius: "12px", objectFit: "cover" }}
            />
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Middlepage;
