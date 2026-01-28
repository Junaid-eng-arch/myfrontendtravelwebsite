// // import React, { useState } from "react";
// // import axios from "axios";

// // const TaxiBookingForm = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     phone: "",
// //     whatsapp: "",
// //     email: "",
// //     passengers: "",
// //     pickupLocation: "",
// //     dropLocation: "",
// //     pickupDate: "",
// //     pickupTime: "",
// //     tripType: "",
// //     vehicleType: "",
// //     luggage: "",
// //     childSeat: "No",
// //     airportAssist: "No",
// //     notes: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post(
// //         // "https://kerala-i5mr.onrender.com/api/taxi-bookings",
// //         "https://kerala-i5mr.onrender.com/api/taxi-bookings",
// //         console.log("Submitting form data:", formData),
// //         formData,
// //         {
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );

// //       console.log("API Response:", response.data);
// //       alert("Taxi booking submitted ✅");

// //     } catch (error) {
// //       console.error("Axios Error:", error);
// //       alert("Booking failed ❌");
// //     }
// //   };
// //   console.log("Current form data:", formData);

// //   return (
// //     <div style={styles.wrapper}>
// //       <form style={styles.form} onSubmit={handleSubmit}>
// //         <h2 style={styles.title}>Taxi Booking</h2>

// //         <input style={styles.input} name="fullName" placeholder="Full Name" onChange={handleChange} required />
// //         <input style={styles.input} name="phone" placeholder="Phone" onChange={handleChange} required />
// //         <input style={styles.input} name="whatsapp" placeholder="WhatsApp" onChange={handleChange} />
// //         <input style={styles.input} type="email" name="email" placeholder="Email" onChange={handleChange} />

// //         <input style={styles.input} type="number" name="passengers" placeholder="Passengers" onChange={handleChange} />

// //         <input style={styles.input} name="pickupLocation" placeholder="Pickup Location" onChange={handleChange} required />
// //         <input style={styles.input} name="dropLocation" placeholder="Drop Location" onChange={handleChange} required />

// //         <div style={styles.row}>
// //           <input style={styles.input} type="date" name="pickupDate" onChange={handleChange} required />
// //           <input style={styles.input} type="time" name="pickupTime" onChange={handleChange} required />
// //         </div>

// //         <select style={styles.input} name="tripType" onChange={handleChange}>
// //           <option value="">Trip Type</option>
// //           <option value="One Way">One Way</option>
// //           <option value="Round Trip">Round Trip</option>
// //         </select>

// //         <select style={styles.input} name="vehicleType" onChange={handleChange}>
// //           <option value="">Vehicle Type</option>
// //           <option value="Sedan">Sedan</option>
// //           <option value="SUV">SUV</option>
// //           <option value="Innova">Innova</option>
// //         </select>

// //         <input style={styles.input} name="luggage" placeholder="Luggage" onChange={handleChange} />

// //         <select style={styles.input} name="childSeat" onChange={handleChange}>
// //           <option value="No">Child Seat - No</option>
// //           <option value="Yes">Child Seat - Yes</option>
// //         </select>

// //         <select style={styles.input} name="airportAssist" onChange={handleChange}>
// //           <option value="No">Airport Assist - No</option>
// //           <option value="Yes">Airport Assist - Yes</option>
// //         </select>

// //         <textarea
// //           style={{ ...styles.input, height: "80px" }}
// //           name="notes"
// //           placeholder="Notes"
// //           onChange={handleChange}
// //         />

