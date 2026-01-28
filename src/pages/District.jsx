// // import React from 'react'
// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';
// // import { Link } from 'react-router-dom';

// // import './District.css';


// // import ThiruvananthapuramImg from "../images/districts/thiruvananthapuram.jpg";
// // import KollamImg from "../images/districts/kollam.jpg";
// // import PathanamthittaImg from "../images/districts/pathanamthitta.jpg";
// // import AlappuzhaImg from "../images/districts/alappuzha.jpg";
// // import KottayamImg from "../images/districts/kottayam.jpg";
// // import IdukkiImg from "../images/districts/idukki.jpg";
// // import ErnakulamImg from "../images/districts/ernakulam.jpg";
// // import ThrissurImg from "../images/districts/thrissur.jpg";
// // import PalakkadImg from "../images/districts/palakkad.jpg";
// // import MalappuramImg from "../images/districts/malappuram.jpg";
// // import KozhikodeImg from "../images/districts/kozhikode.jpg";
// // import WayanadImg from "../images/districts/wayanad.jpg";
// // import KannurImg from "../images/districts/kannur.jpg";
// // import KasaragodImg from "../images/districts/kasaragod.jpg";


// // const districts = [
// //   { name: "Thiruvananthapuram", image: ThiruvananthapuramImg },
// //   { name: "Kollam", image: KollamImg },
// //   { name: "Pathanamthitta", image: PathanamthittaImg },
// //   { name: "Alappuzha", image: AlappuzhaImg },
// //   { name: "Kottayam", image: KottayamImg },
// //   { name: "Idukki", image: IdukkiImg   },
// //   { name: "Ernakulam", image: ErnakulamImg },
// //   { name: "Thrissur", image: ThrissurImg },
// //   { name: "Palakkad", image: PalakkadImg },
// //   { name: "Malappuram", image: MalappuramImg },
// //   { name: "Kozhikode", image: KozhikodeImg },
// //   { name: "Wayanad", image: WayanadImg },
// //   { name: "Kannur", image: KannurImg },
// //   { name: "Kasaragod", image: KasaragodImg }
// // ];
// // const District = () => {
  
// //   return (
// //     <div>
// //       <div><h2 style={{textAlign:"center",marginBottom:"20px",fontStyle:"italic",color:"lightgreen"}}> Explore Districts of Kerala</h2></div>
// //       <div><h3 style={{fontFamily:"-moz-initial",fontSize:"20px",textAlign:"center",fontStyle:"italic"}}>Check out these enthralling tourism spots that cast a magical spell!</h3></div>
    
   
// //     <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      
// //       {districts.map((district) => (
// //         <Card key={district.name} style={{ width: "18rem",borderRadius:"15px green" }}>
// //           <Card.Img style={{height:"200px"}} variant="top" src={district.image} />
// //           <Card.Body>
// //             <Card.Title>{district.name}</Card.Title>
// //             <Card.Text>{district.shortDescription}</Card.Text>
// //             <Button variant="primary" as={Link} to={`/places/${district.name}`}>Explore</Button>
// //           </Card.Body>
// //         </Card>
// //       ))}
// //     </div>
// //     </div>
// //   );
// // };

// // export default District


// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';

// import './District.css';


// // --- Import Images (kept as is) ---
// import ThiruvananthapuramImg from "../images/districts/thiruvananthapuram.jpg";
// import KollamImg from "../images/districts/kollam.jpg";
// import PathanamthittaImg from "../images/districts/pathanamthitta.jpg";
// import AlappuzhaImg from "../images/districts/alappuzha.jpg";
// import KottayamImg from "../images/districts/kottayam.jpg";
// import IdukkiImg from "../images/districts/idukki.jpg";
// import ErnakulamImg from "../images/districts/ernakulam.jpg";
// import ThrissurImg from "../images/districts/thrissur.jpg";
// import PalakkadImg from "../images/districts/palakkad.jpg";
// import MalappuramImg from "../images/districts/malappuram.jpg";
// import KozhikodeImg from "../images/districts/kozhikode.jpg";
// import WayanadImg from "../images/districts/wayanad.jpg";
// import KannurImg from "../images/districts/kannur.jpg";
// import KasaragodImg from "../images/districts/kasaragod.jpg";


