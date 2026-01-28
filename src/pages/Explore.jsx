// import React, { useEffect, useState } from "react";
// import { Card, Row, Col, Pagination } from "react-bootstrap";
// import axios from "axios";
// import Dropdown from 'react-bootstrap/Dropdown';


// const Explore = () => {
//   const [places, setPlaces] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const placesPerPage = 6;
//   const [category, setCategory] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://kerala-i5mr.onrender.com/api/places")
//       .then((res) => setPlaces(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   useEffect(() => {
//   const url = category
//     ? `https://kerala-i5mr.onrender.com/api/places?category=${category}`
//     : "https://kerala-i5mr.onrender.com/api/places";

//   axios
//     .get(url)
//     .then((res) => {
//       setPlaces(res.data);
//       setCurrentPage(1);  // reset pagination for new category
//     })
//     .catch((err) => console.log(err));
// }, [category]);

//   // Pagination logic
//   const indexOfLastPlace = currentPage * placesPerPage;
//   const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
//   const currentPlaces = places.slice(indexOfFirstPlace, indexOfLastPlace);
//   const totalPages = Math.ceil(places.length / placesPerPage);
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div style={{ padding: "20px 15px", minHeight: "100vh", background: "#f5f7fa" }}>
//       <Dropdown style={{ padding: "20px", color: "green" }}>
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     {category || "Select Category"}
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item onClick={() => setCategory("")}>All</Dropdown.Item>
//     <Dropdown.Item onClick={() => setCategory("Beach")}>Beach</Dropdown.Item>
//     <Dropdown.Item onClick={() => setCategory("Hillstation")}>Hillstation</Dropdown.Item>
//     <Dropdown.Item onClick={() => setCategory("Wildlife")}>Wildlife</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
//       {/* Heading */}
//       <div style={{ textAlign: "center", margin: "40px 0" }}>
//         <h2
//           style={{
//             fontSize: "42px",
//             fontWeight: "800",
//             background: "linear-gradient(to right, #ff6a00, #ee0979)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             textTransform: "uppercase",
//             letterSpacing: "3px",
//             textShadow: "2px 2px 8px rgba(0,0,0,0.2)",
//           }}
//         >
//           Most Rated Places
//         </h2>
//         <p style={{ fontSize: "18px", color: "#555", marginTop: "10px" }}>
//           Explore the best destinations in Kerala
//         </p>
//       </div>

//       {/* Cards */}
//       <Row className="g-4">
//         {currentPlaces.map((place) => (
//           <Col md={4} key={place._id}>
//             <Card
//               style={{
//                 borderRadius: "30px",
//                 overflow: "hidden",
//                 boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//                 transition: "transform 0.3s, box-shadow 0.3s",
//                 cursor: "pointer",
//                 backgroundColor: "#fff",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-10px)";
//                 e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
//               }}
//             >
//               <Card.Img
//                 variant="top"
//                 src={place.imageUrl || "https://via.placeholder.com/300x250"}
//                 alt={place.name}
//                 style={{
//                   height: "250px",
//                   objectFit: "cover",
//                   marginBottom: "10px",
//                   borderRadius: "30px 30px 0 0",
//                   transition: "transform 0.3s",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//                 onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//               />
//               <Card.Body>
//                 <Card.Title style={{ fontWeight: "600", fontSize: "1.3rem" }}>
//                   {place.name}
//                 </Card.Title>
//                 <Card.Text style={{ fontSize: "14px", color: "#555", minHeight: "60px" }}>
//                   {place.shortDescription || "Explore this amazing destination!"}
//                 </Card.Text>
//                 <a
//                   href={`/place/${place._id}`}
//                   className="btn"
//                   style={{
//                     width: "100%",
//                     background: "linear-gradient(to right, #ff6a00, #ee0979)",
//                     border: "none",
//                     borderRadius: "30px",
//                     color: "#fff",
//                     fontWeight: "600",
//                     padding: "10px 0",
//                     transition: "all 0.3s",
//                     textAlign: "center",
//                     display: "inline-block",
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
//                   onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
//                 >
//                   View More
//                 </a>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Pagination */}
//       <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
//         <Pagination>
//           {[...Array(totalPages)].map((_, idx) => (
//             <Pagination.Item
//               key={idx + 1}
//               active={idx + 1 === currentPage}
//               onClick={() => paginate(idx + 1)}
//               style={{
//                 backgroundColor: idx + 1 === currentPage ? "#ff6a00" : "#fff",
//                 color: idx + 1 === currentPage ? "#fff" : "#555",
//                 border: "1px solid #ff6a00",
//               }}
//             >
//               {idx + 1}
//             </Pagination.Item>
//           ))}
//         </Pagination>
//       </div>
//     </div>
//   );
// };

