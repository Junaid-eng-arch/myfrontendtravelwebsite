// // import React, { useState } from 'react';
// // import { Plane, Palmtree, Camera, Mountain, Compass, Users } from 'lucide-react';
// // import axios from "axios";

// // function ContactForm() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     dob: '',
// //     place: '',
// //     travelInterest: '',
// //     purpose: '',
// //     message: '',
// //     subscribe: false,
// //   });

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: type === 'checkbox' ? checked : value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Prepare the payload - send only filled fields
// //     const payload = {
// //       name: formData.name,
// //       email: formData.email,
// //       phone: formData.phone,
// //       dob: formData.dob,
// //       place: formData.place,
// //       travelInterest: formData.travelInterest,
// //       purpose: formData.purpose,
// //       message: formData.message,
// //       subscribe: formData.subscribe,
// //     };

// //     try {
// //       const response = await axios.post(
// //         "https://kerala-i5mr.onrender.com/api/contact",
// //         payload
// //       );
// //       console.log("Response:", response.data);

// //       alert('Thank you for contacting us! Our travel experts will reach out to you shortly.');

// //       // Reset form
// //       setFormData({
// //         name: '',
// //         email: '',
// //         phone: '',
// //         dob: '',
// //         place: '',
// //         travelInterest: '',
// //         purpose: '',
// //         message: '',
// //         subscribe: false,
// //       });
// //     } catch (error) {
// //       console.error("Error:", error.response ? error.response.data : error.message);
// //       alert('Something went wrong. Please try again later.');
// //     }
// //   };

// //   const inputStyle = {
// //     width: '100%',
// //     padding: '8px 10px',
// //     border: '2px solid #e5e7eb',
// //     borderRadius: '8px',
// //     fontSize: '13px',
// //     transition: 'all 0.3s',
// //     outline: 'none',
// //     boxSizing: 'border-box',
// //     backgroundColor: '#f9fafb',
// //   };

// //   const handleFocus = (e) => {
// //     e.target.style.borderColor = '#f97316';
// //     e.target.style.backgroundColor = '#ffffff';
// //   };

// //   const handleBlur = (e) => {
// //     e.target.style.borderColor = '#e5e7eb';
// //     e.target.style.backgroundColor = '#f9fafb';
// //   };

// //   return (
// //     <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0ea5e9 100%)', display: 'flex', alignItems: 'center', padding: '20px' }}>
// //       <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 10cm', gap: '40px', alignItems: 'start' }}>

// //         {/* Left Side - Travel Showcase */}
// //         <div style={{ color: 'white' }}>
// //           <div style={{ marginBottom: '30px' }}>
// //             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
// //               <Compass style={{ width: '40px', height: '40px', color: '#fbbf24' }} />
// //               <h1 style={{ fontSize: '40px', fontWeight: 'bold', margin: 0 }}>WanderLust</h1>
// //             </div>
// //             <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '15px' }}>Explore the World with Confidence</h2>
// //             <p style={{ fontSize: '16px', opacity: 0.95, lineHeight: '1.6', maxWidth: '550px' }}>
// //               From tropical beaches to mountain peaks, we curate extraordinary travel experiences tailored just for you. Let's turn your travel dreams into reality.
// //             </p>
// //           </div>

// //           {/* Features Grid */}
// //           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
// //             {[
// //               { icon: Palmtree, title: 'Beach Escapes', desc: 'Paradise destinations worldwide', color: '#10b981' },
// //               { icon: Mountain, title: 'Adventures', desc: 'Thrilling mountain expeditions', color: '#8b5cf6' },
// //               { icon: Camera, title: 'Photo Tours', desc: 'Capture stunning moments', color: '#f59e0b' },
// //               { icon: Users, title: 'Group Travel', desc: 'Connect with fellow travelers', color: '#ec4899' }
// //             ].map((feature, i) => (
// //               <div key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '18px', borderRadius: '12px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', transition: 'transform 0.3s' }}>
// //                 <feature.icon style={{ width: '28px', height: '28px', marginBottom: '10px', color: feature.color }} />
// //                 <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '6px' }}>{feature.title}</h3>
// //                 <p style={{ opacity: 0.9, margin: 0, fontSize: '13px' }}>{feature.desc}</p>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Stats */}
// //           <div style={{ display: 'flex', gap: '30px', padding: '20px', background: 'rgba(255,255,255,0.08)', borderRadius: '12px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)' }}>
// //             <div><h3 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 5px 0', color: '#fbbf24' }}>500+</h3><p style={{ margin: 0, opacity: 0.9, fontSize: '13px' }}>Destinations</p></div>
// //             <div><h3 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 5px 0', color: '#10b981' }}>50K+</h3><p style={{ margin: 0, opacity: 0.9, fontSize: '13px' }}>Happy Travelers</p></div>
// //             <div><h3 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 5px 0', color: '#8b5cf6' }}>4.9★</h3><p style={{ margin: 0, opacity: 0.9, fontSize: '13px' }}>Customer Rating</p></div>
// //           </div>

