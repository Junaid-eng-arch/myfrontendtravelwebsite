// // // import React from 'react';
// // // import Button from 'react-bootstrap/Button';
// // // import Card from 'react-bootstrap/Card';

// // // const cardData = [
// // //   {
// // //     title: "Card 1",
// // //     text: "This is some quick example text for card 1.",
// // //     img: "https://via.placeholder.com/150"
// // //   },
// // //   {
// // //     title: "Card 2",
// // //     text: "This is some quick example text for card 2.",
// // //     img: "https://via.placeholder.com/150"
// // //   },
// // //   {
// // //     title: "Card 3",
// // //     text: "This is some quick example text for card 3.",
// // //     img: "https://via.placeholder.com/150"
// // //   }
// // // ];

// // // const Cards = () => {
// // //   return (
// // //     <div style={{ display: "flex",marginTop: "20px", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
// // //       {cardData.map((card, index) => (
// // //         <Card key={index} style={{ width: '18rem' }}>
// // //           <Card.Img variant="top" src={card.img} />
// // //           <Card.Body>
// // //             <Card.Title>{card.title}</Card.Title>
// // //             <Card.Text>{card.text}</Card.Text>
// // //             <Button variant="primary">Go somewhere</Button>
// // //           </Card.Body>
// // //         </Card>
// // //       ))}
// // //     </div>
// // //   )
// // // }

// // // export default Cards;


// // import React from 'react';
// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const cardData = [
// //   {
// //     title: "Card 1",
// //     text: "This is some quick example text for card 1.",
// //     img: "https://via.placeholder.com/150"
// //   },
// //   {
// //     title: "Card 2",
// //     text: "This is some quick example text for card 2.",
// //     img: "https://via.placeholder.com/150"
// //   },
// //   {
// //     title: "Card 3",
// //     text: "This is some quick example text for card 3.",
// //     img: "https://via.placeholder.com/150"
// //   }
// // ];

// // const Cards = () => {
// //   return (
// //     <div style={{ 
// //       minHeight: "100vh",
// //       background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //       padding: "60px 20px",
// //       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
// //     }}>
// //       <div style={{ textAlign: "center", marginBottom: "50px" }}>
// //         <h1 style={{ 
// //           color: "white", 
// //           fontSize: "3rem", 
// //           fontWeight: "700",
// //           textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
// //           marginBottom: "10px"
// //         }}>
// //           Discover Our Features
// //         </h1>
// //         <p style={{ 
// //           color: "rgba(255,255,255,0.9)", 
// //           fontSize: "1.2rem",
// //           fontWeight: "300"
// //         }}>
// //           Choose the perfect solution for you
// //         </p>
// //       </div>

