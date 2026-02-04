


import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Row, Col, Card, Dropdown, Modal } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Assets
const LogoWhite = "https://via.placeholder.com/225x60/10b981/ffffff?text=GoWilds";
const HeroImg = "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800";

// Districts
const districts = [
  "Thiruvananthapuram", "Kollam", "Pathanamthitta", "Alappuzha", "Kottayam",
  "Idukki", "Ernakulam", "Thrissur", "Palakkad", "Malappuram",
  "Kozhikode", "Wayanad", "Kannur", "Kasaragod"
];

const HeroPage = () => {
  const navigate = useNavigate();
  const [districtModal, setDistrictModal] = useState(false);
  const [username, setUsername] = useState("");

  // Check if user is logged in
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) setUsername(storedUsername);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername("");
  };

  // District modal handlers
  const openDistrictModal = () => setDistrictModal(true);
  const closeDistrictModal = () => setDistrictModal(false);
  const goToDistrict = (district) => {
    closeDistrictModal();
    navigate(`/district/${district}`);
  };

  return (
    <div style={styles.pageWrapper}>
      <style>{responsiveStyles}</style>

      {/* NAVBAR */}
      <Navbar expand="lg" variant="dark" style={styles.navbar}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={LogoWhite} alt="GoWilds" style={styles.logo} className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto nav-links-wrapper" style={styles.navLinks}>
              {["Places", "Tours", "Destination"].map((item, idx) => (
                <Nav.Link
                  key={idx}
                  as={Link}
                  to={`/${item.toLowerCase()}`}
                  style={styles.navLink}
                >
                  {item}
                </Nav.Link>
              ))}

              <Button
                as={Link}
                to="/bookings"
                variant="success"
                className="ms-3 px-4 py-2 book-now-btn"
                style={styles.bookNowButton}
              >
                Book Now
              </Button>

              {username ? (
                <div style={styles.userActions}>
                  <FaBell size={24} style={styles.icon} onClick={() => navigate("/notifications")} />

                  <Dropdown align="end">
                    <Dropdown.Toggle variant="dark" style={styles.dropdownToggleUser}>
                      <FaUserCircle size={28} style={styles.userIcon} />
                      <span style={styles.username}>{username}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={styles.dropdownMenu}>
                      <Dropdown.Item
                        style={styles.dropdownItem}
                        onClick={() =>
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You will be logged out!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonText: "Yes, logout!",
                            cancelButtonText: "Cancel",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              handleLogout();
                              Swal.fire("Logged Out!", "", "success");
                            }
                          })
                        }
                      >
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : (
                <Dropdown align="end">
                  <Dropdown.Toggle variant="dark" style={styles.dropdownToggle}>
                    <FaUserCircle size={32} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={styles.dropdownMenu}>
                    <Dropdown.Item as={Link} to="/login" style={styles.dropdownItem}>
                      Login
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/register" style={styles.dropdownItem}>
                      Register
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO SECTION */}
      <Container className="py-5 hero-container" style={{ marginTop: "40px" }}>
        <Row className="align-items-center">
          <Col md={6} className="mt-5 hero-text-col">
            <div style={styles.arrowCircleLeft}>
              <BsArrowLeft size={28} style={{ color: "white" }} />
            </div>
            <h1 style={styles.heroTitle}>Travel & <br /> Adventure <br /> Tour</h1>
            <p style={styles.heroDescription}>
              Discover the enchanting beauty of Kerala, where emerald backwaters meet mist-clad mountains and pristine beaches welcome every traveler.
            </p>
            <Button style={styles.exploreButton}>
              Explore More <span style={styles.exploreIcon}>✈</span>
            </Button>
          </Col>

          <Col md={6} className="text-center mt-5 hero-image-col">
            <div style={styles.imageWrapper}>
              <img src={HeroImg} alt="Hero" style={styles.heroImage} />
            </div>
            <div style={styles.arrowCircleRight}>
              <BsArrowRight size={28} />
            </div>
          </Col>
        </Row>
      </Container>

      {/* DISTRICT MODAL */}
      <Modal show={districtModal} onHide={closeDistrictModal} size="lg" centered>
        <Modal.Header style={styles.modalHeader} closeButton>
          <Modal.Title style={styles.modalTitle}>Select District</Modal.Title>
        </Modal.Header>
        <Modal.Body style={styles.modalBody}>
          <Row>
            {districts.map((d) => (
              <Col key={d} md={4} xs={6} className="mb-3">
                <Card style={styles.districtCard} onClick={() => goToDistrict(d)}>
                  <Card.Body style={styles.districtCardBody}>{d}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer style={styles.modalFooter}>
          <Button variant="secondary" style={styles.modalCloseButton} onClick={closeDistrictModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// ---------------- STYLES ----------------
const styles = {
  pageWrapper: { background: "linear-gradient(135deg, #0f172a, #1e293b)", color: "white", minHeight: "100vh" },
  navbar: { padding: "25px 0", background: "rgba(15,23,42,0.95)", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" },
  logo: { width: "225px", marginRight: "30px", marginTop: "30px" },
  navLinks: { fontSize: "18px", fontWeight: 600 },
  navLink: { color: "white", marginRight: "15px", transition: "all 0.3s ease" },
  bookNowButton: { borderRadius: "30px", fontWeight: 700, fontSize: "16px", background: "linear-gradient(135deg, #10b981, #059669)", border: "none" },
  dropdownToggle: { display: "flex", alignItems: "center", background: "none", border: "none", color: "white" },
  dropdownToggleUser: { display: "flex", alignItems: "center", background: "none", border: "none", color: "white" },
  userActions: { display: "flex", alignItems: "center", gap: "15px", marginLeft: "20px" },
  icon: { color: "white", cursor: "pointer" },
  userIcon: { marginRight: 8, color: "white" },
  username: { fontWeight: 700, color: "#10b981", fontSize: "16px" },
  dropdownMenu: { borderRadius: 12, border: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.15)", padding: 8, marginTop: 10 },
  dropdownItem: { borderRadius: 8, padding: "10px 16px", fontWeight: 500 },
  arrowCircleLeft: { display: "flex", alignItems: "center", justifyContent: "center", width: 65, height: 65, borderRadius: "50%", border: "2px solid white", marginBottom: 30, cursor: "pointer" },
  arrowCircleRight: { display: "flex", alignItems: "center", justifyContent: "center", width: 65, height: 65, borderRadius: "50%", border: "2px solid white", marginTop: 30, marginLeft: "auto", cursor: "pointer" },
  heroTitle: { fontSize: 85, fontWeight: 900, lineHeight: 0.95, textTransform: "uppercase", letterSpacing: -2, background: "linear-gradient(135deg, #fff, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 25 },
  heroDescription: { fontSize: 20, marginTop: 25, lineHeight: 1.7, color: "#cbd5e1", maxWidth: 550, fontWeight: 400 },
  exploreButton: { borderRadius: 50, fontSize: 20, fontWeight: 700, width: 260, justifyContent: "space-between", background: "linear-gradient(135deg, #10b981, #059669)", border: "none", display: "flex", alignItems: "center" },
  exploreIcon: { background: "white", color: "black", borderRadius: "50%", padding: 12, fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center", width: 45, height: 45 },
  imageWrapper: { position: "relative", overflow: "hidden", borderRadius: 25, boxShadow: "0 20px 50px rgba(0,0,0,0.4)" },
  heroImage: { width: "100%", height: "100%", borderRadius: 25, objectFit: "cover", transition: "transform 0.5s ease" },
  modalHeader: { background: "linear-gradient(135deg, #10b981, #059669)", color: "white", borderBottom: "none", borderRadius: "12px 12px 0 0" },
  modalTitle: { fontWeight: 700, fontSize: 24 },
  modalBody: { padding: 30, background: "#f8fafc" },
  modalFooter: { background: "#fff", borderTop: "1px solid #e2e8f0", borderRadius: "0 0 12px 12px" },
  districtCard: { cursor: "pointer", textAlign: "center", padding: 20, borderRadius: 15, background: "#f8fafc", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", transition: "transform 0.2s ease, box-shadow 0.2s ease" },
  districtCardBody: { fontWeight: 600, fontSize: 16, color: "#0f172a" },
  modalCloseButton: { borderRadius: 10, padding: "10px 24px", fontWeight: 600, background: "#64748b", border: "none" },
};

// ---------------- RESPONSIVE STYLES ----------------
const responsiveStyles = `
  @media (max-width: 768px) {
    .navbar-logo { width: 150px !important; margin: 15px !important; }
    .nav-links-wrapper { font-size: 16px !important; margin-top: 15px; }
    .book-now-btn { margin-left:0 !important; margin-top:10px; width:100%; }
    .user-actions-wrapper { margin-left:0 !important; margin-top:15px; justify-content:center; }
    .hero-container { margin-top:20px !important; padding:20px !important; }
    .hero-title { font-size:48px !important; line-height:1.1 !important; margin-bottom:20px !important; }
    .hero-description { font-size:16px !important; margin-top:15px !important; max-width:100% !important; }
    .explore-button { width:100% !important; font-size:18px !important; margin-top:20px; }
    .arrow-circle-left, .arrow-circle-right { width:50px !important; height:50px !important; }
    .hero-text-col, .hero-image-col { margin-top:20px !important; }
    .hero-image-col { margin-top:40px !important; }
  }

  @media (max-width: 576px) {
    .navbar-logo { width:120px !important; margin:10px !important; }
    .hero-title { font-size:36px !important; letter-spacing:-1px !important; }
    .hero-description { font-size:14px !important; line-height:1.6 !important; }
    .explore-button { font-size:16px !important; padding:12px 20px !important; }
    .arrow-circle-left { margin-bottom:20px !important; }
    .arrow-circle-right { margin-top:20px !important; }
    .username-text { font-size:14px !important; }
  }

  @media (max-width: 400px) {
    .hero-title { font-size:32px !important; }
    .hero-description { font-size:13px !important; }
    .explore-button { font-size:15px !important; }
  }

  @media (min-width: 769px) {
    .districtCard:hover { transform: translateY(-5px); box-shadow:0 8px 20px rgba(0,0,0,0.15) !important; }
    .heroImage:hover { transform: scale(1.05); }
  }
`;

export default HeroPage;