// export default Explore;


// import React, { useEffect, useState } from "react";
// import { Card, Row, Col, Pagination } from "react-bootstrap";
// import axios from "axios";
// import Dropdown from "react-bootstrap/Dropdown";

// const Explore = () => {
//   const [places, setPlaces] = useState([]);
//   const [filteredPlaces, setFilteredPlaces] = useState([]); // NEW
//   const [currentPage, setCurrentPage] = useState(1);
//   const [category, setCategory] = useState(""); // NEW

//   const placesPerPage = 6;

//   // FETCH ALL PLACES
//   useEffect(() => {
//     axios
//       .get("https://kerala-i5mr.onrender.com/api/places")
//       .then((res) => {
//         setPlaces(res.data);
//         setFilteredPlaces(res.data); // DEFAULT → Show all
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // FILTER WHEN CATEGORY CHANGES
//   useEffect(() => {
//     if (!category) {
//       setFilteredPlaces(places); // Show all
//     } else {
//       const filtered = places.filter(
//         (p) => p.category?.toLowerCase() === category.toLowerCase()
//       );
//       setFilteredPlaces(filtered);
//     }
//     setCurrentPage(1); // Reset page
//   }, [category, places]);

//   // PAGINATION
//   const indexLast = currentPage * placesPerPage;
//   const indexFirst = indexLast - placesPerPage;
//   const currentPlaces = filteredPlaces.slice(indexFirst, indexLast);
//   const totalPages = Math.ceil(filteredPlaces.length / placesPerPage);

//   return (
//     <div style={{ padding: "30px", minHeight: "100vh", background: "#f5f7fa", 
//       backdropFilter: "blur(6px)",
//       borderRadius: "12px",
//       border: "none",
//       fontSize: "1.1rem",
//       fontWeight: "700",
//       letterSpacing: "0.5px",
//       boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
//       transition: "all 0.3s" }}>
//       {/* CATEGORY DROPDOWN */}
//       <Dropdown style={{ padding: "20px",  minWidth: "200px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             fontWeight: "500",
//             fontSize: "16px", }}>
//         <Dropdown.Toggle variant="success">
//           {category || "Select Category"}
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           <Dropdown.Item onClick={() => setCategory("")}>All</Dropdown.Item>
//           <Dropdown.Item onClick={() => setCategory("Beaches")}>Beaches</Dropdown.Item>
//           <Dropdown.Item onClick={() => setCategory("Heritage")}>Heritage</Dropdown.Item>
//           <Dropdown.Item onClick={() => setCategory("Fort")}>Fort</Dropdown.Item>
//           <Dropdown.Item onClick={() => setCategory("Backwaters")}>Backwaters</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>

//       {/* HEADING */}
//       <div style={{ textAlign: "center", margin: "20px 0" }}>
//         <h2 style={{ fontWeight: "800" }}>
//           {category ? `${category.toUpperCase()} Places` : "Most Rated Places"}
//         </h2>
//       </div>

//       {/* CARDS */}
//       <Row className="g-4">
//         {currentPlaces.map((place) => (
//           <Col md={4} key={place._id}>
//             <Card style={{ borderRadius: "20px", overflow: "hidden" }}>
//               <Card.Img
//                 variant="top"
//                 src={place.imageUrl}
//                 style={{ height: "250px", objectFit: "cover" }}
//               />
//               <Card.Body>
//                 <Card.Title>{place.name}</Card.Title>
//                 <Card.Text>{place.shortDescription}</Card.Text>

