// import React, { useState, useEffect, useRef } from "react";
// import { Navbar, Nav, Container, Button, Row, Col, Card, Dropdown, Modal } from "react-bootstrap";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import { FaUserCircle, FaBell } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// // Assets
// import LogoWhite from "../images/logo-white.png";
// import HeroImg from "../images/hero-one_img.jpg";

// const districts = [
//   "Thiruvananthapuram","Kollam","Pathanamthitta","Alappuzha","Kottayam",
//   "Idukki","Ernakulam","Thrissur","Palakkad","Malappuram",
//   "Kozhikode","Wayanad","Kannur","Kasaragod"
// ];

// const HeroPage = () => {
//   const navigate = useNavigate();
//   const [districtModal, setDistrictModal] = useState(false);
//   const [username, setUsername] = useState("");

//   // Check if user is logged in
//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username");
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("username");
//     setUsername("");
//   };

//   // District modal handlers
//   const openDistrictModal = () => setDistrictModal(true);
//   const closeDistrictModal = () => setDistrictModal(false);
//   const goToDistrict = (districtName) => {
//     closeDistrictModal();
//     navigate(`/district/${districtName}`);
//   };

//   return (
//     <div style={styles.pageWrapper}>
//       {/* ---------------- NAVBAR ---------------- */}
//       <Navbar expand="lg" variant="dark" style={styles.navbar}>
//         <Container>
//           <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
//             <img src={LogoWhite} alt="GoWilds" style={styles.logo} />
//           </Navbar.Brand>

//           <Navbar.Toggle />
//           <Navbar.Collapse>
//             <Nav className="ms-auto" style={styles.navLinks}>
//               <Nav.Link as={Link} to="/places" style={styles.navLink}>Places</Nav.Link>
//               <Nav.Link as={Link} to="/services" style={styles.navLink}>Tours</Nav.Link>
//               <Nav.Link as={Link} to="/destination" style={styles.navLink}>Destination</Nav.Link>

//               <Button
//                 as={Link}
//                 to="/bookings"
//                 variant="success"
//                 className="ms-3 px-4 py-2"
//                 style={styles.bookNowButton}
//               >
//                 Book Now
//               </Button>

//               {username ? (
//                 <div style={{ display: "flex", alignItems: "center", gap: "15px", marginLeft: "20px" }}>
//                   {/* Notification Icon */}
//                   <FaBell
//                     size={24}
//                     style={{ color: "white", cursor: "pointer" }}
//                     // onClick={() => alert("You have new notifications!")}
//                     onClick={() => navigate("/notifications")}
//                   />

//                   {/* User Dropdown */}
//                   <Dropdown align="end">
//                     <Dropdown.Toggle
//                       variant="dark"
//                       id="dropdown-user"
//                       style={styles.dropdownToggleUser}
//                     >
//                       <FaUserCircle size={28} style={{ marginRight: "8px", color: "white" }} />
//                       <span style={styles.username}>{username}</span>
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu style={styles.dropdownMenu}>
//                       <Dropdown.Item
//                         style={styles.dropdownItem}
//                         onClick={() => {
//                           Swal.fire({
//                             title: 'Are you sure?',
//                             text: "You will be logged out!",
//                             icon: 'warning',
//                             showCancelButton: true,
//                             confirmButtonText: 'Yes, logout!',
//                             cancelButtonText: 'Cancel'
//                           }).then((result) => {
//                             if (result.isConfirmed) {
//                               handleLogout();
//                               Swal.fire('Logged Out!', '', 'success');
//                             }
//                           });
//                         }}
//                       >
//                         Logout
//                       </Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </div>
//               ) : (
//                 // Dropdown for logged-out users
//                 <Dropdown align="end">
//                   <Dropdown.Toggle
//                     variant="dark"
//                     id="dropdown-login-register"
//                     style={styles.dropdownToggle}
//                   >
//                     <FaUserCircle size={32} />
//                   </Dropdown.Toggle>

