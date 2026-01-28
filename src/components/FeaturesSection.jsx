

// // import React from "react";
// // import { Container, Row, Col } from "react-bootstrap";

// // const FeatureCard = ({ icon, title, desc }) => (
// //   <div
// //     style={{
// //       backgroundColor: "#ffffff",
// //       borderRadius: "20px",
// //       padding: "40px",
// //       marginBottom: "40px",
// //       boxShadow: "0 0 20px rgba(0,0,0,0.05)",
// //     }}
// //   >
// //     <div
// //       style={{
// //         width: "90px",
// //         height: "90px",
// //         borderRadius: "50%",
// //         backgroundColor: "#f7fdf7",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         marginBottom: "20px",
// //       }}
// //     >
// //       <img src={icon} alt="" style={{ width: "45px" }} />
// //     </div>

// //     <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>{title}</h3>
// //     <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#444" }}>{desc}</p>
// //   </div>
// // );

// // const FeaturesSection = () => {
// //   return (
// //     <Container style={{ marginTop: "80px" }}>
// //       <h1
// //         style={{
// //           textAlign: "center",
// //           fontSize: "55px",
// //           fontWeight: "800",
// //           marginBottom: "70px",
// //         }}
// //       >
// //         Amazing Adventure Camping <br /> Services for Enjoyed
// //       </h1>

// //       <Row>
// //         <Col md={4}>
// //           <FeatureCard
// //             icon="https://cdn-icons-png.flaticon.com/128/616/616408.png"
// //             title="Best Security"
// //             desc="We denounce with righteous indignation and dislike men who are so beguiled."
// //           />
// //         </Col>

// //         <Col md={4}>
// //           <FeatureCard
// //             icon="https://cdn-icons-png.flaticon.com/128/1046/1046875.png"
// //             title="Free Internet"
// //             desc="We denounce with righteous indignation and dislike men who are so beguiled."
// //           />
// //         </Col>

// //         <Col md={4}>
// //           <FeatureCard
// //             icon="https://cdn-icons-png.flaticon.com/128/2906/2906279.png"
// //             title="Solar Energy"
// //             desc="We denounce with righteous indignation and dislike men who are so beguiled."
// //           />
// //         </Col>
// //       </Row>

// //       <Row>
// //         <Col md={4}>
// //           <FeatureCard
// //             icon="https://cdn-icons-png.flaticon.com/128/8098/8098966.png"
// //             title="Mountain Biking"
// //             desc="We denounce with righteous indignation and dislike men who are so beguiled."
// //           />
// //         </Col>

// //         <Col md={4}>
// //           <FeatureCard
// //             icon="https://cdn-icons-png.flaticon.com/128/2764/2764651.png"
// //             title="Swimming & Fishing"
// //             desc="We denounce with righteous indignation and dislike men who are so beguiled."
// //           />
// //         </Col>

// //         <Col md={4}>
// //           <FeatureCard
// //             icon="https://cdn-icons-png.flaticon.com/128/8075/8075603.png"
// //             title="Gym and Yoga"
// //             desc="We denounce with righteous indignation and dislike men who are so beguiled."
// //           />
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default FeaturesSection;


// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// // Import images
// import securityImg from "../images/security.jpg";
// import internetImg from "../images/internet.jpg";
// import solarImg from "../images/solar.jpg";
// import bikingImg from "../images/biking.jpg";
// import swimmingImg from "../images/swimming.jpg";
// import gymImg from "../images/gym.jpg";

// const FeatureCard = ({ img, title, desc }) => (
//   <div
//     style={{
//       backgroundColor: "#ffffff",
//       borderRadius: "20px",
//       padding: "40px",
//       marginBottom: "40px",
//       boxShadow: "0 0 20px rgba(0,0,0,0.05)",
//     }}
//   >
//     <div
//       style={{
//         width: "90px",
//         height: "90px",
//         borderRadius: "50%",
//         backgroundColor: "#f7fdf7",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         marginBottom: "20px",
//       }}
//     >
//       <img src={img} alt={title} style={{ width: "150px", height: "150px", borderRadius: "50%",marginLeft: "auto", marginRight: "auto", display: "block" }} />
//     </div>

//     <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>{title}</h3>
//     <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#444" }}>{desc}</p>
//   </div>
// );

// const FeaturesSection = () => {
//   return (
//     <Container style={{ marginTop: "80px" }}>
//       <h1
//         style={{
//           textAlign: "center",
//           fontSize: "55px",
//           fontWeight: "800",
//           marginBottom: "70px",
//         }}
//       >
//         Amazing Adventure Camping <br /> Services for Enjoyed
//       </h1>

//       <Row>
//         <Col md={4}>
//           <FeatureCard
//             img={securityImg}
//             title="Best Security"
//             desc="We denounce with righteous indignation and dislike men who are so beguiled."
//           />
//         </Col>

