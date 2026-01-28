// src/components/PopularToursSection.jsx (The key change is here)

// import React, { useState, useEffect, useMemo } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';

// // import './PopularToursSection.css'; 

// // CHANGE THIS CONSTANT FROM 4 TO 8
// const ITEMS_PER_PAGE = 8; // <--- MODIFIED TO SHOW 8 CARDS PER PAGE

// const API_ENDPOINT = 'https://kerala-i5mr.onrender.com/api/places';

// // Placeholder styles for the custom script font (rest of the file remains the same)
// const customScriptFont = {
//   // ... styles ...
// };

// const PopularToursSection = () => {
//   const [allPlaces, setAllPlaces] = useState([]); 
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1); 

//   // ... (useEffect hook for fetching data remains the same) ...

//   // --- PAGINATION LOGIC ---

//   // totalPages now calculates based on 8 items per page
//   const totalPages = Math.ceil(allPlaces.length / ITEMS_PER_PAGE);

//   // currentPlaces now slices 8 items for the current page
//   const currentPlaces = useMemo(() => {
//     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//     const endIndex = startIndex + ITEMS_PER_PAGE;
//     return allPlaces.slice(startIndex, endIndex);
//   }, [allPlaces, currentPage]);

//   const goToNextPage = () => {
//     setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
//   };

//   const goToPrevPage = () => {
//     setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
//   };
  
//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };


//   // --- Rendering Logic --- (This part remains the same)

//   // ... (loading and error checks) ...

//   return (
//     <section className="popular-tours-section">
     
      
//       {/* --- Section Header --- */}
//       <h2 className="section-title">
//         Most <span style={customScriptFont}>Popular Tour</span> of India
//       </h2>
     

//       {/* --- Tour Card Grid --- */}
//       <div className="tours-grid-container">
//         {currentPlaces.map((place) => (
//           <div key={place._id} className="tour-card">
//             {/* ... card content ... */}
//           </div>
//         ))}
        
//         {currentPlaces.length === 0 && (
//           <p className="no-data-message">No popular destinations are available right now.</p>
//         )}
//       </div>

//       {/* --- PAGINATION CONTROLS --- */}
//       {totalPages > 1 && (
//         <div className="pagination-controls">
//           {/* ... (buttons remain the same) ... */}
//         </div>
//       )}
      
//     </section>
//   );
// };

// export default PopularToursSection;


import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const ITEMS_PER_PAGE = 8; // Showing 8 cards per page
const API_ENDPOINT = 'https://kerala-i5mr.onrender.com/api/add.places'; // Your API

const customScriptFont = {
  fontFamily: "'Dancing Script', cursive",
  color: "#ff5722",
};

const PopularToursSection = () => {
  const [allPlaces, setAllPlaces] = useState([]); // Will store places array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await axios.get(API_ENDPOINT);
        setAllPlaces(res.data.places || []); // Extract nested 'places' array
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchPlaces();
  }, []);

  const totalPages = Math.ceil(allPlaces.length / ITEMS_PER_PAGE);

  const currentPlaces = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return allPlaces.slice(startIndex, endIndex);
  }, [allPlaces, currentPage]);

  const goToNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading popular tours...</p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>;

  return (
    <section style={{ padding: "40px 20px", maxWidth: "1200px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "32px" }}>
        Most <span style={customScriptFont}>Popular Tours</span> of India
      </h2>

      {/* --- Tour Cards Grid --- */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "20px" }}>
        {currentPlaces.map(place => (
          <div
            key={place._id}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s",
            }}
          >
            <img src={place.imageUrl} alt={place.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "15px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <h3 style={{ margin: "0 0 10px 0", color: "#0f172a" }}>{place.name}</h3>
              <p style={{ margin: "0 0 10px 0", color: "#555" }}>{place.shortDescription}</p>
              <p style={{ margin: "0 0 5px 0", fontWeight: "500" }}>Category: {place.category}</p>
              <p style={{ margin: "0 0 5px 0", fontWeight: "500" }}>Best Time: {place.bestTime}</p>
              <p style={{ margin: "0 0 10px 0", fontWeight: "500" }}>District: {place.district}</p>
              <a
                href={place.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "auto",
                  textAlign: "center",
                  padding: "10px",
                  borderRadius: "6px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                View on Map
              </a>
            </div>
          </div>
        ))}

        {currentPlaces.length === 0 && <p>No popular destinations available right now.</p>}
      </div>

      {/* --- Pagination --- */}
      {totalPages > 1 && (
        <div style={{ marginTop: "30px", textAlign: "center", display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          <button onClick={goToPrevPage} disabled={currentPage === 1} style={paginationButtonStyle}>
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              style={{
                ...paginationButtonStyle,
                backgroundColor: currentPage === i + 1 ? "#007bff" : "#f1f5f9",
                color: currentPage === i + 1 ? "#fff" : "#000",
              }}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={goToNextPage} disabled={currentPage === totalPages} style={paginationButtonStyle}>
            Next
          </button>
        </div>
      )}
    </section>
  );
};

const paginationButtonStyle = {
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "500",
  transition: "all 0.3s",
};

export default PopularToursSection;