// //       <div style={{ 
// //         display: "flex", 
// //         gap: "30px", 
// //         justifyContent: "center", 
// //         flexWrap: "wrap",
// //         maxWidth: "1200px",
// //         margin: "0 auto"
// //       }}>
// //         {cardData.map((card, index) => (
// //           <Card 
// //             key={index} 
// //             style={{ 
// //               width: '20rem',
// //               border: "none",
// //               borderRadius: "20px",
// //               overflow: "hidden",
// //               boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
// //               transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
// //               cursor: "pointer",
// //               background: "white"
// //             }}
// //             onMouseEnter={(e) => {
// //               e.currentTarget.style.transform = "translateY(-15px) scale(1.03)";
// //               e.currentTarget.style.boxShadow = "0 30px 70px rgba(0,0,0,0.4)";
// //             }}
// //             onMouseLeave={(e) => {
// //               e.currentTarget.style.transform = "translateY(0) scale(1)";
// //               e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";
// //             }}
// //           >
// //             <div style={{ 
// //               position: "relative", 
// //               overflow: "hidden",
// //               height: "200px"
// //             }}>
// //               <Card.Img 
// //                 variant="top" 
// //                 src={card.img} 
// //                 style={{
// //                   height: "100%",
// //                   objectFit: "cover",
// //                   transition: "transform 0.4s ease"
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.transform = "scale(1.1)";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.transform = "scale(1)";
// //                 }}
// //               />
// //               <div style={{
// //                 position: "absolute",
// //                 top: "10px",
// //                 right: "10px",
// //                 background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //                 color: "white",
// //                 padding: "5px 15px",
// //                 borderRadius: "20px",
// //                 fontSize: "0.85rem",
// //                 fontWeight: "600",
// //                 boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
// //               }}>
// //                 {card.title}
// //               </div>
// //             </div>
// //             <Card.Body style={{ padding: "25px" }}>
// //               <Card.Title style={{ 
// //                 fontSize: "1.5rem",
// //                 fontWeight: "700",
// //                 color: "#2d3748",
// //                 marginBottom: "15px"
// //               }}>
// //                 {card.title}
// //               </Card.Title>
// //               <Card.Text style={{ 
// //                 color: "#718096",
// //                 lineHeight: "1.6",
// //                 marginBottom: "20px"
// //               }}>
// //                 {card.text}
// //               </Card.Text>
// //               <Button 
// //                 style={{
// //                   background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// //                   border: "none",
// //                   borderRadius: "25px",
// //                   padding: "12px 30px",
// //                   fontWeight: "600",
// //                   fontSize: "0.95rem",
// //                   transition: "all 0.3s ease",
// //                   boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
// //                   width: "100%"
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.transform = "translateY(-2px)";
// //                   e.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.6)";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.transform = "translateY(0)";
// //                   e.currentTarget.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
// //                 }}
// //               >
// //                 Go somewhere →
// //               </Button>
// //             </Card.Body>
// //           </Card>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Cards;



// // import React from 'react';

// // const cardData = [
// //   {
// //     title: "Card 1",
// //     text: "This is some quick example text for card 1.",
// //     img: "https://via.placeholder.com/150"
// //   },
// //   {
// //     title: "Card 2",
// //     text: "This is some quick example text for card 2.",
// //     img: "https://via.placeholder.com/150"
// //   },
// //   {
// //     title: "Card 3",
// //     text: "This is some quick example text for card 3.",
// //     img: "https://via.placeholder.com/150"
// //   }
// // ];

// // const Cards = () => {
// //   return (
// //     <div style={{ 
// //       minHeight: "100vh",
// //       background: "linear-gradient(135deg, #a8e6cf 0%, #dcedc1 50%, #ffd3b6 100%)",
// //       padding: "60px 20px",
// //       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
// //     }}>
// //       <div style={{ textAlign: "center", marginBottom: "50px" }}>
// //         <h1 style={{ 
// //           color: "#2d5016", 
// //           fontSize: "3rem", 
// //           fontWeight: "700",
// //           textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
// //           marginBottom: "10px"
// //         }}>
// //           Discover Our Features
// //         </h1>
// //         <p style={{ 
// //           color: "#4a5f3a", 
// //           fontSize: "1.2rem",
// //           fontWeight: "300"
// //         }}>
// //           Choose the perfect solution for you
// //         </p>
// //       </div>

