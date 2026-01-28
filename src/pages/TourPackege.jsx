import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Badge, Spinner } from "react-bootstrap";
import { MapPin, Clock, Heart } from "lucide-react";
import axios from "axios";
import "./TourPackages.css"; // for Book Now button styles
import { Link } from "react-router-dom";


const TourPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 6; // show 6 cards per page

  useEffect(() => {
    axios
      .get("https://kerala-i5mr.onrender.com/api/packages")
      .then((res) => {
        setPackages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" />
        <p className="mt-3">Loading Tour Packages...</p>
      </div>
    );
  }

  // Pagination logic
  const indexOfLast = currentPage * packagesPerPage;
  const indexOfFirst = indexOfLast - packagesPerPage;
  const currentPackages = packages.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(packages.length / packagesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section style={{ background: "#f8f9fa", padding: "80px 0" }}>
      <Container>
        {/* Heading */}
        <div className="text-center mb-4">
          <small className="text-primary fw-semibold">Most Popular Tour Packages</small>
          <h2 className="fw-bold mt-2">Something Amazing Waiting For You</h2>
        </div>

        {/* Cards */}
        <Row className="g-4">
          {currentPackages.map((pkg) => (
            <Col md={4} key={pkg._id}>
              <Card className="border-0 shadow-sm rounded-4 h-100">
                <div style={{ position: "relative" }}>
                  <Card.Img
                    variant="top"
                    src={pkg.coverImage || "https://via.placeholder.com/400x220"}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                    }}
                  />

                  {pkg.isFeatured && (
                    <Badge
                      bg="success"
                      style={{ position: "absolute", top: 15, left: 15 }}
                    >
                      Featured
                    </Badge>
                  )}

                  <Heart
                    style={{
                      position: "absolute",
                      top: 15,
                      right: 15,
                      background: "#fff",
                      padding: "6px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  />
                </div>

                <Card.Body>
                  <Card.Title className="fw-semibold">{pkg.title}</Card.Title>

                  <div className="text-muted small mb-2">
                    <MapPin size={16} /> {pkg.location}
                  </div>

                  <div className="text-muted small">
                    <Clock size={16} /> {pkg.duration}
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <h5 className="text-success mb-0">₹{pkg.price}</h5>
                    {/* <button
                      className="btn-book-now"
                        onClick={() => alert(`Booking package: ${pkg.title}`)}

                    >
                      View Details
                    </button> */}
                      <Link
  to={`/tour/${pkg.slug}`}
  style={{
    background: "linear-gradient(135deg, #4caf50, #81c784)",
    color: "#fff",
    fontWeight: "bold",
    padding: "8px 20px",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) =>
    (e.currentTarget.style.background = "linear-gradient(135deg, #66bb6a, #a5d6a7)")
  }
  onMouseLeave={(e) =>
    (e.currentTarget.style.background = "linear-gradient(135deg, #4caf50, #81c784)")
  }
>
  View Details
</Link>

                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <div className="d-flex justify-content-center flex-wrap mt-4 gap-2">
          {currentPage > 1 && (
            <div className="page-card" onClick={() => paginate(currentPage - 1)}>
              &laquo; Prev
            </div>
          )}

          {[...Array(totalPages)].map((_, idx) => (
            <div
              key={idx + 1}
              className={`page-card ${currentPage === idx + 1 ? "active" : ""}`}
              onClick={() => paginate(idx + 1)}
            >
              {idx + 1}
            </div>
          ))}

          {currentPage < totalPages && (
            <div className="page-card" onClick={() => paginate(currentPage + 1)}>
              Next &raquo;
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TourPackages;
