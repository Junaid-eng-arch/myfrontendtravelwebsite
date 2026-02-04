// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import HeroPage from './components/Heropage';
// import Middlesection from './components/Middlesection';
// import Cards from './components/Card.jsx';
// import CampingBookingForm from './components/CampingBookingForm.jsx';
// import Middlepage from './components/Middlepage.jsx';
// import Services from './components/Services.jsx';
// import FeaturesSection from './components/FeaturesSection.jsx';
// import Wild from './components/Wild.jsx';
// import Footer from './components/Footer.jsx';
// import Home from './pages/Home.jsx';

// import Register from './components/Register.jsx';
// import Login from './components/Login.jsx';
// import User from './components/User.jsx';

// const App = () => {
//   const [districtModal, setDistrictModal] = useState(false);

//   const openModal = () => setDistrictModal(true);
//   const closeModal = () => setDistrictModal(false);

//   return (
//     <Router>
//       <Routes>
//         {/* Home Page with modal */}
//         <Route
//           path="/"
//           element={
//             <HeroPage
//               districtModal={districtModal}
//               openModal={openModal}
//               closeModal={closeModal}
//             />
//           }
//         />

//         {/* Home page full content (like original HeroPage + Middlesection + Cards etc) */}
//         <Route
//           path="/home"
//           element={
//             <>
//               <HeroPage
//                 districtModal={districtModal}
//                 openModal={openModal}
//                 closeModal={closeModal}
//               />
//               <Middlesection />
//               <Cards />
//               <CampingBookingForm />
//               <Middlepage />
//               <Services />
//               <Wild />
//               <FeaturesSection />
//             </>
//           }
//         />

//         {/* Authentication Pages */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/user" element={<User />} />

//         {/* Other pages */}
//         <Route path="/home" element={<Home />} />
//       </Routes>

//       {/* Footer visible on all pages */}
//       <Footer />
//     </Router>
//   );
// };

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import HeroPage from "./components/HeroPage";
// import Middlesection from "./components/Middlesection";
// import Cards from "./components/Card.jsx";
// import CampingBookingForm from "./components/CampingBookingForm.jsx";
// import Middlepage from "./components/Middlepage.jsx";
// import Services from "./components/Services.jsx";
// import FeaturesSection from "./components/FeaturesSection.jsx";
// import Wild from "./components/Wild.jsx";
// import Footer from "./components/Footer.jsx";
// import Register from "./components/Register.jsx";
// import Login from "./components/Login.jsx";
// import User from "./components/User.jsx";
// import District from "./pages/District.jsx";
// import DistrictSpots from "./pages/DistrictSpots.jsx";
// import DetailPlace from "./pages/DetailPlace.jsx";
// import CardsDetail from "./pages/CardsDetail.jsx";
// import Explore from "./pages/Explore.jsx";
// import WildTourism from "./pages/WildTourism.jsx";
// // import FeaturedProgram from "./components/Middle.jsx";
// // import PopularToursSection from "./components/PopularSection.jsx";
// // import RecommendedSection from "./components/Recommended.jsx";
// import Category from "./pages/Category.jsx";
// import CategoryDetail from "./pages/CategoryDetail.jsx";
// import Detail from "./pages/Detail.jsx";
// import Details from "./pages/Detail.jsx";
// import Package from "./pages/Package.jsx";
// import ContactForm from "./pages/ContactForm.jsx";
// import DestinationSearch from "./components/DestinationSearch.jsx";
// import PlaceDetail from "./pages/PlaceDetail.jsx";
// import TaxiBookingForm from "./components/TaxiBookingForm.jsx";
// import WildHotel from "./pages/WildHotel.jsx";
// import TourPackege from "./pages/TourPackege.jsx";
// import TourPackageDetails from "./pages/TourPackageDetails.jsx";
// import Notification from "./pages/Notifications.jsx";
// const App = () => {
//   // const [districtModal, setDistrictModal] = useState(false);
//   // const [selectedDistrict, setSelectedDistrict] = useState("");

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroPage
//                 // districtModal={districtModal}
//                 // openModal={() => setDistrictModal(true)}
//                 // closeModal={() => setDistrictModal(false)}
//                 // selectDistrict={setSelectedDistrict}
//               />
//               {/* <Package /> */}
             