//              <a
//   href={`/place/${place._id}`}
//   style={{
//     display: "block",
//     width: "100%",
//     padding: "14px 0",
//     textAlign: "center",
//     background: "linear-gradient(135deg, #2e7d32, #66bb6a)",
//     color: "white",
//     fontSize: "1.1rem",
//     fontWeight: "700",
//     borderRadius: "12px",
//     textDecoration: "none",
//     boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
//     transition: "0.3s",
//   }}
//   onMouseEnter={(e) => (e.target.style.background = "linear-gradient(135deg, #1b5e20, #4caf50)")}
//   onMouseLeave={(e) => (e.target.style.background = "linear-gradient(135deg, #2e7d32, #66bb6a)")}
// >
//   View More →
// </a>

//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* PAGINATION */}
//       <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
//         <Pagination>
//           {[...Array(totalPages)].map((_, idx) => (
//             <Pagination.Item
//               key={idx + 1}
//               active={idx + 1 === currentPage}
//               onClick={() => setCurrentPage(idx + 1)}
//             >
//               {idx + 1}
//             </Pagination.Item>
//           ))}
//         </Pagination>
//       </div>
//     </div>
//   );
// };

// export default Explore;


// import React, { useEffect, useState } from "react";
// import { Card, Row, Col, Pagination } from "react-bootstrap";
// import axios from "axios";
// import Dropdown from "react-bootstrap/Dropdown";

// const Explore = () => {
//   const [places, setPlaces] = useState([]);
//   const [filteredPlaces, setFilteredPlaces] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [category, setCategory] = useState("");

//   const placesPerPage = 6;

//   // FETCH API DATA
//   useEffect(() => {
//     axios
//       .get("https://kerala-i5mr.onrender.com/api/places")
//       .then((res) => {
//         console.log("API Response:", res.data);

//         let result = [];

//         // AUTO-DETECT ARRAY
//         if (Array.isArray(res.data)) {
//           result = res.data;
//         } else if (Array.isArray(res.data.places)) {
//           result = res.data.places;
//         } else if (Array.isArray(res.data.data)) {
//           result = res.data.data;
//         } else {
//           console.error("API did NOT return an array.");
//           result = [];
//         }

//         setPlaces(result);
//         setFilteredPlaces(result);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // FILTER BY CATEGORY
//   useEffect(() => {
//     if (!category) {
//       setFilteredPlaces(places); // all places
//     } else {
//       const filtered = places.filter(
//         (p) => p.category?.toLowerCase() === category.toLowerCase()
//       );
//       setFilteredPlaces(filtered);
//     }

//     setCurrentPage(1); // reset pagination
//   }, [category, places]);

//   // PAGINATION
//   const indexLast = currentPage * placesPerPage;
//   const indexFirst = indexLast - placesPerPage;
//   const currentPlaces = filteredPlaces.slice(indexFirst, indexLast);

//   const totalPages = Math.ceil(filteredPlaces.length / placesPerPage);

//   return (
//     <div
//       style={{
//         padding: "30px",
//         minHeight: "100vh",
//         background: "#f0f4f5",
//       }}
//     >
//       {/* CATEGORY DROPDOWN */}
//       <Dropdown style={{ marginBottom: "20px" }}>
//         <Dropdown.Toggle variant="success">
//           {category || "Select Category"}
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           <Dropdown.Item onClick={() => setCategory("")}>All</Dropdown.Item>
//           <Dropdown.Item onClick={() => setCategory("Beaches")}>Beaches</Dropdown.Item>
//           <Dropdown.Item onClick={() => setCategory("Heritage")}>Heritage</Dropdown.Item>
//           <Dropdown.Item onClick={() => setCategory("Fort")}>Fort</Dropdown.Item>
//           <Dropdown.Item onClick={() => setCategory("Backwaters")}>Backwaters</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>

//       {/* HEADING */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <h2 style={{ fontWeight: "800" }}>
//           {category ? `${category.toUpperCase()} Places` : "Most Rated Places"}
//         </h2>
//       </div>

