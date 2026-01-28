// DestinationSearch.jsx
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaTimes, FaGlobeAmericas } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import back from "../images/back.jpg";

const THEME = {
  BACKGROUND_COLOR: "rgba(255, 255, 255, 0.98)",
  TEXT_COLOR: "#333",
  ACCENT_COLOR: "#764ba2",
  SHADOW: "0 10px 30px rgba(0, 0, 0, 0.2)",
};

const styles = {
  mainInputContainer: {
    backgroundColor: THEME.BACKGROUND_COLOR,
    backgroundImage: `url(${back})`,
    borderRadius: "12px",
    boxShadow: THEME.SHADOW,
    padding: "15px 25px",
    maxWidth: "550px",
    width: "100%",
    margin: "30px auto",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 0.3s ease",
    border: `2px solid transparent`,
  },
  mainInputContent: { display: "flex", alignItems: "center", flexGrow: 1 },
  mainInputIcon: { color: THEME.ACCENT_COLOR, fontSize: "20px", marginRight: "15px" },
  mainInputText: { fontSize: "18px", color: THEME.TEXT_COLOR, fontWeight: "500" },
  mainInputPlaceholder: { fontSize: "18px", color: "#999", fontWeight: "400" },
  dropdownArrow: { color: "#666", fontSize: "14px" },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    width: "90%",
    maxWidth: "900px",
    boxShadow: THEME.SHADOW,
    transform: "translateY(-20px)",
    transition: "transform 0.3s ease",
    padding: "30px",
    maxHeight: "80vh",
    overflowY: "auto",
  },
  modalHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" },
  modalTitle: { fontSize: "28px", fontWeight: "700", color: THEME.TEXT_COLOR },
  closeButton: { background: "none", border: "none", fontSize: "24px", color: "#888", cursor: "pointer" },
  modalSearchInput: { width: "100%", padding: "12px 15px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "16px", marginBottom: "20px", outline: "none", transition: "border-color 0.3s" },
  districtList: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "15px" },
  districtItem: { padding: "10px", borderRadius: "10px", backgroundColor: "#f5f5f5", border: "2px solid transparent", textAlign: "center", cursor: "pointer", fontWeight: "600", transition: "all 0.2s ease" },
  placeImage: { width: "100%", height: "140px", objectFit: "cover", borderRadius: "8px", marginBottom: "8px" },
  placeCategory: { fontSize: "14px", color: "#666" },
};

const DestinationSearch = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate();

  // Fetch places from API
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await axios.get("https://your-api-url.com/api/places"); // replace with your API
        setPlaces(res.data.places);
      } catch (err) {
        console.error("Error fetching places:", err);
      }
    };
    fetchPlaces();
  }, []);

  // Filter places by name or district
  const filteredPlaces = places.filter(
    (place) =>
      place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (placeId) => {
    setModalOpen(false);
    navigate(`/place/${placeId}`);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Main Search Input */}
      <div
        style={styles.mainInputContainer}
        onClick={() => setModalOpen(true)}
        onMouseEnter={(e) => (e.currentTarget.style.border = `2px solid ${THEME.ACCENT_COLOR}`)}
        onMouseLeave={(e) => (e.currentTarget.style.border = `2px solid transparent`)}
      >
        <div style={styles.mainInputContent}>
          <FaMapMarkerAlt style={styles.mainInputIcon} />
          {selectedPlace ? (
            <span style={styles.mainInputText}>{selectedPlace}</span>
          ) : (
            <span style={styles.mainInputPlaceholder}>Where do you want to visit?</span>
          )}
        </div>
        <div style={styles.dropdownArrow}>&#9660;</div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div style={{ ...styles.modalOverlay, opacity: 1 }}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Choose Your Destination</h2>
              <button style={styles.closeButton} onClick={() => setModalOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by place or district..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ ...styles.modalSearchInput, borderColor: searchTerm ? THEME.ACCENT_COLOR : "#ddd" }}
            />

            {/* Places Grid */}
            <div style={styles.districtList}>
              {filteredPlaces.length > 0 ? (
                filteredPlaces.map((place) => (
                  <div
                    key={place._id}
                    style={{
                      ...styles.districtItem,
                      border: place.name === selectedPlace ? `2px solid ${THEME.ACCENT_COLOR}` : "2px solid transparent",
                    }}
                    onClick={() => handleSelect(place._id)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        place.name === selectedPlace ? `${THEME.ACCENT_COLOR}33` : "#ebebeb")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        place.name === selectedPlace ? `${THEME.ACCENT_COLOR}15` : "#f5f5f5")
                    }
                  >
                    <img src={place.imageUrl} alt={place.name} style={styles.placeImage} />
                    <div>{place.name}</div>
                    <div style={styles.placeCategory}>{place.category}</div>
                  </div>
                ))
              ) : (
                <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#888" }}>
                  No places found matching "{searchTerm}".
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationSearch;
