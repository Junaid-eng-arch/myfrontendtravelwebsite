// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Carousel } from 'react-bootstrap';

// const WildTourism = () => {
//   const [places, setPlaces] = useState([]);

//   useEffect(() => {
//     axios.get("https://kerala-i5mr.onrender.com/api/places")
//       .then((res) => {
//         const wildPlaces = res.data.filter(place => place.category === 'Wildlife');
//         setPlaces(wildPlaces);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   if (places.length === 0) {
//     return <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading Wildlife Places...</p>;
//   }

//   return (
//     <Carousel style={{ marginTop: "30px", maxWidth: '800px', margin: '30px auto' }}>
//       {places.map((place) => (
//         <Carousel.Item key={place._id}>
//           <img
//             className="d-block w-100"
//             src={place.imageUrl}
//             alt={place.name}
//             style={{ height: "400px", objectFit: "cover" }}
//           />
//           <Carousel.Caption>
//             <h3>{place.name}</h3>
//             {place.description && <p>{place.description}</p>}
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default WildTourism;


import React from "react";

// IMPORT LOCAL IMAGES
import gir from "../images/gir.jpg";
import kaziranga from "../images/kaziranga.jpg";
import kanha from "../images/kanha.jpg";
import ranthambore from "../images/ranthambore.jpg";
import corbett from "../images/corbett.jpg";
import bandhavgarh from "../images/bandhavgarh.jpg";

const WildTourism = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Wildlife Tour Packages</h2>

      <div style={styles.grid}>
        <TourCard
          image={gir}
          title="Gir Tour Packages"
          desc="Special customized Gir tour packages including weekend tours, Sasan Gir holidays and jeep safari experiences."
        />

        <TourCard
          image={kaziranga}
          title="Kaziranga Tour Packages"
          desc="Explore Kaziranga wildlife tours with customized holiday packages and best safari experiences."
        />

        <TourCard
          image={kanha}
          title="Kanha Tour Packages"
          desc="Enjoy jeep safari and wildlife photography at Kanha National Park with affordable tour deals."
        />

        <TourCard
          image={ranthambore}
          title="Ranthambore Tour Packages"
          desc="Discover tiger tours and wildlife packages at Ranthambore with affordable pricing."
        />

        <TourCard
          image={corbett}
          title="Corbett Tour Packages"
          desc="Experience the natural beauty of Corbett with exciting wildlife safari tour packages."
        />

        <TourCard
          image={bandhavgarh}
          title="Bandhavgarh Tour Packages"
          desc="Best offers on Bandhavgarh wildlife tours with customized travel packages."
        />
      </div>
    </section>
  );
};

const TourCard = ({ image, title, desc }) => (
  <div style={styles.card}>
    <img src={image} alt={title} style={styles.image} />

    <div style={styles.content}>
      <h3 style={styles.title}>{title}</h3>

      <div style={styles.stars}>★★★★★</div>

      <p style={styles.text}>{desc}</p>

      <div style={styles.buttons}>
        <button style={styles.viewBtn}>View More</button>
        <button style={styles.bookBtn}>Book Now</button>
      </div>

      <span style={styles.tag}>⏱ Fixed Tour</span>
    </div>
  </div>
);

export default WildTourism;

const styles = {
  section: {
    padding: "clamp(40px, 8%, 70px) 5%", // Fluid padding for mobile/desktop
    backgroundColor: "#eeeeee",
  },
  heading: {
    textAlign: "center",
    fontSize: "clamp(28px, 5vw, 36px)", // Smaller font on mobile
    marginBottom: "40px",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    // Changed minmax to 280px to prevent overflow on small screens
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "25px",
  },
  card: {
    display: "flex",
    // This allows the card to stack the image on top of text on mobile
    flexDirection: "row", 
    flexWrap: "wrap", // Forces wrap when space is tight
    backgroundColor: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  },
  image: {
    // 100% width on mobile, 45% on desktop
    width: "100%", 
    minWidth: "250px", // Ensures it looks good in flex-wrap
    flex: "1 1 250px", // Grows and shrinks flexibly
    height: "250px",
    objectFit: "cover",
  },
  content: {
    padding: "20px",
    flex: "1 1 300px", // Allows content to take up remaining space
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "20px",
    marginBottom: "8px",
    fontWeight: "700",
  },
  stars: {
    color: "#ff9800",
    marginBottom: "10px",
    fontSize: "16px",
  },
  text: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "15px", // Spacing for mobile layout
  },
  buttons: {
    marginTop: "auto", // Pushes buttons to the bottom
    display: "flex",
    flexWrap: "wrap", // Buttons stack if the screen is tiny
    gap: "10px",
  },
  viewBtn: {
    padding: "10px 20px",
    border: "1px solid #333",
    background: "transparent",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
  },
  bookBtn: {
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#ff5722",
    color: "#fff",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
  },
  tag: {
    marginTop: "15px", // Changed from absolute to relative for mobile safety
    fontSize: "12px",
    color: "#888",
    fontWeight: "500",
  },
};