// //         <button style={styles.button} type="submit">
// //           Submit Booking
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // const styles = {
// //   wrapper: {
// //     minHeight: "100vh",
// //     background: "#f1f5f9",
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   form: {
// //     background: "#fff",
// //     padding: "25px",
// //     width: "100%",
// //     maxWidth: "500px",
// //     borderRadius: "10px",
// //     boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
// //   },
// //   title: {
// //     textAlign: "center",
// //     marginBottom: "15px",
// //   },
// //   input: {
// //     width: "100%",
// //     padding: "10px",
// //     marginBottom: "10px",
// //     borderRadius: "6px",
// //     border: "1px solid #cbd5e1",
// //   },
// //   row: {
// //     display: "flex",
// //     gap: "10px",
// //   },
// //   button: {
// //     width: "100%",
// //     padding: "12px",
// //     background: "#0f172a",
// //     color: "#fff",
// //     border: "none",
// //     borderRadius: "6px",
// //     fontSize: "16px",
// //     cursor: "pointer",
// //   },
// // };

// // export default TaxiBookingForm;



// // import React, { useState } from "react";
// // import axios from "axios";

// // const TaxiBookingForm = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     phone: "",
// //     whatsapp: "",
// //     email: "",
// //     passengers: "",
// //     pickupLocation: "",
// //     dropLocation: "",
// //     pickupDate: "",
// //     pickupTime: "",
// //     tripType: "",
// //     vehicleType: "",
// //     luggage: "",
// //     childSeat: "No",
// //     airportAssist: "No",
// //     notes: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // ✅ Check if required fields are filled
// //     if (!formData.tripType || !formData.vehicleType) {
// //       alert("Trip Type and Vehicle Type are required!");
// //       return;
// //     }

// //     try {
// //       console.log("Submitting form data:", formData);

// //       const response = await axios.post(
// //         "https://kerala-i5mr.onrender.com/api/taxi-bookings",
// //         formData,
// //         { headers: { "Content-Type": "application/json" } }
// //       );

// //       console.log("API Response:", response.data);
// //       alert("Taxi booking submitted ✅");

// //       // Reset form
// //       setFormData({
// //         fullName: "",
// //         phone: "",
// //         whatsapp: "",
// //         email: "",
// //         passengers: "",
// //         pickupLocation: "",
// //         dropLocation: "",
// //         pickupDate: "",
// //         pickupTime: "",
// //         tripType: "",
// //         vehicleType: "",
// //         luggage: "",
// //         childSeat: "No",
// //         airportAssist: "No",
// //         notes: "",
// //       });

// //     } catch (error) {
// //       console.error("Axios Error:", error.response?.data || error.message);
// //       alert("Failed to submit booking ❌");
// //     }
// //   };

// //   return (
// //     <div style={styles.wrapper}>
// //       <form style={styles.form} onSubmit={handleSubmit}>
// //         <h2 style={styles.title}>Taxi Booking</h2>

// //         <input style={styles.input} name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
// //         <input style={styles.input} name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
// //         <input style={styles.input} name="whatsapp" placeholder="WhatsApp" value={formData.whatsapp} onChange={handleChange} />
// //         <input style={styles.input} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

// //         <input style={styles.input} type="number" name="passengers" placeholder="Passengers" value={formData.passengers} onChange={handleChange} />

// //         <input style={styles.input} name="pickupLocation" placeholder="Pickup Location" value={formData.pickupLocation} onChange={handleChange} required />
// //         <input style={styles.input} name="dropLocation" placeholder="Drop Location" value={formData.dropLocation} onChange={handleChange} required />

// //         <div style={styles.row}>
// //           <input style={styles.input} type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} required />
// //           <input style={styles.input} type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} required />
// //         </div>

// //         <select style={styles.input} name="tripType" value={formData.tripType} onChange={handleChange} required>
// //           <option value="">-- Select Trip Type --</option>
// //           <option value="One Way">One Way</option>
// //           <option value="Round Trip">Round Trip</option>
// //         </select>

// //         <select style={styles.input} name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
// //           <option value="">-- Select Vehicle Type --</option>
// //           <option value="Sedan">Sedan</option>
// //           <option value="SUV">SUV</option>
// //           <option value="Innova">Innova</option>
// //         </select>

// //         <input style={styles.input} name="luggage" placeholder="Luggage" value={formData.luggage} onChange={handleChange} />

// //         <select style={styles.input} name="childSeat" value={formData.childSeat} onChange={handleChange}>
// //           <option value="No">Child Seat - No</option>
// //           <option value="Yes">Child Seat - Yes</option>
// //         </select>

// //         <select style={styles.input} name="airportAssist" value={formData.airportAssist} onChange={handleChange}>
// //           <option value="No">Airport Assist - No</option>
// //           <option value="Yes">Airport Assist - Yes</option>
// //         </select>

// //         <textarea style={{ ...styles.input, height: "80px" }} name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} />

// //         <button style={styles.button} type="submit">Submit Booking</button>
// //       </form>
// //     </div>
// //   );
// // };

// // const styles = {
// //   wrapper: { minHeight: "100vh", background: "#f1f5f9", display: "flex", justifyContent: "center", alignItems: "center" },
// //   form: { background: "#fff", padding: "25px", width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: "0 8px 20px rgba(0,0,0,0.1)" },
// //   title: { textAlign: "center", marginBottom: "15px" },
// //   input: { width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px", border: "1px solid #cbd5e1" },
// //   row: { display: "flex", gap: "10px" },
// //   button: { width: "100%", padding: "12px", background: "#0f172a", color: "#fff", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer" },
// // };

// // export default TaxiBookingForm;



// import React, { useState } from "react";
// import axios from "axios";
// import bgImage from "../images/taxi.jpg"; // Replace with your background image path

// const TaxiBookingForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     whatsapp: "",
//     email: "",
//     passengers: "",
//     pickupLocation: "",
//     dropLocation: "",
//     pickupDate: "",
//     pickupTime: "",
//     tripType: "",
//     vehicleType: "",
//     luggage: "",
//     childSeat: "No",
//     airportAssist: "No",
//     notes: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Submitting form data:", formData);
//       const response = await axios.post(
//         "https://kerala-i5mr.onrender.com/api/taxi-bookings",
//         formData,
//         { headers: { "Content-Type": "application/json" } }
//       );
//       console.log("API Response:", response.data);
//       alert("Taxi booking submitted ✅");
//       // Reset form
//       setFormData({
//         fullName: "",
//         phone: "",
//         whatsapp: "",
//         email: "",
//         passengers: "",
//         pickupLocation: "",
//         dropLocation: "",
//         pickupDate: "",
//         pickupTime: "",
//         tripType: "",
//         vehicleType: "",
//         luggage: "",
//         childSeat: "No",
//         airportAssist: "No",
//         notes: "",
//       });
//     } catch (error) {
//       console.error("Axios Error:", error.response?.data || error.message);
//       alert("Failed to submit booking ❌");
//     }
//   };

//   const styles = {
//      page: {
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: "20px",
//       backgroundImage: `url(${bgImage})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     },
//     formContainer: {
//       background: "rgba(255,255,255,0.95)",
//       padding: "30px",
//       borderRadius: "15px",
//       boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
//       maxWidth: "850px",
//       width: "100%",
//     },
//     title: {
//       textAlign: "center",
//       marginBottom: "25px",
//       color: "#0f172a",
//       fontWeight: "600",
//       fontSize: "28px",
//     },
//     row: { display: "flex", gap: "20px", flexWrap: "wrap" },
//     column: { flex: "1", minWidth: "250px", display: "flex", flexDirection: "column" },
//     input: {
//       width: "100%",
//       padding: "12px 15px",
//       marginBottom: "12px",
//       borderRadius: "10px",
//       border: "1px solid #cbd5e1",
//       boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
//       fontSize: "15px",
//       transition: "all 0.3s ease",
//       outline: "none",
//     },
//     inputFocus: {
//       borderColor: "#007bff",
//       boxShadow: "0 0 5px rgba(0,123,255,0.5)",
//     },
//     textarea: {
//       width: "100%",
//       padding: "12px 15px",
//       marginBottom: "12px",
//       borderRadius: "10px",
//       border: "1px solid #cbd5e1",
//       boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
//       fontSize: "15px",
//       outline: "none",
//       minHeight: "80px",
//       transition: "all 0.3s ease",
//     },
//     button: {
//       width: "100%",
//       padding: "14px",
//       background: "#007bff",
//       color: "#fff",
//       border: "none",
//       borderRadius: "10px",
//       fontSize: "16px",
//       cursor: "pointer",
//       fontWeight: "600",
//       transition: "all 0.3s ease",
//     },
//     buttonHover: {
//       background: "#0056b3",
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <form style={styles.formContainer} onSubmit={handleSubmit}>
//         <h2
//   style={{
//     textAlign: "center",
//     marginBottom: "30px",
//     color: "#0f172a",
//     fontWeight: "700",
//     fontSize: "32px",
//     letterSpacing: "1px",
//     textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   }}
// >
//   Taxi Booking
// </h2>

//         <div style={styles.row}>
//           {/* Left Column */}
//           <div style={styles.column}>
//             <input style={styles.input} name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
//             <input style={styles.input} name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
//             <input style={styles.input} name="whatsapp" placeholder="WhatsApp" value={formData.whatsapp} onChange={handleChange} />
//             <input style={styles.input} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//             <input style={styles.input} type="number" name="passengers" placeholder="Passengers" value={formData.passengers} onChange={handleChange} />
//             <input style={styles.input} name="pickupLocation" placeholder="Pickup Location" value={formData.pickupLocation} onChange={handleChange} required />
//              <select style={styles.input} name="airportAssist" value={formData.airportAssist} onChange={handleChange}>
//               <option value="No">Airport Assist - No</option>
//               <option value="Yes">Airport Assist - Yes</option>
//             </select>
//             <select style={styles.input} name="airportAssist" value={formData.airportAssist} onChange={handleChange}>
//               <option value="No">Airport Assist - No</option>
//               <option value="Yes">Airport Assist - Yes</option>
//             </select>
//           </div>

//           {/* Right Column */}
//           <div style={styles.column}>
//             <input style={styles.input} name="dropLocation" placeholder="Drop Location" value={formData.dropLocation} onChange={handleChange} required />
//             <input style={styles.input} type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} required />
//             <input style={styles.input} type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} required />
//             <select style={styles.input} name="tripType" value={formData.tripType} onChange={handleChange} required>
//               <option value="">-- Select Trip Type --</option>
//               <option value="One Way">One Way</option>
//               <option value="Round Trip">Round Trip</option>
//             </select>
//             <select style={styles.input} name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
//               <option value="">-- Select Vehicle Type --</option>
//               <option value="Sedan">Sedan</option>
//               <option value="SUV">SUV</option>
//               <option value="Innova">Innova</option>
//             </select>
//             <input style={styles.input} name="luggage" placeholder="Luggage" value={formData.luggage} onChange={handleChange} />
//             <select style={styles.input} name="childSeat" value={formData.childSeat} onChange={handleChange}>
//               <option value="No">Child Seat - No</option>
//               <option value="Yes">Child Seat - Yes</option>
//             </select>
            
//           </div>
//         </div>

//         <textarea style={styles.textarea} name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} />

//         <button style={styles.button} type="submit">Submit Booking</button>
//       </form>
//     </div>
//   );
// };

// export default TaxiBookingForm;





// import React, { useState } from "react";
// import axios from "axios";
// import bgImage from "../images/taxi.jpg";

// const TaxiBookingForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     whatsapp: "",
//     email: "",
//     passengers: "",
//     pickupLocation: "",
//     dropLocation: "",
//     pickupDate: "",
//     pickupTime: "",
//     tripType: "",
//     vehicleType: "",
//     luggage: "",
//     childSeat: "No",
//     airportAssist: "No",
//     notes: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("Submitting form data:", formData);
//       const response = await axios.post(
//         "https://kerala-i5mr.onrender.com/api/taxi-bookings",
//         formData,
//         { headers: { "Content-Type": "application/json" } }
//       );
//       console.log("API Response:", response.data);
//       alert("Taxi booking submitted ✅");
//       // Reset form
//       setFormData({
//         fullName: "",
//         phone: "",
//         whatsapp: "",
//         email: "",
//         passengers: "",
//         pickupLocation: "",
//         dropLocation: "",
//         pickupDate: "",
//         pickupTime: "",
//         tripType: "",
//         vehicleType: "",
//         luggage: "",
//         childSeat: "No",
//         airportAssist: "No",
//         notes: "",
//       });
//     } catch (error) {
//       console.error("Axios Error:", error.response?.data || error.message);
//       alert("Failed to submit booking ❌");
//     }
//   };

//   const styles = {
//     page: {
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: "40px 20px",
//       backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url(${bgImage})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundAttachment: "fixed",
//       fontFamily: "'Inter', 'Segoe UI', sans-serif",
//     },
//     formContainer: {
//       background: "rgba(255, 255, 255, 0.98)",
//       padding: "45px 40px",
//       borderRadius: "24px",
//       boxShadow: "0 25px 60px rgba(0, 0, 0, 0.35)",
//       maxWidth: "900px",
//       width: "100%",
//       backdropFilter: "blur(10px)",
//       border: "1px solid rgba(255, 255, 255, 0.3)",
//     },
//     title: {
//       textAlign: "center",
//       marginBottom: "40px",
//       color: "#0f172a",
//       fontWeight: "800",
//       fontSize: "38px",
//       letterSpacing: "-0.5px",
//       background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       textShadow: "none",
//     },
//     row: {
//       display: "flex",
//       gap: "25px",
//       flexWrap: "wrap",
//       marginBottom: "15px",
//     },
//     column: {
//       flex: "1",
//       minWidth: "280px",
//       display: "flex",
//       flexDirection: "column",
//     },
//     input: {
//       width: "100%",
//       padding: "14px 18px",
//       marginBottom: "18px",
//       borderRadius: "12px",
//       border: "2px solid #e2e8f0",
//       boxShadow: "none",
//       fontSize: "15px",
//       transition: "all 0.3s ease",
//       outline: "none",
//       backgroundColor: "#f8fafc",
//       color: "#0f172a",
//       fontWeight: "500",
//     },
//     inputFocus: {
//       borderColor: "#10b981",
//       backgroundColor: "#ffffff",
//       boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.1)",
//     },
//     textarea: {
//       width: "100%",
//       padding: "14px 18px",
//       marginBottom: "25px",
//       borderRadius: "12px",
//       border: "2px solid #e2e8f0",
//       fontSize: "15px",
//       outline: "none",
//       minHeight: "100px",
//       transition: "all 0.3s ease",
//       backgroundColor: "#f8fafc",
//       color: "#0f172a",
//       fontWeight: "500",
//       resize: "vertical",
//     },
//     button: {
//       width: "100%",
//       padding: "16px",
//       background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
//       color: "#fff",
//       border: "none",
//       borderRadius: "12px",
//       fontSize: "17px",
//       cursor: "pointer",
//       fontWeight: "700",
//       transition: "all 0.3s ease",
//       boxShadow: "0 6px 20px rgba(16, 185, 129, 0.4)",
//       letterSpacing: "0.5px",
//     },
//     buttonHover: {
//       background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
//       transform: "translateY(-2px)",
//       boxShadow: "0 8px 25px rgba(16, 185, 129, 0.5)",
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <form style={styles.formContainer} onSubmit={handleSubmit}>
//         <h2 style={styles.title}>
//           🚖 Taxi Booking
//         </h2>

//         <div style={styles.row}>
//           {/* Left Column */}
//           <div style={styles.column}>
//             <input 
//               style={styles.input} 
//               name="fullName" 
//               placeholder="Full Name *" 
//               value={formData.fullName} 
//               onChange={handleChange} 
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//               required 
//             />
//             <input 
//               style={styles.input} 
//               name="phone" 
//               placeholder="Phone Number *" 
//               value={formData.phone} 
//               onChange={handleChange}
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//               required 
//             />
//             <input 
//               style={styles.input} 
//               name="whatsapp" 
//               placeholder="WhatsApp Number" 
//               value={formData.whatsapp} 
//               onChange={handleChange}
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//             />
//             <input 
//               style={styles.input} 
//               type="email" 
//               name="email" 
//               placeholder="Email Address" 
//               value={formData.email} 
//               onChange={handleChange}
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//             />
//             <input 
//               style={styles.input} 
//               type="number" 
//               name="passengers" 
//               placeholder="Number of Passengers" 
//               value={formData.passengers} 
//               onChange={handleChange}
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//             />
//             <input 
//               style={styles.input} 
//               name="pickupLocation" 
//               placeholder="Pickup Location *" 
//               value={formData.pickupLocation} 
//               onChange={handleChange}
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//               required 
//             />
//             <select 
//               style={styles.input} 
//               name="childSeat" 
//               value={formData.childSeat} 
//               onChange={handleChange}
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//             >
//               <option value="No">Child Seat - No</option>
//               <option value="Yes">Child Seat - Yes</option>
//             </select>
//           </div>

//           {/* Right Column */}
//           <div style={styles.column}>
//             <input 
//               style={styles.input} 
//               name="dropLocation" 
//               placeholder="Drop Location *" 
//               value={formData.dropLocation} 
//               onChange={handleChange}
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//               required 
//             />
//             <input 
//               style={styles.input} 
//               type="date" 
//               name="pickupDate" 
//               value={formData.pickupDate} 
//               onChange={handleChange}
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//               required 
//             />
//             <input 
//               style={styles.input} 
//               type="time" 
//               name="pickupTime" 
//               value={formData.pickupTime} 
//               onChange={handleChange}
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//               required 
//             />
//             <select 
//               style={styles.input} 
//               name="tripType" 
//               value={formData.tripType} 
//               onChange={handleChange}
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//               required
//             >
//               <option value="">-- Select Trip Type --</option>
//               <option value="One Way">One Way</option>
//               <option value="Round Trip">Round Trip</option>
//             </select>
//             <select 
//               style={styles.input} 
//               name="vehicleType" 
//               value={formData.vehicleType} 
//               onChange={handleChange}
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//               required
//             >
//               <option value="">-- Select Vehicle Type --</option>
//               <option value="Sedan">Sedan</option>
//               <option value="SUV">SUV</option>
//               <option value="Innova">Innova</option>
//             </select>
//             <input 
//               style={styles.input} 
//               name="luggage" 
//               placeholder="Luggage Details" 
//               value={formData.luggage} 
//               onChange={handleChange}
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//             />
//             <select 
//               style={styles.input} 
//               name="airportAssist" 
//               value={formData.airportAssist} 
//               onChange={handleChange}
//               onFocus={(e) => {
//                 e.target.style.borderColor = "#10b981";
//                 e.target.style.backgroundColor = "#ffffff";
//                 e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//               }}
//               onBlur={(e) => {
//                 e.target.style.borderColor = "#e2e8f0";
//                 e.target.style.backgroundColor = "#f8fafc";
//                 e.target.style.boxShadow = "none";
//               }}
//             >
//               <option value="No">Airport Assist - No</option>
//               <option value="Yes">Airport Assist - Yes</option>
//             </select>
//           </div>
//         </div>

//         <textarea 
//           style={styles.textarea} 
//           name="notes" 
//           placeholder="Additional Notes or Special Requests" 
//           value={formData.notes} 
//           onChange={handleChange}
//           onFocus={(e) => {
//             e.target.style.borderColor = "#10b981";
//             e.target.style.backgroundColor = "#ffffff";
//             e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//           }}
//           onBlur={(e) => {
//             e.target.style.borderColor = "#e2e8f0";
//             e.target.style.backgroundColor = "#f8fafc";
//             e.target.style.boxShadow = "none";
//           }}
//         />

//         <button 
//           style={styles.button} 
//           type="submit"
//           onMouseEnter={(e) => {
//             e.target.style.background = "linear-gradient(135deg, #059669 0%, #047857 100%)";
//             e.target.style.transform = "translateY(-2px)";
//             e.target.style.boxShadow = "0 8px 25px rgba(16, 185, 129, 0.5)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.background = "linear-gradient(135deg, #10b981 0%, #059669 100%)";
//             e.target.style.transform = "translateY(0)";
//             e.target.style.boxShadow = "0 6px 20px rgba(16, 185, 129, 0.4)";
//           }}
//         >
//           Submit Booking →
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TaxiBookingForm;



// import React, { useState } from "react";
// import axios from "axios";
// import bgImage from "../images/taxi.jpg";

// const TaxiBookingForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "", phone: "", whatsapp: "", email: "",
//     passengers: "", pickupLocation: "", dropLocation: "",
//     pickupDate: "", pickupTime: "", tripType: "",
//     vehicleType: "", luggage: "", childSeat: "No",
//     airportAssist: "No", notes: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "https://kerala-i5mr.onrender.com/api/taxi-bookings",
//         formData,
//         { headers: { "Content-Type": "application/json" } }
//       );
//       alert("Taxi booking submitted ✅");
//       setFormData({
//         fullName: "", phone: "", whatsapp: "", email: "",
//         passengers: "", pickupLocation: "", dropLocation: "",
//         pickupDate: "", pickupTime: "", tripType: "",
//         vehicleType: "", luggage: "", childSeat: "No",
//         airportAssist: "No", notes: "",
//       });
//     } catch (error) {
//       alert("Failed to submit booking ❌");
//     }
//   };




//   const styles = {
//     page: {
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: "20px 15px", // Reduced for mobile
//       backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url(${bgImage})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundAttachment: "fixed",
//       fontFamily: "'Inter', sans-serif",
//     },
//     formContainer: {
//       background: "rgba(255, 255, 255, 0.98)",
//       padding: "clamp(20px, 5vw, 45px)", // Fluid padding
//       borderRadius: "24px",
//       boxShadow: "0 25px 60px rgba(0, 0, 0, 0.35)",
//       maxWidth: "900px",
//       width: "100%",
//       backdropFilter: "blur(10px)",
//       border: "1px solid rgba(255, 255, 255, 0.3)",
//     },
//     title: {
//       textAlign: "center",
//       marginBottom: "30px",
//       color: "#0f172a",
//       fontWeight: "800",
//       fontSize: "clamp(24px, 6vw, 38px)", // Fluid title size
//       background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//     },
//     row: {
//       display: "flex",
//       gap: "15px", // Tighter gap for mobile
//       flexWrap: "wrap",
//       marginBottom: "5px",
//     },
//     column: {
//       flex: "1 1 250px", // Better flex behavior for stacking
//       display: "flex",
//       flexDirection: "column",
//     },
//     input: {
//       width: "100%",
//       padding: "12px 16px",
//       marginBottom: "15px",
//       borderRadius: "10px",
//       border: "2px solid #e2e8f0",
//       fontSize: "15px",
//       outline: "none",
//       backgroundColor: "#f8fafc",
//       color: "#0f172a",
//       fontWeight: "500",
//       transition: "0.3s",
//     },
//     textarea: {
//       width: "100%",
//       padding: "14px 18px",
//       marginBottom: "20px",
//       borderRadius: "12px",
//       border: "2px solid #e2e8f0",
//       fontSize: "15px",
//       outline: "none",
//       minHeight: "100px",
//       backgroundColor: "#f8fafc",
//       resize: "vertical",
//     },
//     button: {
//       width: "100%",
//       padding: "16px",
//       background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
//       color: "#fff",
//       border: "none",
//       borderRadius: "12px",
//       fontSize: "17px",
//       cursor: "pointer",
//       fontWeight: "700",
//       boxShadow: "0 6px 20px rgba(16, 185, 129, 0.4)",
//     },
//   };

//   // Helper for Focus Effect
//   const handleFocus = (e) => {
//     e.target.style.borderColor = "#10b981";
//     e.target.style.backgroundColor = "#ffffff";
//     e.target.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.1)";
//   };

//   const handleBlur = (e) => {
//     e.target.style.borderColor = "#e2e8f0";
//     e.target.style.backgroundColor = "#f8fafc";
//     e.target.style.boxShadow = "none";
//   };

//   return (
//     <div style={styles.page}>
//       <form style={styles.formContainer} onSubmit={handleSubmit}>
//         <h2 style={styles.title}>🚖 Taxi Booking</h2>

//         <div style={styles.row}>
//           <div style={styles.column}>
//             <input style={styles.input} name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
//             <input style={styles.input} name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
//             <input style={styles.input} name="whatsapp" placeholder="WhatsApp Number" value={formData.whatsapp} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
//             <input style={styles.input} type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
//             <input style={styles.input} type="number" name="passengers" placeholder="Passengers" value={formData.passengers} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
//             <input style={styles.input} name="pickupLocation" placeholder="Pickup Location *" value={formData.pickupLocation} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
//             <select style={styles.input} name="childSeat" value={formData.childSeat} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}>
//               <option value="No">Child Seat - No</option>
//               <option value="Yes">Child Seat - Yes</option>
//             </select>
//           </div>

//           <div style={styles.column}>
//             <input style={styles.input} name="dropLocation" placeholder="Drop Location *" value={formData.dropLocation} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
//             <input style={styles.input} type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
//             <input style={styles.input} type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
//             <select style={styles.input} name="tripType" value={formData.tripType} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required>
//               <option value="">-- Trip Type --</option>
//               <option value="One Way">One Way</option>
//               <option value="Round Trip">Round Trip</option>
//             </select>
//             <select style={styles.input} name="vehicleType" value={formData.vehicleType} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required>
//               <option value="">-- Vehicle Type --</option>
//               <option value="Sedan">Sedan</option>
//               <option value="SUV">SUV</option>
//               <option value="Innova">Innova</option>
//             </select>
//             <input style={styles.input} name="luggage" placeholder="Luggage Details" value={formData.luggage} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
//             <select style={styles.input} name="airportAssist" value={formData.airportAssist} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}>
//               <option value="No">Airport Assist - No</option>
//               <option value="Yes">Airport Assist - Yes</option>
//             </select>
//           </div>
//         </div>

//         <textarea style={styles.textarea} name="notes" placeholder="Special Requests" value={formData.notes} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />

//         <button 
//           style={styles.button} 
//           type="submit"
//           onMouseEnter={(e) => {
//             e.target.style.transform = "translateY(-2px)";
//             e.target.style.boxShadow = "0 8px 25px rgba(16, 185, 129, 0.5)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = "translateY(0)";
//             e.target.style.boxShadow = "0 6px 20px rgba(16, 185, 129, 0.4)";
//           }}
//         >
//           Submit Booking →
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TaxiBookingForm;


// import React, { useState } from "react";
// import axios from "axios";
// import bgImage from "../images/taxi.jpg";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const TaxiBooking = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     whatsapp: "",
//     email: "",
//     passengers: "",
//     pickupLocation: "",
//     dropLocation: "",
//     pickupDate: "",
//     pickupTime: "",
//     tripType: "",
//     vehicleType: "",
//     luggage: "",
//     childSeat: "No",
//     airportAssist: "No",
//     notes: "",
//   });

//  // 🔔 Save notification (FRONTEND ONLY)
//   const saveNotification = (message) => {
//     if (!user?.username) return;

//     const notifications =
//       JSON.parse(localStorage.getItem("notifications")) || [];

//     notifications.push({
//       id: Date.now(),
//       message,
//       username: user.username,
//       createdAt: new Date().toISOString(),
//     });

//     localStorage.setItem("notifications", JSON.stringify(notifications));
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formattedData = {
//       ...formData,
//       passengers: Number(formData.passengers),
//     };

//     try {
//       await axios.post(`${apiUrl}/api/taxi-bookings`, formattedData);

//       toast.success("Booking Request Submitted Successfully!", {
//         position: "top-center",
//       });

//       // ✅ notification
//       saveNotification("Taxi booking submitted successfully 🚕");

//       setFormData({
//         fullName: "",
//         phone: "",
//         whatsapp: "",
//         email: "",
//         passengers: "",
//         pickupLocation: "",
//         dropLocation: "",
//         pickupDate: "",
//         pickupTime: "",
//         tripType: "",
//         vehicleType: "",
//         luggage: "",
//         childSeat: "No",
//         airportAssist: "No",
//         notes: "",
//       });
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to Submit! Please try again.", {
//         position: "top-center",
//       });
//     }
//   };

//   // --- Styles ---
//   const styles = {
//     page: {
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: "20px",
//       backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       fontFamily: "'Inter', sans-serif",
//     },
//     formContainer: {
//       background: "rgba(255, 255, 255, 0.95)",
//       padding: "30px",
//       borderRadius: "20px",
//       maxWidth: "900px",
//       width: "100%",
//       boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
//     },
//     title: {
//       textAlign: "center",
//       fontSize: "2rem",
//       fontWeight: "800",
//       marginBottom: "25px",
//       background: "linear-gradient(135deg, #10b981, #059669)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//     },
//     row: { display: "flex", flexWrap: "wrap", gap: "15px" },
//     column: { flex: "1 1 250px", display: "flex", flexDirection: "column" },
//     input: {
//       width: "100%",
//       padding: "12px 15px",
//       marginBottom: "15px",
//       borderRadius: "8px",
//       border: "2px solid #e2e8f0",
//       fontSize: "15px",
//       outline: "none",
//       transition: "0.3s",
//     },
//     textarea: {
//       width: "100%",
//       padding: "14px 18px",
//       marginBottom: "15px",
//       borderRadius: "8px",
//       border: "2px solid #e2e8f0",
//       fontSize: "15px",
//       minHeight: "80px",
//       resize: "vertical",
//     },
//     button: {
//       width: "100%",
//       padding: "15px",
//       borderRadius: "10px",
//       border: "none",
//       fontSize: "16px",
//       fontWeight: "700",
//       color: "#fff",
//       background: "linear-gradient(135deg, #10b981, #059669)",
//       cursor: "pointer",
//     },
//   };

//   const handleFocus = (e) => {
//     e.target.style.borderColor = "#10b981";
//     e.target.style.backgroundColor = "#ffffff";
//     e.target.style.boxShadow = "0 0 5px rgba(16,185,129,0.3)";
//   };

//   const handleBlur = (e) => {
//     e.target.style.borderColor = "#e2e8f0";
//     e.target.style.backgroundColor = "#f8fafc";
//     e.target.style.boxShadow = "none";
//   };

//   return (
//     <div style={styles.page}>
//       <form style={styles.formContainer} onSubmit={handleSubmit}>
//         <h2 style={styles.title}>🚖 Taxi Booking</h2>

//         <div style={styles.row}>
//           <div style={styles.column}>
//             <input
//               style={styles.input}
//               name="fullName"
//               placeholder="Full Name *"
//               value={formData.fullName}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               required
//             />
//             <input
//               style={styles.input}
//               name="phone"
//               placeholder="Phone Number *"
//               value={formData.phone}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               required
//             />
//             <input
//               style={styles.input}
//               name="whatsapp"
//               placeholder="WhatsApp Number"
//               value={formData.whatsapp}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//             />
//             <input
//               style={styles.input}
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//             />
//             <input
//               style={styles.input}
//               type="number"
//               name="passengers"
//               placeholder="Passengers"
//               value={formData.passengers}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//             />
//             <input
//               style={styles.input}
//               name="pickupLocation"
//               placeholder="Pickup Location *"
//               value={formData.pickupLocation}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               required
//             />
//             <select
//               style={styles.input}
//               name="childSeat"
//               value={formData.childSeat}
//               onChange={handleChange}
//             >
//               <option value="No">Child Seat - No</option>
//               <option value="Yes">Child Seat - Yes</option>
//             </select>
//           </div>

//           <div style={styles.column}>
//             <input
//               style={styles.input}
//               name="dropLocation"
//               placeholder="Drop Location *"
//               value={formData.dropLocation}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               required
//             />
//             <input
//               style={styles.input}
//               type="date"
//               name="pickupDate"
//               value={formData.pickupDate}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               required
//             />
//             <input
//               style={styles.input}
//               type="time"
//               name="pickupTime"
//               value={formData.pickupTime}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//               required
//             />
//             <select
//               style={styles.input}
//               name="tripType"
//               value={formData.tripType}
//               onChange={handleChange}
//               required
//             >
//               <option value="">-- Trip Type --</option>
//               <option value="One Way">One Way</option>
//               <option value="Round Trip">Round Trip</option>
//             </select>
//             <select
//               style={styles.input}
//               name="vehicleType"
//               value={formData.vehicleType}
//               onChange={handleChange}
//               required
//             >
//               <option value="">-- Vehicle Type --</option>
//               <option value="Sedan">Sedan</option>
//               <option value="SUV">SUV</option>
//               <option value="Innova">Innova</option>
//             </select>
//             <input
//               style={styles.input}
//               name="luggage"
//               placeholder="Luggage Details"
//               value={formData.luggage}
//               onChange={handleChange}
//               onFocus={handleFocus}
//               onBlur={handleBlur}
//             />
//             <select
//               style={styles.input}
//               name="airportAssist"
//               value={formData.airportAssist}
//               onChange={handleChange}
//             >
//               <option value="No">Airport Assist - No</option>
//               <option value="Yes">Airport Assist - Yes</option>
//             </select>
//           </div>
//         </div>

//         <textarea
//           style={styles.textarea}
//           name="notes"
//           placeholder="Special Requests"
//           value={formData.notes}
//           onChange={handleChange}
//           onFocus={handleFocus}
//           onBlur={handleBlur}
//         />

//         <button style={styles.button} type="submit">
//           Submit Booking →
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TaxiBooking;

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const apiUrl = import.meta.env.VITE_API_URL; // make sure this is set

const TaxiBooking = () => {
  const user = JSON.parse(localStorage.getItem("user")); // logged-in user
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    whatsapp: "",
    email: "",
    passengers: "",
    pickupLocation: "",
    dropLocation: "",
    pickupDate: "",
    pickupTime: "",
    tripType: "",
    vehicleType: "",
    luggage: "",
    childSeat: "No",
    airportAssist: "No",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Optionally send booking data to your taxi API (if exists)
      // await axios.post(`${apiUrl}/taxi-bookings`, formData);

      // 2️⃣ Send notification to /notifications API
      if (user?.username) {
        await axios.post(`${apiUrl}/notifications`, {
          username: user.username,
          message: `Taxi booking submitted by ${formData.fullName} 🚕`,
        });
      }

      toast.success("Booking Request Submitted Successfully 🚕");

      // reset form
      setFormData({
        fullName: "",
        phone: "",
        whatsapp: "",
        email: "",
        passengers: "",
        pickupLocation: "",
        dropLocation: "",
        pickupDate: "",
        pickupTime: "",
        tripType: "",
        vehicleType: "",
        luggage: "",
        childSeat: "No",
        airportAssist: "No",
        notes: "",
      });
    } catch (error) {
      console.error("Error posting notification:", error.response?.data || error.message);
      toast.error("Failed to submit booking or notification!");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
    border: "1px solid #32d296",
    background: "#222",
    color: "white",
  };

  const selectStyle = { ...inputStyle, appearance: "none" };
  const textareaStyle = { ...inputStyle, resize: "vertical" };

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh", padding: 40, fontFamily: "sans-serif" }}>
      <h2 style={{ color: "#32d296", fontSize: "2rem", marginBottom: 20, textAlign: "center" }}>
        Detailed Taxi Booking Form
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: 600, margin: "0 auto", background: "#111", padding: 30, borderRadius: 12, boxShadow: "0 8px 20px rgba(0,0,0,0.5)" }}
      >
        <h4 style={{ color: "#32d296", marginBottom: 15 }}>Customer Details</h4>
        <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} style={inputStyle} />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} style={inputStyle} />
        <input name="whatsapp" placeholder="WhatsApp" value={formData.whatsapp} onChange={handleChange} style={inputStyle} />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} />
        <input name="passengers" type="number" placeholder="Number of Passengers" value={formData.passengers} onChange={handleChange} style={inputStyle} />

        <h4 style={{ color: "#32d296", marginBottom: 15 }}>Trip Details</h4>
        <input name="pickupLocation" placeholder="Pickup Location" value={formData.pickupLocation} onChange={handleChange} style={inputStyle} />
        <input name="dropLocation" placeholder="Drop Location" value={formData.dropLocation} onChange={handleChange} style={inputStyle} />
        <input name="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} style={inputStyle} />
        <input name="pickupTime" type="time" value={formData.pickupTime} onChange={handleChange} style={inputStyle} />

        <select name="tripType" value={formData.tripType} onChange={handleChange} style={selectStyle}>
          <option value="">Select Trip Type</option>
          <option>One Way Trip</option>
          <option>Round Trip</option>
          <option>Local Package (8hr / 80km)</option>
          <option>Outstation</option>
        </select>

        <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} style={selectStyle}>
          <option value="">Select Vehicle Type</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Traveller</option>
          <option>Luxury Car</option>
        </select>

        <input name="luggage" type="number" placeholder="Luggage Count" value={formData.luggage} onChange={handleChange} style={inputStyle} />

        <h4 style={{ color: "#32d296", marginBottom: 15 }}>Additional Info</h4>
        <select name="childSeat" value={formData.childSeat} onChange={handleChange} style={selectStyle}>
          <option>No</option>
          <option>Yes</option>
        </select>
        <select name="airportAssist" value={formData.airportAssist} onChange={handleChange} style={selectStyle}>
          <option>No</option>
          <option>Yes</option>
        </select>
        <textarea name="notes" placeholder="Special Notes / Instructions" value={formData.notes} onChange={handleChange} rows={3} style={textareaStyle}></textarea>

        <button type="submit" style={{ width: "100%", padding: 12, borderRadius: 8, border: "none", background: "#32d296", color: "#fff", fontWeight: 600, cursor: "pointer" }}>
          Submit Booking Request
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default TaxiBooking;




