//               {/* <Cards /> */}
//               <Explore />
//               {/* <DestinationSearch /> */}
//               {/* <PopularToursSection /> */}
//               {/* <RecommendedSection /> */}
//               <District />
//               <TourPackege /> 
//               <TaxiBookingForm /> 
//               <WildHotel />
//               {/* <FeaturedProgram /> */}
//               <CampingBookingForm />
              
//               <Services />
//               <Category />
//               <Wild />
//               <Middlepage />
//               <ContactForm />
//                <Middlesection />
//               <FeaturesSection />
              
//               {/* {selectedDistrict && <DistrictSpots district={selectedDistrict} />} */}
//             </>
//           }
//         />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/user" element={<User />} />
//          <Route path="/places" element={<District />} />
//           <Route path="/places/:districtName" element={<DistrictSpots />} />
//           <Route path="/place/:id" element={<DetailPlace />} />
//           <Route path="/cards" element={<CardsDetail />} />
//           <Route path="/wildtourism" element={<WildTourism />} />
//          <Route path="/" element={<Category/>} />
//         <Route path="/category/:name" element={<CategoryDetail />} />
//         <Route path="/details/:id" element={<Details />} />
//         <Route path="/" element={<DestinationSearch />} />
//           <Route path="/place/:id1" element={<PlaceDetail />} />
//           <Route path="/bookings" element={<TaxiBookingForm />} />
//           <Route path="/packages" element={<TourPackege />} />
//          <Route path="/tour/:slug" element={<TourPackageDetails />} />
//          <Route path="/notifications" element={<Notification />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;


// import React from "react";
// import { useState,useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import HeroPage from "./components/HeroPage";
// import Middlesection from "./components/Middlesection";
// import Cards from "./components/Card.jsx";
// import CampingBookingForm from "./components/CampingBookingForm.jsx";
// import Middlepage from "./components/Middlepage.jsx";
// import Services from "./components/Services.jsx";
// import FeaturesSection from "./components/FeaturesSection.jsx";
// import Wild from "./components/Wild.jsx";
// import Footer from "./components/Footer.jsx";
// import Register from "./components/Register.jsx";
// import Login from "./components/Login.jsx";
// import User from "./components/User.jsx";
// import DestinationSearch from "./components/DestinationSearch.jsx";

// import District from "./pages/District.jsx";
// import DistrictSpots from "./pages/DistrictSpots.jsx";
// import DetailPlace from "./pages/DetailPlace.jsx";
// import CardsDetail from "./pages/CardsDetail.jsx";
// import Explore from "./pages/Explore.jsx";
// import WildTourism from "./pages/WildTourism.jsx";
// import Category from "./pages/Category.jsx";
// import CategoryDetail from "./pages/CategoryDetail.jsx";
// import Details from "./pages/Detail.jsx";
// import Package from "./pages/Package.jsx";
// import ContactForm from "./pages/ContactForm.jsx";
// import PlaceDetail from "./pages/PlaceDetail.jsx";
// import TaxiBooking from "./components/TaxiBookingForm.jsx";
// import WildHotel from "./pages/WildHotel.jsx";
// import TourPackege from "./pages/TourPackege.jsx";
// import TourPackageDetails from "./pages/TourPackageDetails.jsx";
// import Notifications from "./pages/Notifications.jsx";

// const App = () => {
  

//   return (
//     <Router>
//       <Routes>
//         {/* Homepage */}
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroPage />
//               <Explore />
//               <District />
//               <TourPackege />
//               <TaxiBooking  />
//               <WildHotel />
//               <CampingBookingForm />
//               <Services />
//               <Category />
//               <Wild />
//               <Middlepage />
//               <DestinationSearch />
//               <Middlesection />
//               <FeaturesSection />
//             </>
//           }
//         />

