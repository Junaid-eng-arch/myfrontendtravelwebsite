// import React from 'react';
// import tiger from '../images/tiger.jpg';
// import { Link } from 'react-router-dom';

// const Wild = () => {
//   const pageStyle = {
//     width: '100%',
//     height: '100vh',
//     backgroundImage: `url(${tiger})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     display: 'flex',
//     flexDirection: 'column',    // 🔥 to place headline+button under each other
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'white',
//     textShadow: '2px 2px 4px black'
//   };

//   return (
//     <div style={pageStyle}>
//       <h1
//         style={{
//           fontSize: '55px',
//           fontWeight: '900',
//           marginBottom: '20px',
//           textAlign: 'center',
//         }}
//       >
//         Amazing Wildlife Adventure
//       </h1>

//       {/* <button  
//         style={{
//           backgroundColor: '#4caf50',
//           color: 'white',
//           padding: '12px 28px',
//           border: 'none',
//           borderRadius: '10px',
//           fontSize: '18px',
//           fontWeight: '700',
//           cursor: 'pointer',
//         }}
//       >
//         Explore
//       </button> */}
//        <Link to="/wildtourism"><button style={{backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px'}}>
//   Click Me
// </button></Link>
//     </div>
//   );
// };

// export default Wild;


import React from 'react';
import tiger from '../images/tiger.jpg';
import { Link } from 'react-router-dom';

const Wild = () => {
  const pageStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${tiger})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px 4px black'
  };

  return (
    <div style={pageStyle}>
      {/* Title */}
      <h1
        style={{
          fontSize: '60px',
          fontWeight: '900',
          marginBottom: '20px',
          textAlign: 'center',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
      >
        Amazing Wildlife Adventure
      </h1>

      {/* New Stylish Button */}
      <Link to="/wildtourism" style={{ textDecoration: 'none' }}>
        <button
          style={{
            padding: '14px 40px',
            fontSize: '20px',
            fontWeight: '700',
            borderRadius: '50px',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
          }}
        >
          Explore Now  
          <span style={{ fontSize: '22px' }}>➜</span>
        </button>
      </Link>
    </div>
  );
};

export default Wild;

