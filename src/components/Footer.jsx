// import React from "react";

// const Footer = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         backgroundColor: "#1b5e20", // deep forest green
//         color: "white",
//         padding: "40px 20px",
//         textAlign: "center",
//       }}
//     >
//       {/* Title */}
//       <h2
//         style={{
//           fontWeight: "800",
//           marginBottom: "15px",
//         }}
//       >
//         Wild Nature Adventures
//       </h2>

//       {/* Description */}
//       <p
//         style={{
//           fontSize: "18px",
//           maxWidth: "600px",
//           margin: "0 auto 25px auto",
//           lineHeight: "1.6",
//         }}
//       >
//         Explore the beauty of nature with our eco-friendly tours, wildlife
//         experiences, camping adventures, and forest retreats.
//       </p>

//       {/* Social Icons */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "20px",
//           fontSize: "28px",
//           marginBottom: "20px",
//         }}
//       >
//         <a href="#" style={{ color: "white", textDecoration: "none" }}>🌐</a>
//         <a href="#" style={{ color: "white", textDecoration: "none" }}>📘</a>
//         <a href="#" style={{ color: "white", textDecoration: "none" }}>📸</a>
//         <a href="#" style={{ color: "white", textDecoration: "none" }}>▶️</a>
//       </div>

//       {/* Bottom Line */}
//       <p style={{ fontSize: "14px", opacity: "0.8" }}>
//         © {new Date().getFullYear()} Wild Adventures. All rights reserved.
//       </p>
//     </div>
//   );
// };

// export default Footer;


import React from 'react';
import './Footer.css';
// NOTE: You would import your styles here, e.g., import './Footer.css';
// and potentially use an icon library like FontAwesome for the social icons.

// Placeholder data (replace with your actual links and info)
const usefulLinks = [
  { name: 'Home', url: '/' },
  { name: 'About us', url: '/about' },
  { name: 'Tour Packages', url: '/tours' },
  { name: 'Destinations', url: '/destinations' },
  { name: 'Blogs', url: '/blogs' },
  { name: 'Destination Wedding', url: '/wedding' },
];

const socialIcons = [
  { name: 'facebook', icon: 'f', url: 'https://facebook.com/indiatravel' }, // Replace 'f' with actual icon component
  { name: 'twitter', icon: 'x', url: 'https://twitter.com/indiatravel' },
  { name: 'linkedin', icon: 'in', url: 'https://linkedin.com/company/indiatravel' },
  { name: 'instagram', icon: 'instagram', url: 'https://instagram.com/indiatravel' },
  { name: 'youtube', icon: 'youtube', url: 'https://youtube.com/indiatravel' },
];

const legalLinks = [
  { name: 'Disclaimer', url: '/disclaimer' },
  { name: 'Network Website', url: '/network-website' },
  { name: 'Travel Tips', url: '/travel-tips' },
];

const Footer = () => {
  return (
    // The main container with the dark background color
    <footer className="footer-container">
      <div className="footer-content-wrapper">
        
        {/* === Top Section: Four Columns Layout === */}
        <div className="footer-grid">
          
          {/* 1. Company Info & Socials */}
          <div className="footer-column info-column">
            {/* Logo and Tagline */}
            <div className="logo-section">
              {/* You should replace the <img> tag with your actual logo component or image */}
              <div className="footer-logo">
                {/*  */}
              </div>
              <p className="tagline">Your Virtual Passage to India...</p>
            </div>
            
            <p className="company-description">
              IndiaTravel is a gateway of information and services for travelers who want to get to know India a little bit better
            </p>
            
            {/* Social Icons */}
            <div className="social-links">
              {socialIcons.map((item) => (
                <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="social-icon">
                  {/* NOTE: Use your actual icon component here, e.g., <Fa{item.icon} /> */}
                  {item.icon} 
                </a>
              ))}
            </div>
          </div>
          
          {/* 2. Useful Links */}
          <div className="footer-column links-column">
            <h3 className="column-title">Useful Links</h3>
            <ul className="footer-links-list">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 3. Contact Info */}
          <div className="footer-column contact-column">
            <h3 className="column-title">Contact</h3>
            <p className="contact-item">
              <span className="icon">✈</span> New Delhi, India
            </p>
            <p className="contact-item">
              <span className="icon">✉</span> info@indiatravel.com
            </p>

            <h3 className="column-title whatsapp-title">WhatsApp</h3>
            <p className="contact-item">
              <span className="icon">✆</span> +91 98210 88817
            </p>
          </div>

          {/* 4. Send Query Button (Placeholder column structure) */}
          <div className="footer-column query-column">
             {/* The button is positioned outside the main columns in the design, 
                 so we'll position it below or align it visually with this space */}
          </div>
        </div> {/* End of footer-grid */}

        {/* --- Query Button (Visually centered beneath the Useful Links section) --- */}
        <div className="send-query-container">
            <button className="send-query-button">
                Send Query
            </button>
        </div>

        {/* === Bottom Section: Separator and Legal === */}
        <div className="footer-bottom">
          <hr className="footer-separator" />
          
          <div className="footer-legal-bar">
            {/* Left side: Legal Links */}
            <div className="legal-links">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a href={link.url} className="legal-link">{link.name}</a>
                  {/* Add a separator (like the small space in the image) */}
                  {index < legalLinks.length - 1 && <span className="separator"> | </span>}
                </React.Fragment>
              ))}
            </div>
            
            {/* Right side: Copyright */}
            <p className="copyright-text">
              Copyright © 2025 India Travel. All Rights Reserved.
            </p>
          </div>
        </div>

      </div> {/* End of footer-content-wrapper */}
    </footer>
  );
};

export default Footer;