// // --- District Data ---
// const districts = [
//   { name: "Thiruvananthapuram", image: ThiruvananthapuramImg, shortDescription: "Capital city, featuring the Padmanabhaswamy Temple and pristine beaches." },
//   { name: "Kollam", image: KollamImg, shortDescription: "Gateway to the backwaters, famous for cashew trade and Ashtamudi Lake." },
//   { name: "Pathanamthitta", image: PathanamthittaImg, shortDescription: "Known for the Sabarimala Pilgrimage and dense forests of the Western Ghats." },
//   { name: "Alappuzha", image: AlappuzhaImg, shortDescription: "The 'Venice of the East,' famous for its serene backwaters and houseboats." },
//   { name: "Kottayam", image: KottayamImg, shortDescription: "Land of latex, lakes, and letters; a major hub for rubber and spices." },
//   { name: "Idukki", image: IdukkiImg, shortDescription: "The high-range district, home to Munnar's tea estates and the massive Idukki Dam."  },
//   { name: "Ernakulam", image: ErnakulamImg, shortDescription: "Modern commercial hub, including the historic port city of Kochi." },
//   { name: "Thrissur", image: ThrissurImg, shortDescription: "The cultural capital, famous for the Thrissur Pooram festival and ancient temples." },
//   { name: "Palakkad", image: PalakkadImg, shortDescription: "The 'Gateway of Kerala,' known for its rolling hills, dams, and rice fields." },
//   { name: "Malappuram", image: MalappuramImg, shortDescription: "A historical and cultural center with lush hills and river valleys." },
//   { name: "Kozhikode", image: KozhikodeImg, shortDescription: "Historic landing point of Vasco da Gama, famous for its sweet-meat street and cuisine." },
//   { name: "Wayanad", image: WayanadImg, shortDescription: "A land of caves, waterfalls, and mist-clad mountains, rich in history and nature." },
//   { name: "Kannur", image: KannurImg, shortDescription: "Known for its unique 'Theyyam' art form, handloom industry, and beautiful beaches." },
//   { name: "Kasaragod", image: KasaragodImg, shortDescription: "The northernmost district, featuring the impressive Bekal Fort and various languages." }
// ];

// const District = () => {
//   
//   // --- Beautified Card Styles ---
//   const cardStyle = { 
//     width: "18rem", 
//     borderRadius: "15px", 
//     boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)", 
//     border: "1px solid #c8e6c9", 
//     overflow: "hidden", 
//     transition: "transform 0.3s ease-in-out", // Kept transition for CSS hover effect
//     cursor: "pointer",
//     backgroundColor: "#f9fff9", 
//   };

//   const buttonStyle = {
//     backgroundColor: "#2e7d32", 
//     border: "none",
//     fontWeight: "600",
//     padding: "8px 20px",
//   };
//   
//   const titleStyle = {
//     color: "#1b5e20", 
//     fontWeight: "700",
//     fontSize: "1.25rem",
//     marginBottom: "8px",
//   };
//   
//   
//   // --- Component Return ---
//   return (
//     <div className="district-container"> {/* Added class for main container styling in CSS */}
//       {/* Main Title */}
//       <div>
//         <h2 style={{textAlign:"center",marginBottom:"10px",fontStyle:"italic",color:"#2e7d32", fontSize: "2.5rem"}}> 
//           🏞️ Explore Districts of Kerala
//         </h2>
//       </div>
//       {/* Subtitle */}
//       <div>
//         <h3 style={{fontFamily:"Arial, sans-serif",fontSize:"1.25rem",textAlign:"center",fontStyle:"normal", color: "#4caf50", marginBottom: "30px"}}>
//           Check out these enthralling tourism spots that cast a magical spell!
//         </h3>
//       </div>
//     
//     {/* Card Container: Used a className to link to external CSS */}
//     <div className="district-cards-wrapper">
//       
//       {districts.map((district) => (
//         <Card 
//           key={district.name} 
//           className="district-card" // Added class for CSS hover
//           style={cardStyle}
//           // REMOVED: onMouseOver and onMouseOut 
//         >
//           <Card.Img 
//             style={{height:"200px", objectFit: "cover"}} 
//             variant="top" 
//             src={district.image} 
//           />
//           <Card.Body>
//             <Card.Title style={titleStyle}>{district.name}</Card.Title>
//             <Card.Text style={{minHeight: "40px", color: "#385d38"}}>
//               {district.shortDescription}
//             </Card.Text>
//             <Button style={buttonStyle} as={Link} to={`/places/${district.name}`}>
//               View Spots
//             </Button>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default District;



import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './District.css';


// --- Import Images (kept as is) ---
import ThiruvananthapuramImg from "../images/districts/thiruvananthapuram.jpg";
import KollamImg from "../images/districts/kollam.jpg";
import PathanamthittaImg from "../images/districts/pathanamthitta.jpg";
import AlappuzhaImg from "../images/districts/alappuzha.jpg";
import KottayamImg from "../images/districts/kottayam.jpg";
import IdukkiImg from "../images/districts/idukki.jpg";
import ErnakulamImg from "../images/districts/ernakulam.jpg";
import ThrissurImg from "../images/districts/thrissur.jpg";
import PalakkadImg from "../images/districts/palakkad.jpg";
import MalappuramImg from "../images/districts/malappuram.jpg";
import KozhikodeImg from "../images/districts/kozhikode.jpg";
import WayanadImg from "../images/districts/wayanad.jpg";
import KannurImg from "../images/districts/kannur.jpg";
import KasaragodImg from "../images/districts/kasaragod.jpg";


