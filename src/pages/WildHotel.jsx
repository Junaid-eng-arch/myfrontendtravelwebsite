import React from 'react';
import './WildHotel.css';

// Asset Imports
import hotel1 from '../images/abc.jpg';
import hotel2 from '../images/hotel2.jpg';
import hotel3 from '../images/hotel3.jpg';
import hotel4 from '../images/hotel4.jpg';
import hotel5 from '../images/hotel5.jpg';
import hotel6 from '../images/hotel6.jpg';

// Data Object (Kept outside component for performance)
const HOTEL_DATA = [
  { id: 1, name: "Ranthambore", rating: "3.0", discount: "20", img: hotel1 },
  { id: 2, name: "Jim Corbett", rating: "3.0", discount: "20", img: hotel2 },
  { id: 3, name: "Gir", rating: "3.0", discount: "20", img: hotel3 },
  { id: 4, name: "Kanha", rating: "3.0", discount: "20", img: hotel4 },
  { id: 5, name: "Bandhavgarh", rating: "3.0", discount: "20", img: hotel5 },
  { id: 6, name: "Kaziranga", rating: "3.0", discount: "20", img: hotel6 },
];

const WildHotel = () => {
  return (
    <section className="wildlife-section">
      <header className="section-header">
        <div className="header-content">
          <div className="accent-line" />
          <h2 className="title">Top Trending Indian Wildlife Hotels</h2>
          <div className="hotel-stars">
            <span className="icon">🏢</span>
            <span className="stars">★★★★★</span>
          </div>
        </div>
        <button className="btn-view-more">View More Hotels</button>
      </header>

      <p className="section-description">
        Here's a roundup of 10 hotels that are either home to mini-zoos or animals 
        roaming freely on the grounds. Find hotels near Wildlife Sanctuary, India online.
      </p>

      <div className="hotel-grid">
        {HOTEL_DATA.map(({ id, name, rating, discount, img }) => (
          <article key={id} className="hotel-card">
            <div className="discount-badge">-{discount}%</div>
            
            <div className="image-wrapper">
              <img src={img} alt={`Resort in ${name}`} loading="lazy" />
              <div className="rating-badge">
                <span className="rating-num">{rating}</span>
                <span className="star">★</span>
              </div>
            </div>

           
              <footer className="hotel-footer">
      <h3 className="location-name">Hotels In {name}</h3>
         <button className="btn-book-now" onClick={() => alert(`Booking ${name}...`)}>
          Book Now
         </button>
       </footer>
           
          </article>
        ))}
      </div>
    </section>
  );
};

export default WildHotel;