//         <Col md={4}>
//           <FeatureCard
//             img={internetImg}
//             title="Free Internet"
//             desc="We denounce with righteous indignation and dislike men who are so beguiled."
//           />
//         </Col>

//         <Col md={4}>
//           <FeatureCard
//             img={solarImg}
//             title="Solar Energy"
//             desc="We denounce with righteous indignation and dislike men who are so beguiled."
//           />
//         </Col>
//       </Row>

//       <Row>
//         <Col md={4}>
//           <FeatureCard
//             img={bikingImg}
//             title="Mountain Biking"
//             desc="We denounce with righteous indignation and dislike men who are so beguiled."
//           />
//         </Col>

//         <Col md={4}>
//           <FeatureCard
//             img={swimmingImg}
//             title="Swimming & Fishing"
//             desc="We denounce with righteous indignation and dislike men who are so beguiled."
//           />
//         </Col>

//         <Col md={4}>
//           <FeatureCard
//             img={gymImg}
//             title="Gym and Yoga"
//             desc="We denounce with righteous indignation and dislike men who are so beguiled."
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default FeaturesSection;



import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

// Import images/icons (using your existing imports as placeholders)
import securityImg from "../images/security.jpg";
import internetImg from "../images/internet.jpg";
import solarImg from "../images/solar.jpg";
import bikingImg from "../images/biking.jpg";
import swimmingImg from "../images/swimming.jpg";
import gymImg from "../images/gym.jpg";

// ------------------------------------------
// 1. Data Structure (Simulating API Response)
// ------------------------------------------
const featureData = [
  {
    id: 1,
    img: securityImg,
    title: "Best Security",
    desc: "24/7 guarded campsites and secure storage for peace of mind throughout your adventure.",
  },
  {
    id: 2,
    img: internetImg,
    title: "High-Speed Wi-Fi",
    desc: "Stay connected with free, high-speed internet access available at all main camp areas.",
  },
  {
    id: 3,
    img: solarImg,
    title: "Eco-Friendly Power",
    desc: "We utilize clean solar energy for lighting and basic charging stations to minimize our impact.",
  },
  {
    id: 4,
    img: bikingImg,
    title: "Mountain Biking",
    desc: "Explore challenging terrains with guided mountain biking tours tailored for all skill levels.",
  },
  {
    id: 5,
    img: swimmingImg,
    title: "Swimming & Fishing",
    desc: "Enjoy refreshing swims in natural pools and guided fishing excursions in local rivers.",
  },
  {
    id: 6,
    img: gymImg,
    title: "Outdoor Fitness",
    desc: "Start your day with morning yoga sessions and utilize our basic outdoor gym facilities.",
  },
];

// ------------------------------------------
// Feature Card Component (kept same structure)
// ------------------------------------------
const FeatureCard = ({ img, title, desc }) => (
  <div
    style={{
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      padding: "40px",
      marginBottom: "40px",
      boxShadow: "0 0 20px rgba(0,0,0,0.05)",
      height: "100%", // Ensures cards in the same row are the same height
    }}
  >
    <div
      style={{
        width: "150px", 
        height: "150px", 
        borderRadius: "50%",
        display: "block",
        margin: "0 auto 20px auto",
        overflow: "hidden", // To make the image fit the circle
      }}
    >
      {/* Updated image style for better fit */}
      <img 
        src={img} 
        alt={title} 
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover", // Ensures image covers the circle
        }} 
      />
    </div>

    <h3 style={{ fontWeight: "700", marginBottom: "15px", textAlign: "center" }}>{title}</h3>
    <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#444", textAlign: "center" }}>{desc}</p>
  </div>
);

// ------------------------------------------
// Main Features Section Component
// ------------------------------------------
const FeaturesSection = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect runs after the component mounts
  useEffect(() => {
    // Simulate an API call delay
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(featureData); // Resolve with the data
        }, 1000); // 1 second delay
      });
    };

    fetchData().then((data) => {
      setFeatures(data);
      setLoading(false);
    });
  }, []); // Empty dependency array ensures it runs only once

  // Render a loading state while fetching data
  if (loading) {
    return (
      <Container style={{ marginTop: "80px", textAlign: "center" }}>
        <Spinner animation="border" variant="success" role="status" />
        <p>Loading amazing adventure services...</p>
      </Container>
    );
  }

  // Render the data once it's available
  return (
    <Container style={{ marginTop: "80px" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "55px",
          fontWeight: "800",
          marginBottom: "70px",
        }}
      >
        Amazing Adventure Camping <br /> Services for Enjoyed
      </h1>

      <Row className="g-4">
        {/* Use map to render all features dynamically */}
        {features.map((feature) => (
          <Col md={4} key={feature.id}>
            <FeatureCard
              img={feature.img}
              title={feature.title}
              desc={feature.desc}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturesSection;

