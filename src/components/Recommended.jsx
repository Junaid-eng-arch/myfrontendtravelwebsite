// src/components/Recommended.jsx

import React, { useState, useEffect } from 'react';
import './Recommended.css'; // Import the dedicated CSS file

const API_ENDPOINT = 'https://kerala-i5mr.onrender.com/api/places';
const ITEMS_TO_SHOW = 4; // Display 4 cards as per your design image

// Placeholder styles for the script font (used in the header)
const customScriptFont = {
  fontFamily: 'Cursive, "Brush Script MT", "Recommended Font"', // Replace with your actual script font name
  fontSize: '3.5rem',
  color: '#D44A7E', // A deep pink/magenta color
  fontWeight: 'bold',
  display: 'inline-block',
  padding: '0 10px',
  lineHeight: '1.2',
};

const RecommendedSection = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Take the first ITEMS_TO_SHOW items for the "Recommended" list
        setPlaces(data.slice(0, ITEMS_TO_SHOW)); 
        
      } catch (e) {
        console.error("Failed to fetch recommended places:", e);
        setError("Failed to load recommended destinations.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  // --- Rendering Logic ---

  if (loading) {
    return <div className="loading-message">Loading Recommended Destinations...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <section className="recommended-section">
      
      {/* --- Section Header (Adjusted to match your image) --- */}
      <h2 className="section-title">
        <span style={customScriptFont}>Recommended</span> of the Month
      </h2>

      {/* --- Destination Card Grid --- */}
      <div className="recommended-grid-container">
        {places.map((place) => (
          <div key={place._id} className="recommended-card">
            
            <div 
              className="recommended-card-image" 
              // Use the rich data field 'imageUrl'
              style={{ backgroundImage: `url(${place.imageUrl})` }}
            >
              <div className="image-overlay"></div>
              
              {/* Text displayed at the bottom of the card */}
              <div className="destination-name-overlay">
                {/* Use the 'name' field (e.g., Gangtok, Pelling) */}
                {place.name} 
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {places.length === 0 && (
          <p className="no-data-message">No recommendations available this month.</p>
        )}
    </section>
  );
};

export default RecommendedSection;