// src/components/middle.jsx

import React, { useState, useEffect } from 'react';
// If you created a CSS file for this section, import it here:
import './Middle.css'; 

const API_ENDPOINT = 'https://kerala-i5mr.onrender.com/api/places';

const MiddleSection = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // Assuming the API returns an array directly:
        setPlaces(data); 
        
      } catch (e) {
        console.error("Failed to fetch places:", e);
        setError("Failed to load travel destinations. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []); // Empty dependency array means this runs once on mount

  // --- Rendering Logic ---

  if (loading) {
    return (
      <div className="middle-section-loading">
        <h2>Loading amazing destinations...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="middle-section-error">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <main className="middle-content">
      <h1 className="section-header">Explore Our Destinations</h1>
      
      <div className="places-grid">
        {places.map((place) => (
          // Use place.id as the key for efficient list rendering
          <div key={place.id} className="place-card">
            
            {/* Image Section */}
            <div className="place-image-container">
              {/* NOTE: You might need to adjust the path/URL format for the image */}
              <img 
                src={place.image} 
                alt={place.description} 
                className="place-image" 
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div className="place-details">
              {/* Using 'description' as the main title for display */}
              <h2 className="place-title">{place.description}</h2>
              
              {/* You could add a 'Read More' button or a link here */}
              <button className="view-details-button">View Details</button>
            </div>
            
          </div>
        ))}
        
        {places.length === 0 && (
          <p>No destinations found at the moment.</p>
        )}
      </div>
    </main>
  );
};

export default MiddleSection;