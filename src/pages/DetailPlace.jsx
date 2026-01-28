// // // // import axios from 'axios';
// // // // import React from 'react'
// // // // import { useParams } from 'react-router-dom';
// // // // const DetailPlace = () => {
// // // //     const {id}= useParams();
// // // //     const [place,setPlace]=React.useState(null);

// // // //     React.useEffect(()=>{
// // // //         axios.get(`https://kerala-i5mr.onrender.com/api/places/${id}`)
// // // //         .then(res=>setPlace(res.data))
// // // //         .catch(err=>console.log(err));

// // // //         // Fetch place details using placeId
// // // //         // Example: axios.get(`/api/places/${placeId}`).then(res=>setPlace(res.data))
// // // //     },[id]);

// // // //   return (
// // // //     <div>DetailPlace</div>
// // // //   )
// // // // }

// // // // export default DetailPlace


// // // // import axios from "axios";
// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams } from "react-router-dom";

// // // // const DetailPlace = () => {
// // // //     const { id } = useParams();
// // // //    // get id from URL
// // // //   const [place, setPlace] = useState(null);

// // // //     useEffect(() => {
// // // //         axios
// // // //           .get(`https://kerala-i5mr.onrender.com/api/places/${id}`)
// // // //           .then((res) => setPlace(res.data))
         

// // // //           .catch((err) => console.log(err));
// // // //       }, [id]);
// // // //   if (!place) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
// // // //    console.log(place)

// // // //   return (
// // // //     // <div style={{ padding: "20px" }}>
// // // //     //   <h1>{place.name}</h1>

// // // //     //   <img
// // // //     //     src={place.image}
// // // //     //     alt={place.name}
// // // //     //     style={{
// // // //     //       width: "100%",
// // // //     //       maxHeight: "400px",
// // // //     //       objectFit: "cover",
// // // //     //       borderRadius: "10px",
// // // //     //     }}
// // // //     //   />

// // // //     //   <h3 style={{ marginTop: "20px" }}>District: {place.district}</h3>

// // // //     //   <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
// // // //     //     {place.description}
// // // //     //   </p>
// // // //     // </div>
// // // //     <div style={{ padding: "20px" }}>
// // // //         {place.map((p) => (
// // // //             <div key={p._id} style={{ marginBottom: "40px" }}>
// // // //         <h1>{p.name}</h1>
// // // //         <img
// // // //           src={p.imageUrl}
// // // //           alt={p.name}
// // // //             style={{
// // // //                 width: "100%",
// // // //                 maxHeight: "400px",
// // // //                 objectFit: "cover",
// // // //                 borderRadius: "10px",
// // // //             }}
// // // //           />
// // // //             </div>
// // // //         ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DetailPlace;

// // // import axios from "axios";
// // // import React, { useEffect, useState } from "react";
// // // import { useParams } from "react-router-dom";

// // // const DetailPlace = () => {
// // //   const { id } = useParams();
// // //   console.log(id);
  
// // //   const [place, setPlace] = useState(null);

// // //   useEffect(() => {
// // //     axios
// // //       .get(`https://kerala-i5mr.onrender.com/api/places`)

// // //       .then((res) => setPlace(res.data))
      
// // //       .catch((err) => console.log(err));
// // //   }, [id]);
// // //   console.log(place);

// // //   if (!place) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

// // //   return (
// // //     <div style={{ padding: "20px" }}>
// // //       {place.map((p) => (
// // //         <div key={p._id} style={{ marginBottom: "40px" }}>
// // //           <h1>{p.name}</h1>
// // //           <img
// // //             src={p.imageUrl}
// // //             alt={p.name}
// // //             style={{
// // //               width: "100%",
// // //               maxHeight: "400px",
// // //               objectFit: "cover",
// // //               borderRadius: "10px",
// // //             }}
// // //           />
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default DetailPlace;



// // import axios from "axios";
// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";

// // const DetailPlace = () => {
// //   const { id } = useParams(); // get the place ID from the URL
// //   const [place, setPlace] = useState(null);

// //   useEffect(() => {
// //     axios
// //       .get(`https://kerala-i5mr.onrender.com/api/places/${id}`) // fetch single place by ID
// //       .then((res) => setPlace(res.data))
// //       .catch((err) => console.log(err));
// //   }, [id]);

// //   if (!place) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h1>{place.name}</h1>

// //       <img
// //         src={place.imageUrl}
// //         alt={place.name}
// //         style={{
// //           width: "100%",
// //           maxHeight: "400px",
// //           objectFit: "cover",
// //           borderRadius: "10px",
// //         }}
// //       />

// //       <h3 style={{ marginTop: "20px" }}>District: {place.district}</h3>
// //       <p style={{ fontSize: "18px", lineHeight: "1.5" }}>{place.detailedDescription}</p>
// //       <p><strong>Category:</strong> {place.category}</p>
// //       <p><strong>Best Time to Visit:</strong> {place.bestTime}</p>
// //       <a href={place.mapLink} target="_blank" rel="noreferrer">
// //         View on Map
// //       </a>
// //     </div>
// //   );
// // };

// // export default DetailPlace;




// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";

// // const DetailPlace = () => {
// //   const { id } = useParams();
// //   const [place, setPlace] = useState(null);

// //   useEffect(() => {
// //     axios
// //       .get(`https://kerala-i5mr.onrender.com/api/places`)
      
// //       .then((res) => {
// //         const selected = res.data.find((p) => p._id === id);
// //         setPlace(selected);
// //       })
// //       .catch((err) => console.log(err));
// //   }, [id]);