// //       <div style={{ 
// //         display: "flex", 
// //         gap: "30px", 
// //         justifyContent: "center", 
// //         flexWrap: "wrap",
// //         maxWidth: "1200px",
// //         margin: "0 auto"
// //       }}>
// //         {cardData.map((card, index) => (
// //           <div 
// //             key={index} 
// //             style={{ 
// //               width: '20rem',
// //               border: "none",
// //               borderRadius: "20px",
// //               overflow: "hidden",
// //               boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
// //               transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
// //               cursor: "pointer",
// //               background: "white"
// //             }}
// //             onMouseEnter={(e) => {
// //               e.currentTarget.style.transform = "translateY(-15px) scale(1.03)";
// //               e.currentTarget.style.boxShadow = "0 30px 70px rgba(0,0,0,0.25)";
// //             }}
// //             onMouseLeave={(e) => {
// //               e.currentTarget.style.transform = "translateY(0) scale(1)";
// //               e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.15)";
// //             }}
// //           >
// //             <div style={{ 
// //               position: "relative", 
// //               overflow: "hidden",
// //               height: "200px"
// //             }}>
// //               <img 
// //                 src={card.img} 
// //                 alt={card.title}
// //                 style={{
// //                   width: "100%",
// //                   height: "100%",
// //                   objectFit: "cover",
// //                   transition: "transform 0.4s ease"
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.transform = "scale(1.1)";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.transform = "scale(1)";
// //                 }}
// //               />
// //               <div style={{
// //                 position: "absolute",
// //                 top: "10px",
// //                 right: "10px",
// //                 background: "linear-gradient(135deg, #52b788 0%, #74c69d 100%)",
// //                 color: "white",
// //                 padding: "5px 15px",
// //                 borderRadius: "20px",
// //                 fontSize: "0.85rem",
// //                 fontWeight: "600",
// //                 boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
// //               }}>
// //                 {card.title}
// //               </div>
// //             </div>
// //             <div style={{ padding: "25px" }}>
// //               <h3 style={{ 
// //                 fontSize: "1.5rem",
// //                 fontWeight: "700",
// //                 color: "#2d3748",
// //                 marginBottom: "15px",
// //                 marginTop: "0"
// //               }}>
// //                 {card.title}
// //               </h3>
// //               <p style={{ 
// //                 color: "#718096",
// //                 lineHeight: "1.6",
// //                 marginBottom: "20px"
// //               }}>
// //                 {card.text}
// //               </p>
// //               <button 
// //                 style={{
// //                   background: "linear-gradient(135deg, #52b788 0%, #74c69d 100%)",
// //                   border: "none",
// //                   borderRadius: "25px",
// //                   padding: "12px 30px",
// //                   fontWeight: "600",
// //                   fontSize: "0.95rem",
// //                   transition: "all 0.3s ease",
// //                   boxShadow: "0 4px 15px rgba(82, 183, 136, 0.4)",
// //                   width: "100%",
// //                   color: "white",
// //                   cursor: "pointer"
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.transform = "translateY(-2px)";
// //                   e.currentTarget.style.boxShadow = "0 6px 20px rgba(82, 183, 136, 0.6)";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.transform = "translateY(0)";
// //                   e.currentTarget.style.boxShadow = "0 4px 15px rgba(82, 183, 136, 0.4)";
// //                 }}
// //               >
// //                 Go somewhere →
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Cards;


// // import React from 'react';

// // const cardData = [
// //   {
// //     title: "Card 1",
// //     text: "This is some quick example text for card 1.",
// //     img: "https://via.placeholder.com/150"
// //   },
// //   {
// //     title: "Card 2",
// //     text: "This is some quick example text for card 2.",
// //     img: "https://via.placeholder.com/150"
// //   },
// //   {
// //     title: "Card 3",
// //     text: "This is some quick example text for card 3.",
// //     img: "https://via.placeholder.com/150"
// //   },
// //   {
// //     title: "Card 4",
// //     text: "This is some quick example text for card 4.",
// //     img: "https://via.placeholder.com/150"
// //   }
// // ];

// // const Cards = () => {
// //   return (
// //     <div style={{ 
// //       minHeight: "100vh",
// //       background: "linear-gradient(135deg, #a8e6cf 0%, #dcedc1 50%, #ffd3b6 100%)",
// //       padding: "60px 20px",
// //       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
// //     }}>
// //       <div style={{ textAlign: "center", marginBottom: "50px" }}>
// //         <h1 style={{ 
// //           color: "#2d5016", 
// //           fontSize: "3rem", 
// //           fontWeight: "700",
// //           textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
// //           marginBottom: "10px"
// //         }}>
// //           Discover Our Features
// //         </h1>
// //         <p style={{ 
// //           color: "#4a5f3a", 
// //           fontSize: "1.2rem",
// //           fontWeight: "300"
// //         }}>
// //           Choose the perfect solution for you
// //         </p>
// //       </div>