//         {/* Authentication */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/user" element={<User />} />

//         {/* Places & Tourism */}
//         <Route path="/places" element={<District />} />
//         <Route path="/places/:districtName" element={<DistrictSpots />} />
//         <Route path="/place/:id" element={<DetailPlace />} />
//         <Route path="/place/detail/:id1" element={<PlaceDetail />} />
//         <Route path="/cards" element={<CardsDetail />} />
//         <Route path="/wildtourism" element={<WildTourism />} />

//         {/* Categories */}
//         <Route path="/category" element={<Category />} />
//         <Route path="/category/:name" element={<CategoryDetail />} />

//         {/* Tour Packages */}
//         <Route path="/packages" element={<TourPackege />} />
//         <Route path="/tour/:slug" element={<TourPackageDetails />} />

//         {/* Bookings */}
//         <Route path="/bookings" element={<TaxiBooking />} />

//         {/* Notifications */}
//         <Route path="/notifications" element={<Notifications />} />

//         {/* Contact */}
//         <Route path="/contact" element={<ContactForm />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components

import Middlesection from "./components/Middlesection.jsx";
import Card from "./components/Card.jsx";
import CampingBookingForm from "./components/CampingBookingForm.jsx";
import Middlepage from "./components/Middlepage.jsx";
import Services from "./components/Services.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import Wild from "./components/Wild.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import User from "./components/User.jsx";
import DestinationSearch from "./components/DestinationSearch.jsx";
import TaxiBookingForm from "./components/TaxiBookingForm.jsx";

// Pages
import District from "./pages/District.jsx";
import DistrictSpots from "./pages/DistrictSpots.jsx";
import DetailPlace from "./pages/DetailPlace.jsx";
import CardsDetail from "./pages/CardsDetail.jsx";
import Explore from "./pages/Explore.jsx";
import WildTourism from "./pages/WildTourism.jsx";
import Category from "./pages/Category.jsx";
import CategoryDetail from "./pages/CategoryDetail.jsx";
import Detail from "./pages/Detail.jsx";
import Package from "./pages/Package.jsx";
import ContactForm from "./pages/ContactForm.jsx";
import PlaceDetail from "./pages/PlaceDetail.jsx";
import WildHotel from "./pages/WildHotel.jsx";
import TourPackege from "./pages/TourPackege.jsx";
import TourPackageDetails from "./pages/TourPackageDetails.jsx";
import Notifications from "./pages/Notifications.jsx";
import HeroPage from "./components/Heropage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
             <HeroPage/>
              <Explore />
              <District />
              <TourPackege />
              <TaxiBookingForm />
              <WildHotel />
              <CampingBookingForm />
              <Services />
              <Category />
              <Wild />
              <Middlepage />
              <DestinationSearch />
              <Middlesection />
              <FeaturesSection />
            </>
          }
        />

        {/* Authentication */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />

        {/* Places & Tourism */}
        <Route path="/places" element={<District />} />
        <Route path="/places/:districtName" element={<DistrictSpots />} />
        <Route path="/place/:id" element={<DetailPlace />} />
        <Route path="/place/detail/:id1" element={<PlaceDetail />} />
        <Route path="/cards" element={<CardsDetail />} />
        <Route path="/wildtourism" element={<WildTourism />} />

        {/* Categories */}
        <Route path="/category" element={<Category />} />
        <Route path="/category/:name" element={<CategoryDetail />} />

        {/* Tour Packages */}
        <Route path="/packages" element={<TourPackege />} />
        <Route path="/tour/:slug" element={<TourPackageDetails />} />

        {/* Bookings */}
        <Route path="/bookings" element={<TaxiBookingForm />} />

        {/* Notifications */}
        <Route path="/notifications" element={<Notifications />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;