//                   <Dropdown.Menu style={styles.dropdownMenu}>
//                     <Dropdown.Item as={Link} to="/login" style={styles.dropdownItem}>
//                       Login
//                     </Dropdown.Item>
//                     <Dropdown.Item as={Link} to="/register" style={styles.dropdownItem}>
//                       Register
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* ---------------- HERO SECTION ---------------- */}
//       <Container className="py-5" style={{ marginTop: "40px" }}>
//         <Row className="align-items-center">
//           <Col md={6} className="mt-5">
//             <div style={styles.arrowCircleLeft}>
//               <BsArrowLeft size={28} style={{ color: "white" }} />
//             </div>

//             <h1 style={styles.heroTitle}>
//               Travel &  <br /> Adventure  <br /> Tour
//             </h1>

//             <p style={styles.heroDescription}>
//               Discover the enchanting beauty of Kerala, where emerald backwaters meet mist-clad mountains and pristine beaches welcome every traveler.
//             </p>

//             <Button style={styles.exploreButton}>
//               Explore More
//               <span style={styles.exploreIcon}>✈</span>
//             </Button>
//           </Col>

//           <Col md={6} className="text-center mt-5">
//             <div style={styles.imageWrapper}>
//               <img src={HeroImg} alt="Hero" style={styles.heroImage} />
//             </div>
//             <div style={styles.arrowCircleRight}>
//               <BsArrowRight size={28} />
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       {/* ---------------- DISTRICT MODAL ---------------- */}
//       <Modal show={districtModal} onHide={closeDistrictModal} size="lg" centered>
//         <Modal.Header style={styles.modalHeader} closeButton>
//           <Modal.Title style={styles.modalTitle}>Select District</Modal.Title>
//         </Modal.Header>
//         <Modal.Body style={styles.modalBody}>
//           <Row>
//             {districts.map((d) => (
//               <Col key={d} md={4} className="mb-3">
//                 <Card style={styles.districtCard} onClick={() => goToDistrict(d)}>
//                   <Card.Body style={styles.districtCardBody}>{d}</Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Modal.Body>
//         <Modal.Footer style={styles.modalFooter}>
//           <Button variant="secondary" style={styles.modalCloseButton} onClick={closeDistrictModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// // ---------------- STYLES ----------------
// const styles = {
//   pageWrapper: { background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", color: "white", minHeight: "100vh" },
//   navbar: { padding: "25px 0", background: "rgba(15, 23, 42, 0.95)", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" },
//   logo: { width: "225px", marginRight: "30px", marginTop: "30px" },
//   navLinks: { fontSize: "18px", fontWeight: "600" },
//   navLink: { color: "white", marginRight: "15px", transition: "all 0.3s ease" },
//   bookNowButton: { borderRadius: "30px", fontWeight: "700", fontSize: "16px", background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", border: "none" },
//   dropdownToggle: { display: "flex", alignItems: "center", background: "none", border: "none", color: "white" },
//   dropdownToggleUser: { display: "flex", alignItems: "center", background: "none", border: "none", color: "white" },
//   username: { fontWeight: 700, color: "#10b981", fontSize: "16px" },
//   dropdownMenu: { borderRadius: "12px", border: "none", boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)", padding: "8px", marginTop: "10px" },
//   dropdownItem: { borderRadius: "8px", padding: "10px 16px", fontWeight: "500" },
//   arrowCircleLeft: { display: "flex", alignItems: "center", justifyContent: "center", width: "65px", height: "65px", borderRadius: "50%", border: "2px solid white", marginBottom: "30px", cursor: "pointer" },
//   arrowCircleRight: { display: "flex", alignItems: "center", justifyContent: "center", width: "65px", height: "65px", borderRadius: "50%", border: "2px solid white", marginTop: "30px", marginLeft: "auto", cursor: "pointer" },
//   heroTitle: { fontSize: "85px", fontWeight: "900", lineHeight: "0.95", textTransform: "uppercase", letterSpacing: "-2px", background: "linear-gradient(135deg, #ffffff 0%, #10b981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "25px" },
//   heroDescription: { fontSize: "20px", marginTop: "25px", lineHeight: "1.7", color: "#cbd5e1", maxWidth: "550px", fontWeight: "400" },
//   exploreButton: { borderRadius: "50px", fontSize: "20px", fontWeight: "700", width: "260px", justifyContent: "space-between", background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", border: "none" },
//   exploreIcon: { background: "white", color: "black", borderRadius: "50%", padding: "12px", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center", width: "45px", height: "45px" },
//   imageWrapper: { position: "relative", overflow: "hidden", borderRadius: "25px", boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)" },
//   heroImage: { width: "100%", height: "100%", borderRadius: "25px", objectFit: "cover", transition: "transform 0.5s ease" },
//   modalHeader: { background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", color: "white", borderBottom: "none", borderRadius: "12px 12px 0 0" },
//   modalTitle: { fontWeight: "700", fontSize: "24px" },
//   modalBody: { padding: "30px", background: "#f8fafc" },
//   modalFooter: { background: "#ffffff", borderTop: "1px solid #e2e8f0", borderRadius: "0 0 12px 12px" },
//   districtCard: { cursor: "pointer", textAlign: "center", padding: "20px", borderRadius: "15px", background: "#f8fafc", border: "none", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)" },
//   districtCardBody: { fontWeight: "600", fontSize: "16px", color: "#0f172a" },
//   modalCloseButton: { borderRadius: "10px", padding: "10px 24px", fontWeight: "600", background: "#64748b", border: "none" }
// };