// //       <div style={{ 
// //         display: "flex", 
// //         gap: "30px", 
// //         justifyContent: "center", 
// //         flexWrap: "wrap",
// //         maxWidth: "1200px",
// //         margin: "0 auto",
// //         height: "400px"
// //       }}>
// //         {cardData.map((card, index) => (
// //           <div 
// //             key={index} 
// //             style={{ 
// //               width: '15rem',
// //               border: "none",
// //               borderRadius: "20px",
// //               overflow: "hidden",
// //               boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
// //               transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
// //               cursor: "pointer",
// //               background: "white",
// //               height:"400px"
// //             }}
// //             onMouseEnter={(e) => {
// //               e.currentTarget.style.transform = "translateY(-15px) scale(1.03)";
// //               e.currentTarget.style.boxShadow = "0 30px 70px rgba(0,0,0,0.25)";
// //             }}
// //             onMouseLeave={(e) => {
// //               e.currentTarget.style.transform = "translateY(0) scale(1)";
// //               e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.15)";
// //             }}
// //           >
// //             <div style={{ 
// //               position: "relative", 
// //               overflow: "hidden",
// //               height: "200px"
// //             }}>
// //               <img 
// //                 src={card.img} 
// //                 alt={card.title}
// //                 style={{
// //                   width: "100%",
// //                   height: "100px",
// //                   objectFit: "cover",
// //                   transition: "transform 0.4s ease"
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.transform = "scale(1.1)";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.transform = "scale(1)";
// //                 }}
// //               />
// //               <div style={{
// //                 position: "absolute",
// //                 top: "10px",
// //                 right: "10px",
// //                 background: "linear-gradient(135deg, #52b788 0%, #74c69d 100%)",
// //                 color: "white",
// //                 padding: "5px 15px",
// //                 borderRadius: "20px",
// //                 fontSize: "0.85rem",
// //                 fontWeight: "600",
// //                 boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
// //               }}>
// //                 {card.title}
// //               </div>
// //             </div>
// //             <div style={{ padding: "15px" }}>
// //               <h3 style={{ 
// //                 fontSize: "1.5rem",
// //                 fontWeight: "700",
// //                 color: "#2d3748",
// //                 marginBottom: "5px",
// //                 marginTop: "0"
// //               }}>
// //                 {card.title}
// //               </h3>
// //               <p style={{ 
// //                 color: "#718096",
// //                 lineHeight: "1.6",
// //                 marginBottom: "20px"
// //               }}>
// //                 {card.text}
// //               </p>
// //               <button 
// //                 style={{
// //                   background: "linear-gradient(135deg, #52b788 0%, #74c69d 100%)",
// //                   border: "none",
// //                   borderRadius: "25px",
// //                   padding: "12px 30px",
// //                   fontWeight: "600",
// //                   fontSize: "0.95rem",
// //                   transition: "all 0.3s ease",
// //                   boxShadow: "0 4px 15px rgba(82, 183, 136, 0.4)",
// //                   width: "100%",
// //                   color: "white",
// //                   cursor: "pointer"
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.transform = "translateY(-2px)";
// //                   e.currentTarget.style.boxShadow = "0 6px 20px rgba(82, 183, 136, 0.6)";
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.transform = "translateY(0)";
// //                   e.currentTarget.style.boxShadow = "0 4px 15px rgba(82, 183, 136, 0.4)";
// //                 }}
// //               >
// //                 Go somewhere →
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Cards;