// --- District Data ---
const districts = [
  { name: "Thiruvananthapuram", image: ThiruvananthapuramImg, shortDescription: "Capital city, featuring the Padmanabhaswamy Temple and pristine beaches." },
  { name: "Kollam", image: KollamImg, shortDescription: "Gateway to the backwaters, famous for cashew trade and Ashtamudi Lake." },
  { name: "Pathanamthitta", image: PathanamthittaImg, shortDescription: "Known for the Sabarimala Pilgrimage and dense forests of the Western Ghats." },
  { name: "Alappuzha", image: AlappuzhaImg, shortDescription: "The 'Venice of the East,' famous for its serene backwaters and houseboats." },
  { name: "Kottayam", image: KottayamImg, shortDescription: "Land of latex, lakes, and letters; a major hub for rubber and spices." },
  { name: "Idukki", image: IdukkiImg, shortDescription: "The high-range district, home to Munnar's tea estates and the massive Idukki Dam."  },
  { name: "Ernakulam", image: ErnakulamImg, shortDescription: "Modern commercial hub, including the historic port city of Kochi." },
  { name: "Thrissur", image: ThrissurImg, shortDescription: "The cultural capital, famous for the Thrissur Pooram festival and ancient temples." },
  { name: "Palakkad", image: PalakkadImg, shortDescription: "The 'Gateway of Kerala,' known for its rolling hills, dams, and rice fields." },
  { name: "Malappuram", image: MalappuramImg, shortDescription: "A historical and cultural center with lush hills and river valleys." },
  { name: "Kozhikode", image: KozhikodeImg, shortDescription: "Historic landing point of Vasco da Gama, famous for its sweet-meat street and cuisine." },
  { name: "Wayanad", image: WayanadImg, shortDescription: "A land of caves, waterfalls, and mist-clad mountains, rich in history and nature." },
  { name: "Kannur", image: KannurImg, shortDescription: "Known for its unique 'Theyyam' art form, handloom industry, and beautiful beaches." },
  { name: "Kasaragod", image: KasaragodImg, shortDescription: "The northernmost district, featuring the impressive Bekal Fort and various languages." }
];

const District = () => {
  
  // --- BEAUTIFIED CARD STYLES ---
  const cardStyle = { 
    width: "18rem", 
    borderRadius: "20px", 
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)", 
    border: "none", 
    overflow: "hidden", 
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    backgroundColor: "#ffffff", 
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)", 
    border: "none",
    fontWeight: "700",
    padding: "12px 28px",
    borderRadius: "12px",
    fontSize: "15px",
    boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
    transition: "all 0.3s ease",
  };
  
  const titleStyle = {
    color: "#0f172a", 
    fontWeight: "700",
    fontSize: "1.4rem",
    marginBottom: "12px",
  };

  const containerStyle = {
    padding: "60px 5%",
    background: "linear-gradient(to bottom, #f0fdf4 0%, #dcfce7 100%)",
    minHeight: "100vh",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "16px",
    fontSize: "3rem",
    fontWeight: "800",
    background: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-1px",
  };

  const subheadingStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "1.2rem",
    textAlign: "center",
    color: "#64748b",
    marginBottom: "50px",
    fontWeight: "400",
  };

  const cardsWrapperStyle = {
    display: "flex", 
    flexWrap: "wrap", 
    gap: "35px",
    justifyContent: "center",
  };

  const descriptionStyle = {
    minHeight: "70px", 
    color: "#64748b",
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "16px",
  };
  
  
  // --- Component Return ---
  return (
    <div style={containerStyle}>
      {/* Main Title */}
      <div>
        <h2 style={headingStyle}> 
          🏞️ Explore Districts of Kerala
        </h2>
      </div>
      {/* Subtitle */}
      <div>
        <h3 style={subheadingStyle}>
          Check out these enthralling tourism spots that cast a magical spell!
        </h3>
      </div>
    
    {/* Card Container */}
    <div style={cardsWrapperStyle}>
      
      {districts.map((district) => (
        <Card 
          key={district.name} 
          className="district-card"
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px)";
            e.currentTarget.style.boxShadow = "0 16px 35px rgba(0, 0, 0, 0.18)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.12)";
          }}
        >
          <Card.Img 
            style={{height:"220px", objectFit: "cover"}} 
            variant="top" 
            src={district.image} 
          />
          <Card.Body style={{padding: "24px"}}>
            <Card.Title style={titleStyle}>{district.name}</Card.Title>
            <Card.Text style={descriptionStyle}>
              {district.shortDescription}
            </Card.Text>
            <Button 
              style={buttonStyle} 
              as={Link} 
              to={`/places/${district.name}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(16, 185, 129, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(16, 185, 129, 0.3)";
              }}
            >
              View Spots →
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default District;