// export default HeroPage;



import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Row, Col, Card, Dropdown, Modal } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Mock assets for demo
const LogoWhite = "https://via.placeholder.com/225x60/10b981/ffffff?text=GoWilds";
const HeroImg = "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800";

const districts = [
  "Thiruvananthapuram","Kollam","Pathanamthitta","Alappuzha","Kottayam",
  "Idukki","Ernakulam","Thrissur","Palakkad","Malappuram",
  "Kozhikode","Wayanad","Kannur","Kasaragod"
];

const HeroPage = () => {
  const navigate = useNavigate();
  const [districtModal, setDistrictModal] = useState(false);
  const [username, setUsername] = useState("");

  // Check if user is logged in
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername("");
  };

  // District modal handlers
  const openDistrictModal = () => setDistrictModal(true);
  const closeDistrictModal = () => setDistrictModal(false);
  const goToDistrict = (districtName) => {
    closeDistrictModal();
    navigate(`/district/${districtName}`);
  };

  return (
    <div style={styles.pageWrapper}>
      <style>{responsiveStyles}</style>
      
      {/* ---------------- NAVBAR ---------------- */}
      <Navbar expand="lg" variant="dark" style={styles.navbar}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={LogoWhite} alt="GoWilds" style={styles.logo} className="navbar-logo" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto nav-links-wrapper" style={styles.navLinks}>
              <Nav.Link as={Link} to="/places" style={styles.navLink}>Places</Nav.Link>
              <Nav.Link as={Link} to="/services" style={styles.navLink}>Tours</Nav.Link>
              <Nav.Link as={Link} to="/destination" style={styles.navLink}>Destination</Nav.Link>

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
                <div className="user-actions-wrapper" style={{ display: "flex", alignItems: "center", gap: "15px", marginLeft: "20px" }}>
                  {/* Notification Icon */}
                  <FaBell
                    size={24}
                    style={{ color: "white", cursor: "pointer" }}
                    onClick={() => navigate("/notifications")}
                  />

                  {/* User Dropdown */}
                  <Dropdown align="end">
                    <Dropdown.Toggle
                      variant="dark"
                      id="dropdown-user"
                      style={styles.dropdownToggleUser}
                    >
                      <FaUserCircle size={28} style={{ marginRight: "8px", color: "white" }} />
                      <span style={styles.username} className="username-text">{username}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={styles.dropdownMenu}>
                      <Dropdown.Item
                        style={styles.dropdownItem}
                        onClick={() => {
                          Swal.fire({
                            title: 'Are you sure?',
                            text: "You will be logged out!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Yes, logout!',
                            cancelButtonText: 'Cancel'
                          }).then((result) => {
                            if (result.isConfirmed) {
                              handleLogout();
                              Swal.fire('Logged Out!', '', 'success');
                            }
                          });
                        }}
                      >
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : (
                // Dropdown for logged-out users
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="dark"
                    id="dropdown-login-register"
                    style={styles.dropdownToggle}
                  >
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

      {/* ---------------- HERO SECTION ---------------- */}
      <Container className="py-5 hero-container" style={{ marginTop: "40px" }}>
        <Row className="align-items-center">
          <Col md={6} className="mt-5 hero-text-col">
            <div style={styles.arrowCircleLeft} className="arrow-circle-left">
              <BsArrowLeft size={28} style={{ color: "white" }} />
            </div>

            <h1 style={styles.heroTitle} className="hero-title">
              Travel &  <br /> Adventure  <br /> Tour
            </h1>

            <p style={styles.heroDescription} className="hero-description">
              Discover the enchanting beauty of Kerala, where emerald backwaters meet mist-clad mountains and pristine beaches welcome every traveler.
            </p>

            <Button style={styles.exploreButton} className="explore-button">
              Explore More
              <span style={styles.exploreIcon}>✈</span>
            </Button>
          </Col>

          <Col md={6} className="text-center mt-5 hero-image-col">
            <div style={styles.imageWrapper}>
              <img src={HeroImg} alt="Hero" style={styles.heroImage} />
            </div>
            <div style={styles.arrowCircleRight} className="arrow-circle-right">
              <BsArrowRight size={28} />
            </div>
          </Col>
        </Row>
      </Container>

      {/* ---------------- DISTRICT MODAL ---------------- */}
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
  pageWrapper: { background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", color: "white", minHeight: "100vh" },
  navbar: { padding: "25px 0", background: "rgba(15, 23, 42, 0.95)", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)" },
  logo: { width: "225px", marginRight: "30px", marginTop: "30px" },
  navLinks: { fontSize: "18px", fontWeight: "600" },
  navLink: { color: "white", marginRight: "15px", transition: "all 0.3s ease" },
  bookNowButton: { borderRadius: "30px", fontWeight: "700", fontSize: "16px", background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", border: "none" },
  dropdownToggle: { display: "flex", alignItems: "center", background: "none", border: "none", color: "white" },
  dropdownToggleUser: { display: "flex", alignItems: "center", background: "none", border: "none", color: "white" },
  username: { fontWeight: 700, color: "#10b981", fontSize: "16px" },
  dropdownMenu: { borderRadius: "12px", border: "none", boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)", padding: "8px", marginTop: "10px" },
  dropdownItem: { borderRadius: "8px", padding: "10px 16px", fontWeight: "500" },
  arrowCircleLeft: { display: "flex", alignItems: "center", justifyContent: "center", width: "65px", height: "65px", borderRadius: "50%", border: "2px solid white", marginBottom: "30px", cursor: "pointer" },
  arrowCircleRight: { display: "flex", alignItems: "center", justifyContent: "center", width: "65px", height: "65px", borderRadius: "50%", border: "2px solid white", marginTop: "30px", marginLeft: "auto", cursor: "pointer" },
  heroTitle: { fontSize: "85px", fontWeight: "900", lineHeight: "0.95", textTransform: "uppercase", letterSpacing: "-2px", background: "linear-gradient(135deg, #ffffff 0%, #10b981 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "25px" },
  heroDescription: { fontSize: "20px", marginTop: "25px", lineHeight: "1.7", color: "#cbd5e1", maxWidth: "550px", fontWeight: "400" },
  exploreButton: { borderRadius: "50px", fontSize: "20px", fontWeight: "700", width: "260px", justifyContent: "space-between", background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", border: "none", display: "flex", alignItems: "center" },
  exploreIcon: { background: "white", color: "black", borderRadius: "50%", padding: "12px", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center", width: "45px", height: "45px" },
  imageWrapper: { position: "relative", overflow: "hidden", borderRadius: "25px", boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)" },
  heroImage: { width: "100%", height: "100%", borderRadius: "25px", objectFit: "cover", transition: "transform 0.5s ease" },
  modalHeader: { background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", color: "white", borderBottom: "none", borderRadius: "12px 12px 0 0" },
  modalTitle: { fontWeight: "700", fontSize: "24px" },
  modalBody: { padding: "30px", background: "#f8fafc" },
  modalFooter: { background: "#ffffff", borderTop: "1px solid #e2e8f0", borderRadius: "0 0 12px 12px" },
  districtCard: { cursor: "pointer", textAlign: "center", padding: "20px", borderRadius: "15px", background: "#f8fafc", border: "none", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)", transition: "transform 0.2s ease, box-shadow 0.2s ease" },
  districtCardBody: { fontWeight: "600", fontSize: "16px", color: "#0f172a" },
  modalCloseButton: { borderRadius: "10px", padding: "10px 24px", fontWeight: "600", background: "#64748b", border: "none" }
};

// ---------------- RESPONSIVE STYLES ----------------
const responsiveStyles = `
  /* Tablet and below (768px) */
  @media (max-width: 768px) {
    .navbar-logo {
      width: 150px !important;
      margin-right: 15px !important;
      margin-top: 15px !important;
    }
    
    .nav-links-wrapper {
      font-size: 16px !important;
      margin-top: 15px;
    }
    
    .book-now-btn {
      margin-left: 0 !important;
      margin-top: 10px;
      width: 100%;
    }
    
    .user-actions-wrapper {
      margin-left: 0 !important;
      margin-top: 15px;
      justify-content: center;
    }
    
    .hero-container {
      margin-top: 20px !important;
      padding: 20px !important;
    }
    
    .hero-title {
      font-size: 48px !important;
      line-height: 1.1 !important;
      margin-bottom: 20px !important;
    }
    
    .hero-description {
      font-size: 16px !important;
      margin-top: 15px !important;
      max-width: 100% !important;
    }
    
    .explore-button {
      width: 100% !important;
      font-size: 18px !important;
      margin-top: 20px;
    }
    
    .arrow-circle-left,
    .arrow-circle-right {
      width: 50px !important;
      height: 50px !important;
    }
    
    .hero-text-col,
    .hero-image-col {
      margin-top: 20px !important;
    }
    
    .hero-image-col {
      margin-top: 40px !important;
    }
  }
  
  /* Mobile (576px and below) */
  @media (max-width: 576px) {
    .navbar-logo {
      width: 120px !important;
      margin-right: 10px !important;
      margin-top: 10px !important;
    }
    
    .hero-title {
      font-size: 36px !important;
      letter-spacing: -1px !important;
    }
    
    .hero-description {
      font-size: 14px !important;
      line-height: 1.6 !important;
    }
    
    .explore-button {
      font-size: 16px !important;
      padding: 12px 20px !important;
    }
    
    .arrow-circle-left {
      margin-bottom: 20px !important;
    }
    
    .arrow-circle-right {
      margin-top: 20px !important;
    }
    
    .username-text {
      font-size: 14px !important;
    }
  }
  
  /* Extra small mobile (400px and below) */
  @media (max-width: 400px) {
    .hero-title {
      font-size: 32px !important;
    }
    
    .hero-description {
      font-size: 13px !important;
    }
    
    .explore-button {
      font-size: 15px !important;
    }
  }
  
  /* Hover effects for desktop */
  @media (min-width: 769px) {
    .districtCard:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;
    }
    
    .heroImage:hover {
      transform: scale(1.05);
    }
  }
`;

export default HeroPage;