import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Cards = () => {
  const [packages, setPackages] = React.useState();
  useEffect(() => {
    fetch("https://kerala-i5mr.onrender.com/api/places")
      .then((res) => res.json())
      .then((data) => setPackages(data))
      
      .catch((err) => console.log(err));
  }, []);
   console.log(packages);
 

  const cardStyle = {
    width: "20rem",
    backgroundColor: "#e6f4e8",          // soft green background
    borderRadius: "18px",
    padding: "12px",
    border: "1px solid #b7ddb5",         // light green border
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    margin: "20px",
  };

  const titleStyle = {
    color: "#2e7d32",                    // deep nature green
    fontWeight: "700",
    fontSize: "1.4rem",
  };

  const textStyle = {
    color: "#1b5e20",                    // dark forest green
    fontSize: "1rem",
  };

  const buttonStyle = {
    backgroundColor: "#4caf50",
    border: "none",
    color: "white",
    padding: "10px 20px",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "1rem",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        padding: "40px",
      }}
    >
      {/* CARD 1 */}
      <Card style={cardStyle}>
        <Card.Img
          variant="top"
          
          style={{ borderRadius: "15px", height: "180px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title style={titleStyle}>Green Forest</Card.Title>
          <Card.Text style={textStyle}>
            Refresh your mind with the peaceful green forest vibes.
          </Card.Text>
          <Button ><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About Us</Link></Button>
        </Card.Body>
      </Card>

      
    </div>
  );
};

export default Cards;


// import React, { useEffect } from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";

// const Cards = () => {
//   // Initialize state as an empty array to prevent map errors
//   const [packages, setPackages] = React.useState([]); 
//   
//   useEffect(() => {
//     fetch("https://kerala-i5mr.onrender.com/api/places")
//       .then((res) => res.json())
//       .then((data) => {
//         // Set only the first 3 packages as requested
//         setPackages(data.slice(0, 3)); 
//       })
//       .catch((err) => console.error("Fetch error:", err));
//   }, []);
//    
//   // console.log(packages); // Removed console.log from final output

//   // --- Style Definitions (Unchanged structure) ---
//   const cardStyle = {
//     width: "20rem",
//     backgroundColor: "#e6f4e8",          // soft green background
//     borderRadius: "18px",
//     padding: "12px",
//     border: "1px solid #b7ddb5",         // light green border
//     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
//     margin: "20px",
//     transition: "transform 0.3s ease-in-out", // Added transition for interactivity
//   };

//   const titleStyle = {
//     color: "#2e7d32",                    // deep nature green
//     fontWeight: "700",
//     fontSize: "1.4rem",
//   };

//   const textStyle = {
//     color: "#1b5e20",                    // dark forest green
//     fontSize: "1rem",
//     minHeight: "60px", // Added minHeight for visual consistency
//   };

//   const buttonStyle = {
//     backgroundColor: "#4caf50",
//     border: "none",
//     color: "white",
//     padding: "10px 20px",
//     borderRadius: "10px",
//     fontWeight: "600",
//     fontSize: "1rem",
//   };

//   // Function for a subtle hover effect (optional, but enhances beautification)
//   const handleMouseOver = (e) => {
//     e.currentTarget.style.transform = "translateY(-5px)";
//   };

//   const handleMouseOut = (e) => {
//     e.currentTarget.style.transform = "none";
//   };
//   // --- Component Return (Unchanged structure) ---
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         gap: "20px",
//         flexWrap: "wrap",
//         padding: "40px",
//       }}
//     >
//       {/* Dynamically render cards using the 'packages' state */}
//       {packages.length > 0 ? (
//         packages.map((pkg) => (
//           <Card 
//             key={pkg.id} 
//             style={cardStyle}
//             onMouseOver={handleMouseOver}
//             onMouseOut={handleMouseOut}
//           >
//             <Card.Img
//               variant="top"
//               src={pkg.imageUrl} // Use data from API
//               alt={pkg.name}
//               style={{ borderRadius: "15px", height: "180px", objectFit: "cover" }}
//             />
//             <Card.Body>
//               <Card.Title style={titleStyle}>{pkg.name}</Card.Title> {/* Use data from API */}
//               <Card.Text style={textStyle}>
//                 {/* Use data from API, truncated for card view */}
//                 {pkg.description ? pkg.description.substring(0, 100) + '...' : 'Explore this beautiful place!'}
//               </Card.Text>
//               <Button style={buttonStyle}> {/* Apply buttonStyle */}
//                 {/* Link to a dynamic detail page */}
//                 <Link to={`/details/${pkg.id}`} style={{ color: "white", textDecoration: "none" }}>
//                   Explore
//                 </Link>
//               </Button>
//             </Card.Body>
//           </Card>
//         ))
//       ) : (
//         // Show a loading message or error state if no packages are loaded
//         <h3 style={titleStyle}>Loading travel packages...</h3>
//       )}
//     </div>
//   );
// };