//       {/* PLACES GRID */}
//       <Row className="g-4">
//         {currentPlaces.map((place) => (
//           <Col md={4} key={place._id}>
//             <Card style={{ borderRadius: "20px", overflow: "hidden" }}>
//               <Card.Img
//                 variant="top"
//                 src={place.imageUrl}
//                 style={{ height: "250px", objectFit: "cover" }}
//               />

//               <Card.Body>
//                 <Card.Title>{place.name}</Card.Title>
//                 <Card.Text>
//                   {place.shortDescription || "Explore this amazing destination!"}
//                 </Card.Text>

//                 <a
//                   href={`/place/${place._id}`}
//                   style={{
//                     display: "block",
//                     width: "100%",
//                     padding: "14px 0",
//                     textAlign: "center",
//                     background: "linear-gradient(135deg, #2e7d32, #66bb6a)",
//                     color: "white",
//                     fontSize: "1.1rem",
//                     fontWeight: "700",
//                     borderRadius: "12px",
//                     textDecoration: "none",
//                   }}
//                 >
//                   View More →
//                 </a>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* PAGINATION */}
//       <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
//         <Pagination>
//           {[...Array(totalPages)].map((_, idx) => (
//             <Pagination.Item
//               key={idx + 1}
//               active={idx + 1 === currentPage}
//               onClick={() => setCurrentPage(idx + 1)}
//             >
//               {idx + 1}
//             </Pagination.Item>
//           ))}
//         </Pagination>
//       </div>
//     </div>
//   );
// };

// export default Explore;




import React, { useEffect, useState } from "react";
import { Pagination, Dropdown } from "react-bootstrap";
import axios from "axios";

const Explore = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");

  const placesPerPage = 6;

  // FETCH API DATA
  useEffect(() => {
    axios
      .get("https://kerala-i5mr.onrender.com/api/places")
      .then((res) => {
        let result = [];
        if (Array.isArray(res.data)) result = res.data;
        else if (Array.isArray(res.data.places)) result = res.data.places;
        else if (Array.isArray(res.data.data)) result = res.data.data;
        else result = [];
        setPlaces(result);
        setFilteredPlaces(result);
      })
      .catch((err) => console.log(err));
  }, []);

  // FILTER BY CATEGORY
  useEffect(() => {
    if (!category) setFilteredPlaces(places);
    else {
      const filtered = places.filter(
        (p) => p.category?.toLowerCase() === category.toLowerCase()
      );
      setFilteredPlaces(filtered);
    }
    setCurrentPage(1); // Reset to first page
  }, [category, places]);

  // PAGINATION
  const indexLast = currentPage * placesPerPage;
  const indexFirst = indexLast - placesPerPage;
  const currentPlaces = filteredPlaces.slice(indexFirst, indexLast);
  const totalPages = Math.ceil(filteredPlaces.length / placesPerPage);

  // CATEGORY COLORS
  const typeColors = {
    Beaches: "#0ea5e9",
    Heritage: "#f97316",
    Fort: "#a855f7",
    Backwaters: "#10b981",
    default: "#64748b",
  };

  // ------------------ RESPONSIVE PAGINATION ------------------
  const renderPagination = () => {
    const pageNumbers = [];
    const delta = 2; // pages around current
    const range = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    let lastPage = 0;
    range.forEach((page) => {
      if (page - lastPage > 1) pageNumbers.push("ellipsis");
      pageNumbers.push(page);
      lastPage = page;
    });

    return (
      <Pagination style={{ flexWrap: "wrap" }}>
        <Pagination.Prev
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {pageNumbers.map((item, idx) =>
          item === "ellipsis" ? (
            <Pagination.Ellipsis key={idx} disabled />
          ) : (
            <Pagination.Item
              key={idx}
              active={item === currentPage}
              onClick={() => setCurrentPage(item)}
              style={{
                ...styles.paginationItem,
                ...(item === currentPage ? styles.paginationItemActive : {}),
              }}
            >
              {item}
            </Pagination.Item>
          )
        )}
        <Pagination.Next
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    );
  };

  return (
    <div style={styles.section}>
      {/* CATEGORY DROPDOWN */}
      <div style={styles.dropdownContainer}>
        <Dropdown>
          <Dropdown.Toggle style={styles.dropdownToggle}>
            {category || "All Categories"}
          </Dropdown.Toggle>
          <Dropdown.Menu style={styles.dropdownMenu}>
            <Dropdown.Item onClick={() => setCategory("")} style={styles.dropdownItem}>
              All Categories
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory("Beaches")} style={styles.dropdownItem}>
              🏖️ Beaches
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory("Heritage")} style={styles.dropdownItem}>
              🏛️ Heritage
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory("Fort")} style={styles.dropdownItem}>
              🏰 Fort
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory("Backwaters")} style={styles.dropdownItem}>
              🚤 Backwaters
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* HEADING */}
      <div style={styles.headingContainer}>
        <h2 style={styles.heading}>
          {category ? `${category} Places` : "Discover Kerala"}
        </h2>
        <p style={styles.subheading}>
          Explore the most beautiful destinations in God's Own Country
        </p>
      </div>

      {/* PLACES GRID */}
      <div style={styles.grid}>
        {currentPlaces.map((place) => (
          <div
            key={place._id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
            }}
          >
            <div style={styles.imageContainer}>
              <img src={place.imageUrl} alt={place.name} style={styles.image} />
              {place.category && (
                <span
                  style={{
                    ...styles.badge,
                    backgroundColor: typeColors[place.category] || typeColors.default,
                  }}
                >
                  {place.category}
                </span>
              )}
            </div>

            <div style={styles.content}>
              <h3 style={styles.title}>{place.name}</h3>
              <p style={styles.text}>
                {place.shortDescription || "Explore this amazing destination!"}
              </p>

              <a
                href={`/place/${place._id}`}
                style={styles.button}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #059669 0%, #10b981 100%)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #10b981 0%, #34d399 100%)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div style={styles.paginationContainer}>{renderPagination()}</div>
    </div>
  );
};

