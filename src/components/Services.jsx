// import React from 'react'

// const Services = () => {
//   const [places, setPlaces] = React.useState([]);

//   React.useEffect(() => {
//     fetch("https://kerala-i5mr.onrender.com/api/places")
//       .then((res) => res.json())
//       .then((data) => setPlaces(data))
//       .catch((err) => console.log(err));
//   }, []);
//   console.log(places);

//   return (
//     <div>Services</div>
//   )
// }



import React from "react";

const Services = () => {
  return (
    <section style={styles.section}>
      <div style={styles.headerContainer}>
        <h2 style={styles.heading}>Our Travel Services</h2>
        <p style={styles.subHeading}>
          Comfortable • Reliable • Affordable
        </p>
      </div>

      <div style={styles.cardContainer}>
        <div 
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-12px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(16, 185, 129, 0.2)";
            e.currentTarget.style.borderColor = "#10b981";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
            e.currentTarget.style.borderColor = "transparent";
          }}
        >
          <div style={styles.iconCircle}>🚖</div>
          <h3 style={styles.cardTitle}>Taxi Services</h3>
          <p style={styles.cardText}>
            Well-maintained vehicles with professional drivers for city travel,
            airport transfers, and long-distance journeys.
          </p>
        </div>

        <div 
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-12px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(16, 185, 129, 0.2)";
            e.currentTarget.style.borderColor = "#10b981";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
            e.currentTarget.style.borderColor = "transparent";
          }}
        >
          <div style={styles.iconCircle}>🗺️</div>
          <h3 style={styles.cardTitle}>Tour Packages</h3>
          <p style={styles.cardText}>
            Customized tour packages covering beaches, hill stations, and
            cultural destinations at affordable prices.
          </p>
        </div>

        <div 
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-12px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(16, 185, 129, 0.2)";
            e.currentTarget.style.borderColor = "#10b981";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
            e.currentTarget.style.borderColor = "transparent";
          }}
        >
          <div style={styles.iconCircle}>✈️</div>
          <h3 style={styles.cardTitle}>Airport Transfers</h3>
          <p style={styles.cardText}>
            On-time airport pickup and drop services ensuring a smooth and
            stress-free travel experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

/* STYLES */
const styles = {
  section: {
    padding: "100px 8%",
    background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #f0fdf4 100%)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  headerContainer: {
    textAlign: "center",
    marginBottom: "70px",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "800",
    marginBottom: "16px",
    background: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-1px",
  },
  subHeading: {
    fontSize: "18px",
    color: "#64748b",
    letterSpacing: "2px",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "45px 35px",
    borderRadius: "24px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    border: "2px solid transparent",
    cursor: "pointer",
    textAlign: "center",
  },
  iconCircle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    margin: "0 auto 25px",
    boxShadow: "0 8px 20px rgba(16, 185, 129, 0.3)",
  },
  cardTitle: {
    fontSize: "26px",
    marginBottom: "18px",
    color: "#0f172a",
    fontWeight: "700",
  },
  cardText: {
    fontSize: "16px",
    color: "#64748b",
    lineHeight: "1.8",
    fontWeight: "400",
  },
};