// export default Cards;


// import React, { useState, useEffect } from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are imported

// // Main component, name kept as 'Cards'
// const Cards = () => {
//   // Initialize state as an empty array to prevent map errors
//   const [packages, setPackages] = useState([]); 
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://kerala-i5mr.onrender.com/api/places")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Failed to fetch packages');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         // Set only the first 3 packages for a 3-column layout
//         setPackages(data.slice(0, 3)); 
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Fetch error:", err);
//         setError("Failed to load travel packages.");
//         setLoading(false);
//       });
//   }, []);
    
//   // --- Style Definitions (Cleaned up and applied) ---
//   const cardStyle = {
//     width: "20rem",
//     backgroundColor: "#e6f4e8", // soft green background
//     borderRadius: "18px",
//     padding: "12px",
//     border: "1px solid #b7ddb5", // light green border
//     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
//     margin: "20px",
//     transition: "transform 0.3s ease-in-out",
//   };

//   const titleStyle = {
//     color: "#2e7d32", // deep nature green
//     fontWeight: "700",
//     fontSize: "1.4rem",
//   };

//   const textStyle = {
//     color: "#1b5e20", // dark forest green
//     fontSize: "1rem",
//     minHeight: "60px", // Added minHeight for visual consistency
//   };

//   const buttonStyle = {
//     backgroundColor: "#4caf50",
//     border: "none",
//     color: "white",
//     padding: "10px 20px",
//     borderRadius: "10px",
//     fontWeight: "600",
//     fontSize: "1rem",
//   };

//   // Function for a subtle hover effect
//   const handleMouseOver = (e) => {
//     e.currentTarget.style.transform = "translateY(-5px)";
//   };

//   const handleMouseOut = (e) => {
//     e.currentTarget.style.transform = "none";
//   };
  
//   if (loading) {
//     return (
//       <div style={{ textAlign: "center", padding: "40px" }}>
//         <h3 style={titleStyle}>Loading travel packages...</h3>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={{ textAlign: "center", padding: "40px", color: 'red' }}>
//         <p>{error}</p>
//       </div>
//     );
//   }
  
//   // --- Component Return ---
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         gap: "20px",
//         flexWrap: "wrap",
//         padding: "40px",
//       }}
//     >
//       {packages.length > 0 ? (
//         packages.map((pkg) => (
//           <Card 
//             key={pkg.id} 
//             style={cardStyle}
//             onMouseOver={handleMouseOver}
//             onMouseOut={handleMouseOut}
//           >
//             <Card.Img
//               variant="top"
//               src={pkg.imageUrl} // Use data from API
//               alt={pkg.name}
//               style={{ borderRadius: "15px", height: "180px", objectFit: "cover" }}
//             />
//             <Card.Body>
//               <Card.Title style={titleStyle}>{pkg.name}</Card.Title> {/* Use data from API */}
//               <Card.Text style={textStyle}>
//                 {/* Use data from API, truncated for card view */}
//                 {pkg.description ? pkg.description.substring(0, 100) + '...' : 'Explore this beautiful place!'}
//               </Card.Text>
//               <Button style={buttonStyle}> {/* Apply buttonStyle */}
//                 {/* Link to a dynamic detail page */}
//                 <Link to={`/details/${pkg.id}`} style={{ color: "white", textDecoration: "none" }}>
//                   Explore
//                 </Link>
//               </Button>
//             </Card.Body>
//           </Card>
//         ))
//       ) : (
//         // Fallback if packages array is empty after loading
//         <h3 style={titleStyle}>No packages found.</h3>
//       )}
//     </div>
//   );
// };

// export default Cards;



