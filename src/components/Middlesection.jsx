import React from 'react'

const Middlesection = () => {
  return (
   <div style={{ padding: "50px 20px", backgroundColor: "#f9fdfaff", color: "white", textAlign: "center" }}>
    
  {/* Small Tagline */}
  <div 
    style={{
      display: "inline-block",
      backgroundColor: "lightgray",
      color: "#3e8b34ff",
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: 500,
      marginBottom: "20px",
      borderRadius: "5px"
    }}
  >
    About Company
  </div>

  {/* Main Heading */}
  <h1 style={{ fontSize: "48px", fontWeight: 700,color:"black", lineHeight: 1.2, marginBottom: "20px" }}>
    We Are Most Funning <br /> Company About Travel & <br />Tours
  </h1>

  {/* Description Paragraph */}
  <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "18px", lineHeight: 1.6, color: "black" }}>Explore India<br /> neque fermentum malesuada scelerisque massa lacus. Ultrices eget leo cras <br /> odio blandit rhoncus eu. At feugiat condimentum massa integer iaculis sit<br /> sit. Sagittis vitae quis sed vitae congue.
  </p>
</div>

  )
}

export default Middlesection