import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Badge, Button, Card } from "react-bootstrap";

const TourPackageDetails = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://kerala-i5mr.onrender.com/api/packages/${slug}`)
      .then((res) => {
        setDetail(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading)
    return (
      <p style={{ textAlign: "center", padding: "100px 0", fontSize: "18px" }}>
        Loading...
      </p>
    );
  if (!detail)
    return (
      <p style={{ textAlign: "center", padding: "100px 0", fontSize: "18px" }}>
        Tour not found
      </p>
    );

  return (
    <Container style={{ padding: "50px 0", maxWidth: "1200px" }}>
      {/* Main Info */}
      <Row className="mb-5">
        <Col md={8}>
          <img
            src={detail.coverImage || "https://via.placeholder.com/800x400"}
            alt={detail.title}
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          />
        </Col>
        <Col md={4} style={{ display: "flex", flexDirection: "column" }}>
          {detail.isFeatured && (
            <Badge
              bg="success"
              style={{
                alignSelf: "flex-start",
                fontSize: "0.9rem",
                padding: "0.5em 0.8em",
                marginBottom: "15px",
              }}
            >
              Featured
            </Badge>
          )}
          <h2 style={{ marginBottom: "15px", fontWeight: "700" }}>
            {detail.title}
          </h2>
          <p style={{ marginBottom: "8px" }}>
            <strong>Location:</strong> {detail.location}
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Duration:</strong> {detail.duration}
          </p>
          <p style={{ marginBottom: "15px" }}>
            <strong>Price:</strong>{" "}
            <span style={{ color: "#28a745", fontWeight: "600" }}>
              ₹{detail.price}
            </span>
          </p>

          <Button
            variant="success"
            style={{
              padding: "10px 20px",
              fontWeight: "600",
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            }}
            onClick={() => alert(`Booking ${detail.title}...`)}
          >
            Book Now
          </Button>

          <Link
            to="/packages"
            style={{
              marginTop: "10px",
              textDecoration: "none",
              padding: "10px 20px",
              border: "2px solid #6c757d",
              borderRadius: "8px",
              textAlign: "center",
              color: "#6c757d",
              fontWeight: "500",
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#6c757d") ||
              (e.currentTarget.style.color = "#fff")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent") ||
              (e.currentTarget.style.color = "#6c757d")
            }
          >
            Back to Packages
          </Link>
        </Col>
      </Row>

      {/* Description Card */}
      <Row className="mb-4">
        <Col>
          <Card
            style={{
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              marginBottom: "20px",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontWeight: "600", marginBottom: "15px" }}>
                Tour Description
              </Card.Title>
              <Card.Text style={{ lineHeight: "1.7" }}>
                {detail.description}
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Highlights Card */}
          {detail.highlights && detail.highlights.length > 0 && (
            <Card
              style={{
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{ fontWeight: "600", marginBottom: "15px" }}
                >
                  Highlights
                </Card.Title>
                <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
                  {detail.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TourPackageDetails;
