// // // import React, { useEffect, useState } from "react";
// // // import { useParams } from "react-router-dom";
// // // import axios from "axios";

// // // const CategoryPage = () => {
// // //   const { name } = useParams();
// // //   const [items, setItems] = useState([]);

// // //   useEffect(() => {
// // //     axios.get("https://kerala-i5mr.onrender.com/api/places")
// // //       .then(res => {
// // //         const filtered = res.data.filter(item => item.category === name);
// // //         setItems(filtered);
// // //       })
// // //       .catch(err => console.log(err));
// // //   }, [name]);

// // //   return (
// // //     <div style={{ padding: "20px" }}>
// // //       <h2>Category: {name}</h2>
// // //       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
// // //         {items.map(item => (
// // //           <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
// // //             <img src={item.image} alt={item.name} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
// // //             <h4>{item.name}</h4>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CategoryPage;


// // import React, { useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const CategoryDetail = () => {
// //   const { name } = useParams();
// //   const [items, setItems] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     axios.get("https://kerala-i5mr.onrender.com/api/places")
// //       .then(res => {
// //         const filtered = res.data.filter(item => item.category === name);
// //         setItems(filtered);
// //       })
// //       .catch(err => console.log(err));
// //   }, [name]);

// //   const goToDetails = (id) => {
// //     navigate(`/details/${id}`);
// //   };

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h2>Category: {name}</h2>
// //       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
// //         {items.map(item => (
// //           <div
// //             key={item.id}
// //             onClick={() => goToDetails(item.id)}
// //             style={{
// //               border: "1px solid #ccc",
// //               padding: "10px",
// //               width: "200px",
// //               cursor: "pointer"
// //             }}
// //           >
// //             <img src={item.imageUrl} alt={item.name} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
// //             <h4>{item.name}</h4>
// //             <button >EXPLORE MORE</button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CategoryDetail;


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Card, Button, Row, Col, Container } from "react-bootstrap";

// const CategoryDetail = () => {
//   const { name } = useParams();
//   const [items, setItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("https://kerala-i5mr.onrender.com/api/places")
//       .then(res => {
//         const filtered = res.data.filter(item => item.category === name);
//         setItems(filtered);
//       })
//       .catch(err => console.log(err));
//   }, [name]);

//   const goToDetails = (id) => {
//     navigate(`/details/${id}`);
//   };

//   return (
//     <Container style={{ padding: "40px 0" }}>
//       <h2 style={{fontFamily:"cursive"}} className="text-center mb-4"> {name} PLACES</h2>
//       <Row xs={1} sm={2} md={3} lg={4} className="g-4">
//         {items.map(item => (
//           <Col key={item.id}>
//             <Card 
//               onClick={() => goToDetails(item.id)}
//               className="h-100 shadow-sm hover-card"
//               style={{ cursor: "pointer", transition: "transform 0.3s, box-shadow 0.3s" }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-5px)";
//                 e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
//               }}
//             >
//               <Card.Img 
//                 variant="top" 
//                 src={item.imageUrl} 
//                 style={{ height: "180px", objectFit: "cover" }} 
//               />
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="mb-2">{item.name}</Card.Title>
//                 <Button 
//                   variant="primary" 
//                   className="mt-auto"
//                   onClick={(e) => {
//                     e.stopPropagation(); // prevent card click
//                     goToDetails(item.id);
//                   }}
//                 >
//                   Explore More
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default CategoryDetail;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const CategoryDetail = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://kerala-i5mr.onrender.com/api/places")
      .then(res => {
        console.log("Fetched items:", res.data.places);
         // check API response
        const filtered = name === "All" ? res.data.places : res.data.places.filter(item => item.category === name);
        setItems(filtered);
      })
      .catch(err => console.log("Axios error:", err));
  }, [name]);

  const goToDetails = (id) => {
    if (!id) {
      console.error("ID is undefined!");
      return;
    }
    navigate(`/details/${id}`);
  };

  return (
    <Container style={{ padding: "40px 0" }}>
      <h2 className="text-center mb-4">Category: {name}</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {items.map(item => (
          <Col key={item.id || item._id}>
            <Card
              className="h-100 shadow-sm hover-card"
              style={{ cursor: "pointer", transition: "transform 0.3s, box-shadow 0.3s" }}
              onClick={() => goToDetails(item.id || item._id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
              }}
            >
              <Card.Img
                variant="top"
                src={item.image || item.imageUrl}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{item.name}</Card.Title>
                <Button
                  variant="primary"
                  className="mt-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToDetails(item.id || item._id);
                  }}
                >
                  Explore More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryDetail;