// //   if (!place) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h1>{place.name}</h1>
// //       <img
// //         src={place.imageUrl}
// //         alt={place.name}
// //         style={{
// //           width: "100%",
// //           maxHeight: "400px",
// //           objectFit: "cover",
// //           borderRadius: "10px",
// //           marginBottom: "20px",
// //         }}
// //       />
// //       <h4>District: {place.district}</h4>
// //       <h5>Category: {place.category}</h5>
// //       <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
// //         {place.detailedDescription}
// //       </p>
// //       <p>
// //         Best Time to Visit: <strong>{place.bestTime}</strong>
// //       </p>
// //       <a href={place.mapLink} target="_blank" rel="noreferrer">
// //         View on Map
// //       </a>
// //     </div>
// //   );
// // };

// // export default DetailPlace;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const DetailPlace = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);

//   useEffect(() => {
//     axios
//       .get("https://kerala-i5mr.onrender.com/api/places")
//       .then((res) => {
//         const selected = res.data.find((p) => p._id === id);
//         setPlace(selected || null);
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   useEffect(() => {
//     window.scrollTo(0, 0); // scroll to top
//   }, [id]);

//   if (!place)
//     return (
//       <h2 style={{ textAlign: "center", marginTop: "50px" }}>
//         Loading or Place not found...
//       </h2>
//     );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>{place.name}</h1>
//       <img
//         src={place.imageUrl}
//         alt={place.name}
//         style={{
//           width: "100%",
//           maxHeight: "400px",
//           objectFit: "cover",
//           borderRadius: "10px",
//           marginBottom: "20px",
//         }}
//       />
//       <h4>District: {place.district}</h4>
//       <h5>Category: {place.category}</h5>
//       <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
//         {place.detailedDescription}
//       </p>
//       <p>
//         Best Time to Visit: <strong>{place.bestTime}</strong>
//       </p>
//       <a href={place.mapLink} target="_blank" rel="noreferrer">
//         View on Map
//       </a>
//     </div>
//   );
// };

// export default DetailPlace;



// new disign page 

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPlace = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    axios
      .get("https://kerala-i5mr.onrender.com/api/places")
      .then((res) => {
        console.log(res.data.places);
        
        const selected = res.data?.places?.find((p) => p._id === id);
        setPlace(selected || null);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  console.log(place);

  if (!place)
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px", color: "#4caf50" }}>
        ⏳ Loading place details...
      </h2>
    );

  return (
    <div
      style={{
        padding: "25px",
        maxWidth: "1300px",
        margin: "auto",
        animation: "fadeIn 0.7s ease",
      }}
    >
      {/* HERO SECTION */}
      <div
        style={{
          position: "relative",
          borderRadius: "25px",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
          marginBottom: "40px",
        }}
      >
        <img
          src={place.imageUrl}
          alt={place.name}
          style={{
            width: "100%",
            height: "550px",
            objectFit: "cover",
            filter: "brightness(0.85)",
          }}
        />

        {/* GRADIENT OVERLAY */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "200px",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
          }}
        />

        {/* TITLE */}
        <h1
          style={{
            position: "absolute",
            bottom: "30px",
            left: "40px",
            color: "white",
            fontSize: "3.5rem",
            fontWeight: "900",
            textShadow: "0 4px 15px rgba(0,0,0,0.7)",
          }}
        >
          {place.name}
        </h1>

        {/* DISTRICT BADGE */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background:
              "rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "20px",
            fontWeight: "600",
            boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          📍 {place.district}
        </div>
      </div>

      {/* CONTENT GRID */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE – DESCRIPTION */}
        <div
          style={{
            flex: "3 1 65%",
            background: "white",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "800",
              marginBottom: "20px",
              background: "linear-gradient(to right, #4caf50, #1b5e20)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            🌿 Overview
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              fontSize: "1.15rem",
              color: "#444",
            }}
          >
            {place.detailedDescription ||
              "No detailed description available for this place."}
          </p>

          {/* MAP BUTTON */}
          <a
            href={place.mapLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "25px",
              padding: "14px 30px",
              background: "linear-gradient(135deg, #4caf50, #2e7d32)",
              color: "white",
              borderRadius: "40px",
              fontSize: "1rem",
              fontWeight: "700",
              textDecoration: "none",
              letterSpacing: "1px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transition: "0.3s",
            }}
          >
            🗺️ View on Map
          </a>
        </div>

        {/* RIGHT SIDE – INFO BOXES */}
        <div
          style={{
            flex: "1 1 30%",
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(10px)",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "1.7rem",
              fontWeight: "800",
              marginBottom: "25px",
              color: "#1b5e20",
            }}
          >
            ⚡ Quick Facts
          </h2>

          {/* CATEGORY */}
          <div
            style={{
              background: "#e8f5e9",
              padding: "15px",
              borderLeft: "5px solid #4caf50",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <h4 style={{ margin: 0, color: "#2e7d32" }}>Category</h4>
            <p style={{ margin: "6px 0", fontSize: "1.05rem" }}>
              ✨ {place.category}
            </p>
          </div>

          {/* BEST TIME */}
          <div
            style={{
              background: "#e8f5e9",
              padding: "15px",
              borderLeft: "5px solid #4caf50",
              borderRadius: "10px",
            }}
          >
            <h4 style={{ margin: 0, color: "#2e7d32" }}>Best Time to Visit</h4>
            <p style={{ margin: "6px 0", fontSize: "1.05rem" }}>
              ☀️ {place.bestTime || "Year-round"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPlace;