export default Explore;

// ---------------- STYLES ----------------
const styles = {
  section: {
    padding: "clamp(20px, 5%, 60px) 5%",
    background: "linear-gradient(to bottom, #f8fafc 0%, #e2e8f0 100%)",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  dropdownContainer: {
    marginBottom: "30px",
    display: "flex",
    justifyContent: "center",
  },
  dropdownToggle: {
    background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    border: "none",
    borderRadius: "12px",
    padding: "10px 24px",
    fontSize: "15px",
    fontWeight: "600",
    boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
    transition: "all 0.3s ease",
    width: "100%",
    maxWidth: "300px",
  },
  dropdownMenu: {
    borderRadius: "12px",
    border: "none",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    padding: "8px",
  },
  dropdownItem: {
    borderRadius: "8px",
    padding: "10px 16px",
    fontSize: "15px",
  },
  headingContainer: {
    textAlign: "center",
    marginBottom: "40px",
  },
  heading: {
    fontSize: "clamp(32px, 5vw, 48px)",
    fontWeight: "800",
    background: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "12px",
    letterSpacing: "-1px",
  },
  subheading: {
    fontSize: "clamp(14px, 2vw, 18px)",
    color: "#64748b",
    fontWeight: "400",
    padding: "0 10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 350px), 1fr))",
    gap: "25px",
    marginBottom: "60px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "220px",
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  badge: {
    position: "absolute",
    top: "12px",
    left: "12px",
    color: "white",
    padding: "4px 12px",
    borderRadius: "20px",
    fontWeight: "600",
    fontSize: "12px",
    backdropFilter: "blur(8px)",
    zIndex: 2,
  },
  content: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "10px",
    lineHeight: "1.3",
  },
  text: {
    fontSize: "14px",
    color: "#64748b",
    lineHeight: "1.6",
    marginBottom: "20px",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 24px",
    background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    color: "white",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "14px",
    width: "100%",
    marginTop: "auto",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  paginationItem: {
    margin: "2px",
  },
  paginationItemActive: {
    backgroundColor: "#10b981",
    borderColor: "#10b981",
  },
};