// //           {/* Floating Plane */}
// //           <div style={{ position: 'relative', marginTop: '30px' }}>
// //             <Plane style={{ width: '60px', height: '60px', opacity: 0.3, animation: 'fly 8s ease-in-out infinite' }} />
// //           </div>
// //         </div>

// //         {/* Right Side - Contact Form */}
// //         <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.4)', overflow: 'hidden', width: '100%' }}>
// //           <div style={{ background: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)', padding: '20px', textAlign: 'center', color: 'white' }}>
// //             <h2 style={{ margin: '0 0 6px 0', fontSize: '22px', fontWeight: 'bold' }}>Start Your Journey</h2>
// //             <p style={{ margin: 0, fontSize: '13px', opacity: 0.95 }}>Tell us about your dream destination</p>
// //           </div>
// //           <form style={{ padding: '20px' }} onSubmit={handleSubmit}>
// //             {/* Text Inputs */}
// //             {[
// //               { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith' },
// //               { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john@example.com' },
// //               { label: 'Phone Number', name: 'phone', type: 'text', placeholder: '985677777' },
// //               { label: 'Date of Birth', name: 'dob', type: 'date', placeholder: '' },
// //               { label: 'Your Travel Place', name: 'place', type: 'text', placeholder: 'Your travel place' },
// //               { label: 'Travel Interest', name: 'travelInterest', type: 'text', placeholder: 'Beach vacation, Adventure trek, etc.' }
// //             ].map((field, i) => (
// //               <div key={i} style={{ marginBottom: '18px' }}>
// //                 <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#1f2937', fontSize: '13px' }}>{field.label} *</label>
// //                 <input
// //                   type={field.type}
// //                   name={field.name}
// //                   value={formData[field.name]}
// //                   onChange={handleChange}
// //                   required
// //                   style={inputStyle}
// //                   onFocus={handleFocus}
// //                   onBlur={handleBlur}
// //                   placeholder={field.placeholder}
// //                 />
// //               </div>
// //             ))}

// //             {/* Message */}
// //             <div style={{ marginBottom: '18px' }}>
// //               <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#1f2937', fontSize: '13px' }}>Tell Us More *</label>
// //               <textarea
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 required
// //                 rows="4"
// //                 style={{ ...inputStyle, resize: 'vertical' }}
// //                 onFocus={handleFocus}
// //                 onBlur={handleBlur}
// //                 placeholder="Share your travel preferences..."
// //               />
// //             </div>

// //             {/* Purpose of Travel */}
// //             <div style={{ marginBottom: '18px' }}>
// //               <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600', color: '#1f2937', fontSize: '13px' }}>
// //                 Purpose of Travel *
// //               </label>
// //               <select
// //                 name="purpose"
// //                 value={formData.purpose}
// //                 onChange={handleChange}
// //                 required
// //                 style={{
// //                   width: '100%',
// //                   padding: '8px 10px',
// //                   border: '2px solid #e5e7eb',
// //                   borderRadius: '8px',
// //                   fontSize: '13px',
// //                   transition: 'all 0.3s',
// //                   outline: 'none',
// //                   boxSizing: 'border-box',
// //                   backgroundColor: '#f9fafb',
// //                 }}
// //                 onFocus={handleFocus}
// //                 onBlur={handleBlur}
// //               >
// //                 <option value="">Select purpose</option>
// //                 <option value="Beach Vacation">Beach Vacation</option>
// //                 <option value="Adventure Trek">Adventure Trek</option>
// //                 <option value="Cultural Tour">Cultural Tour</option>
// //                 <option value="Family Trip">Family Trip</option>
// //                 <option value="Honeymoon">Honeymoon</option>
// //               </select>
// //             </div>

// //             {/* Newsletter Subscribe */}
// //             <div style={{ marginBottom: '18px' }}>
// //               <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', color: '#1f2937', fontSize: '13px' }}>
// //                 <input
// //                   type="checkbox"
// //                   name="subscribe"
// //                   checked={formData.subscribe}
// //                   onChange={handleChange}
// //                   style={{ width: '16px', height: '16px' }}
// //                 />
// //                 Subscribe to our Newsletter
// //               </label>
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               style={{
// //                 width: '100%',
// //                 padding: '10px',
// //                 background: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)',
// //                 color: 'white',
// //                 border: 'none',
// //                 borderRadius: '8px',
// //                 fontSize: '14px',
// //                 fontWeight: '700',
// //                 cursor: 'pointer',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 gap: '8px',
// //                 boxShadow: '0 4px 15px rgba(249,115,22,0.4)',
// //                 transition: 'all 0.3s'
// //               }}
// //             >
// //               <Plane style={{ width: '16px', height: '10px' }} />
// //               Send Message
// //             </button>
// //             <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '10px', color: '#6b7280' }}>We'll respond within 24 hours ✈️</p>
// //           </form>
// //         </div>
// //       </div>

// //       <style>{`
// //         @keyframes fly {
// //           0%, 100% { transform: translate(0, 0) rotate(-45deg); }
// //           50% { transform: translate(100px, -50px) rotate(-45deg); }
// //         }
// //         @media (max-width: 1024px) {
// //           div[style*="gridTemplateColumns"] {
// //             grid-template-columns: 1fr !important;
// //             gap: 40px !important;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default ContactForm;



// import React, { useState } from 'react';
// import { Plane, Palmtree, Camera, Mountain, Compass, Users } from 'lucide-react';
// import axios from "axios";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     dob: '',
//     place: '',
//     travelInterest: '',
//     purpose: '',
//     message: '',
//     subscribe: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       dob: formData.dob,
//       place: formData.place,
//       travelInterest: formData.travelInterest,
//       purpose: formData.purpose,
//       message: formData.message,
//       subscribe: formData.subscribe,
//     };

//     try {
//       const response = await axios.post(
//         "https://kerala-i5mr.onrender.com/api/contact",
//         payload
//       );
//       console.log("Response:", response.data);

//       alert('Thank you for contacting us! Our travel experts will reach out to you shortly.');

//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         dob: '',
//         place: '',
//         travelInterest: '',
//         purpose: '',
//         message: '',
//         subscribe: false,
//       });
//     } catch (error) {
//       console.error("Error:", error.response ? error.response.data : error.message);
//       alert('Something went wrong. Please try again later.');
//     }
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '12px 16px',
//     border: '2px solid #e2e8f0',
//     borderRadius: '12px',
//     fontSize: '15px',
//     transition: 'all 0.3s ease',
//     outline: 'none',
//     boxSizing: 'border-box',
//     backgroundColor: '#f8fafc',
//     fontWeight: '500',
//   };

//   const handleFocus = (e) => {
//     e.target.style.borderColor = '#10b981';
//     e.target.style.backgroundColor = '#ffffff';
//     e.target.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
//   };

//   const handleBlur = (e) => {
//     e.target.style.borderColor = '#e2e8f0';
//     e.target.style.backgroundColor = '#f8fafc';
//     e.target.style.boxShadow = 'none';
//   };

//   return (
//     <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)', display: 'flex', alignItems: 'center', padding: '40px 20px' }}>
//       <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 450px', gap: '60px', alignItems: 'start' }}>

//         {/* Left Side - Travel Showcase */}
//         <div style={{ color: 'white' }}>
//           <div style={{ marginBottom: '50px' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '25px' }}>
//               <Compass style={{ width: '50px', height: '50px', color: '#fbbf24', filter: 'drop-shadow(0 4px 8px rgba(251, 191, 36, 0.3))' }} />
//               <h1 style={{ fontSize: '48px', fontWeight: '900', margin: 0, letterSpacing: '-1px' }}>Kerala Travels</h1>
//             </div>
//             <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', lineHeight: '1.2' }}>Explore God's Own Country</h2>
//             <p style={{ fontSize: '18px', opacity: 0.95, lineHeight: '1.8', maxWidth: '600px', fontWeight: '400' }}>
//               From serene backwaters to misty mountains, we curate extraordinary travel experiences across Kerala. Let's turn your travel dreams into unforgettable memories.
//             </p>
//           </div>

//           {/* Features Grid */}
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
//             {[
//               { icon: Palmtree, title: 'Beach Escapes', desc: 'Pristine coastal destinations', color: '#10b981' },
//               { icon: Mountain, title: 'Hill Stations', desc: 'Misty mountain retreats', color: '#8b5cf6' },
//               { icon: Camera, title: 'Photo Tours', desc: 'Capture stunning moments', color: '#f59e0b' },
//               { icon: Users, title: 'Group Travel', desc: 'Connect with fellow travelers', color: '#ec4899' }
//             ].map((feature, i) => (
//               <div 
//                 key={i} 
//                 style={{ 
//                   background: 'rgba(255,255,255,0.12)', 
//                   padding: '25px', 
//                   borderRadius: '16px', 
//                   backdropFilter: 'blur(12px)', 
//                   border: '1px solid rgba(255,255,255,0.25)', 
//                   transition: 'all 0.3s ease',
//                   cursor: 'pointer',
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-5px)';
//                   e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
//                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
//                   e.currentTarget.style.boxShadow = 'none';
//                 }}
//               >
//                 <feature.icon style={{ width: '32px', height: '32px', marginBottom: '12px', color: feature.color, filter: `drop-shadow(0 2px 6px ${feature.color}50)` }} />
//                 <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{feature.title}</h3>
//                 <p style={{ opacity: 0.9, margin: 0, fontSize: '14px', lineHeight: '1.5' }}>{feature.desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* Stats */}
//           <div style={{ 
//             display: 'flex', 
//             gap: '40px', 
//             padding: '30px', 
//             background: 'rgba(255,255,255,0.1)', 
//             borderRadius: '16px', 
//             backdropFilter: 'blur(12px)', 
//             border: '1px solid rgba(255,255,255,0.2)',
//             boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
//           }}>
//             <div>
//               <h3 style={{ fontSize: '36px', fontWeight: '900', margin: '0 0 8px 0', color: '#fbbf24' }}>500+</h3>
//               <p style={{ margin: 0, opacity: 0.95, fontSize: '14px', fontWeight: '500' }}>Destinations</p>
//             </div>
//             <div>
//               <h3 style={{ fontSize: '36px', fontWeight: '900', margin: '0 0 8px 0', color: '#10b981' }}>50K+</h3>
//               <p style={{ margin: 0, opacity: 0.95, fontSize: '14px', fontWeight: '500' }}>Happy Travelers</p>
//             </div>
//             <div>
//               <h3 style={{ fontSize: '36px', fontWeight: '900', margin: '0 0 8px 0', color: '#8b5cf6' }}>4.9★</h3>
//               <p style={{ margin: 0, opacity: 0.95, fontSize: '14px', fontWeight: '500' }}>Customer Rating</p>
//             </div>
//           </div>

//           {/* Floating Plane */}
//           <div style={{ position: 'relative', marginTop: '40px' }}>
//             <Plane style={{ width: '70px', height: '70px', opacity: 0.25, animation: 'fly 8s ease-in-out infinite', filter: 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.2))' }} />
//           </div>
//         </div>

//         {/* Right Side - Contact Form */}
//         <div style={{ background: 'white', borderRadius: '24px', boxShadow: '0 25px 60px rgba(0,0,0,0.5)', overflow: 'hidden', width: '100%' }}>
//           <div style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', padding: '30px', textAlign: 'center', color: 'white' }}>
//             <h2 style={{ margin: '0 0 10px 0', fontSize: '28px', fontWeight: '800', letterSpacing: '-0.5px' }}>Start Your Journey</h2>
//             <p style={{ margin: 0, fontSize: '15px', opacity: 0.95, fontWeight: '400' }}>Tell us about your dream destination</p>
//           </div>
//           <form style={{ padding: '35px 30px' }} onSubmit={handleSubmit}>
//             {/* Text Inputs */}
//             {[
//               { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith' },
//               { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john@example.com' },
//               { label: 'Phone Number', name: 'phone', type: 'text', placeholder: '+91 9856777777' },
//               { label: 'Date of Birth', name: 'dob', type: 'date', placeholder: '' },
//               { label: 'Preferred Destination', name: 'place', type: 'text', placeholder: 'e.g., Munnar, Alleppey' },
//               { label: 'Travel Interest', name: 'travelInterest', type: 'text', placeholder: 'Beach vacation, Adventure trek, etc.' }
//             ].map((field, i) => (
//               <div key={i} style={{ marginBottom: '22px' }}>
//                 <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#0f172a', fontSize: '14px' }}>{field.label} *</label>
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   required
//                   style={inputStyle}
//                   onFocus={handleFocus}
//                   onBlur={handleBlur}
//                   placeholder={field.placeholder}
//                 />
//               </div>
//             ))}

//             {/* Message */}
//             <div style={{ marginBottom: '22px' }}>
//               <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#0f172a', fontSize: '14px' }}>Tell Us More *</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows="4"
//                 style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//                 placeholder="Share your travel preferences and special requirements..."
//               />
//             </div>

//             {/* Purpose of Travel */}
//             <div style={{ marginBottom: '22px' }}>
//               <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#0f172a', fontSize: '14px' }}>
//                 Purpose of Travel *
//               </label>
//               <select
//                 name="purpose"
//                 value={formData.purpose}
//                 onChange={handleChange}
//                 required
//                 style={inputStyle}
//                 onFocus={handleFocus}
//                 onBlur={handleBlur}
//               >
//                 <option value="">Select purpose</option>
//                 <option value="Beach Vacation">Beach Vacation</option>
//                 <option value="Adventure Trek">Adventure Trek</option>
//                 <option value="Cultural Tour">Cultural Tour</option>
//                 <option value="Family Trip">Family Trip</option>
//                 <option value="Honeymoon">Honeymoon</option>
//               </select>
//             </div>

//             {/* Newsletter Subscribe */}
//             <div style={{ marginBottom: '25px' }}>
//               <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', color: '#0f172a', fontSize: '14px', cursor: 'pointer' }}>
//                 <input
//                   type="checkbox"
//                   name="subscribe"
//                   checked={formData.subscribe}
//                   onChange={handleChange}
//                   style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#10b981' }}
//                 />
//                 Subscribe to our travel newsletter
//               </label>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               style={{
//                 width: '100%',
//                 padding: '16px',
//                 background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '12px',
//                 fontSize: '16px',
//                 fontWeight: '700',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 gap: '10px',
//                 boxShadow: '0 6px 20px rgba(16, 185, 129, 0.4)',
//                 transition: 'all 0.3s ease',
//                 letterSpacing: '0.5px',
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
//                 e.target.style.transform = 'translateY(-2px)';
//                 e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.5)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
//               }}
//             >
//               <Plane style={{ width: '20px', height: '20px' }} />
//               Send Message
//             </button>
//             <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: '#64748b', fontWeight: '500' }}>We'll respond within 24 hours ✈️</p>
//           </form>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fly {
//           0%, 100% { transform: translate(0, 0) rotate(-45deg); }
//           50% { transform: translate(120px, -60px) rotate(-45deg); }
//         }
//         @media (max-width: 1024px) {
//           div[style*="gridTemplateColumns"] {
//             grid-template-columns: 1fr !important;
//             gap: 50px !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ContactForm;


import React, { useState } from 'react';
import { Plane, Palmtree, Camera, Mountain, Compass, Users } from 'lucide-react';
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', dob: '', place: '',
    travelInterest: '', purpose: '', message: '', subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://kerala-i5mr.onrender.com/api/contact", formData);
      alert('Thank you for contacting us! Our travel experts will reach out to you shortly.');
      setFormData({
        name: '', email: '', phone: '', dob: '', place: '',
        travelInterest: '', purpose: '', message: '', subscribe: false,
      });
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '15px',
    transition: 'all 0.3s ease',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#f8fafc',
    fontWeight: '500',
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = '#10b981';
    e.target.style.backgroundColor = '#ffffff';
    e.target.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = '#e2e8f0';
    e.target.style.backgroundColor = '#f8fafc';
    e.target.style.boxShadow = 'none';
  };

  return (
    <div className="contact-page-container" style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)', 
      display: 'flex', 
      alignItems: 'center', 
      padding: 'clamp(20px, 5vw, 60px) 15px' // Fluid vertical padding
    }}>
      <div className="content-grid" style={{ 
        maxWidth: '1200px', 
        width: '100%', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', // Auto-stacking logic
        gap: '40px', 
        alignItems: 'start' 
      }}>

        {/* Left Side - Travel Showcase */}
        <div style={{ color: 'white' }}>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <Compass style={{ width: 'clamp(35px, 8vw, 50px)', height: 'clamp(35px, 8vw, 50px)', color: '#fbbf24' }} />
              <h1 style={{ fontSize: 'clamp(32px, 8vw, 48px)', fontWeight: '900', margin: 0 }}>Kerala Travels</h1>
            </div>
            <h2 style={{ fontSize: 'clamp(22px, 5vw, 32px)', fontWeight: '700', marginBottom: '15px' }}>Explore God's Own Country</h2>
            <p style={{ fontSize: '16px', opacity: 0.9, lineHeight: '1.6', maxWidth: '600px' }}>
              From serene backwaters to misty mountains, we curate extraordinary travel experiences across Kerala.
            </p>
          </div>

          {/* Features Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '15px', 
            marginBottom: '30px' 
          }}>
            {[
              { icon: Palmtree, title: 'Beach Escapes', color: '#10b981' },
              { icon: Mountain, title: 'Hill Stations', color: '#8b5cf6' },
              { icon: Camera, title: 'Photo Tours', color: '#f59e0b' },
              { icon: Users, title: 'Group Travel', color: '#ec4899' }
            ].map((feature, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.12)', padding: '20px', borderRadius: '16px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <feature.icon style={{ width: '28px', height: '28px', marginBottom: '10px', color: feature.color }} />
                <h3 style={{ fontSize: '16px', fontWeight: '700', margin: 0 }}>{feature.title}</h3>
              </div>
            ))}
          </div>

          {/* Stats - Responsive flex */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: '20px', 
            padding: '25px', 
            background: 'rgba(255,255,255,0.1)', 
            borderRadius: '16px', 
            border: '1px solid rgba(255,255,255,0.2)' 
          }}>
            <div style={{ flex: '1 1 100px' }}><h3 style={{ fontSize: '28px', fontWeight: '900', margin: 0, color: '#fbbf24' }}>500+</h3><p style={{ margin: 0, fontSize: '13px' }}>Destinations</p></div>
            <div style={{ flex: '1 1 100px' }}><h3 style={{ fontSize: '28px', fontWeight: '900', margin: 0, color: '#10b981' }}>50K+</h3><p style={{ margin: 0, fontSize: '13px' }}>Happy Travelers</p></div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div style={{ background: 'white', borderRadius: '24px', boxShadow: '0 25px 60px rgba(0,0,0,0.4)', overflow: 'hidden' }}>
          <div style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', padding: '25px', textAlign: 'center', color: 'white' }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '800' }}>Start Your Journey</h2>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.9 }}>Customized Kerala Tour Packages</p>
          </div>
          <form style={{ padding: '25px' }} onSubmit={handleSubmit}>
            {[
              { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith' },
              { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john@example.com' },
              { label: 'Phone Number', name: 'phone', type: 'text', placeholder: '+91' },
              { label: 'Date of Birth', name: 'dob', type: 'date' },
              { label: 'Destination', name: 'place', type: 'text', placeholder: 'e.g. Munnar' },
            ].map((field, i) => (
              <div key={i} style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '700', color: '#0f172a', fontSize: '13px' }}>{field.label} *</label>
                <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange} required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} placeholder={field.placeholder} />
              </div>
            ))}

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '700', fontSize: '13px' }}>Tell Us More *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows="3" style={{ ...inputStyle, resize: 'vertical' }} onFocus={handleFocus} onBlur={handleBlur} placeholder="Travel preferences..." />
            </div>

            <button type="submit" style={{
                width: '100%', padding: '16px', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
            }}>
              <Plane style={{ width: '20px', height: '20px' }} /> Send Message
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes fly {
          0%, 100% { transform: translate(0, 0) rotate(-45deg); }
          50% { transform: translate(50px, -30px) rotate(-45deg); }
        }
        /* Hidden on very small screens to save space */
        @media (max-width: 480px) {
          .fly-plane { display: none; }
        }
      `}</style>
    </div>
  );
}

export default ContactForm;
