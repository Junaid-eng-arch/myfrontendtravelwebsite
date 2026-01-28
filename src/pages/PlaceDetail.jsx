import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const PlaceDetail = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const res = await axios.get(`https://your-api-url.com/api/places/${id}`);
        setPlace(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPlace();
  }, [id]);

  if (!place) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", fontFamily: "Arial" }}>
      <Link to="/" style={{ textDecoration: "none", color: "#764ba2" }}>← Back</Link>
      <h1>{place.name}</h1>
      <img
        src={place.imageUrl}
        alt={place.name}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }}
      />
      <p><strong>District:</strong> {place.district}</p>
      <p><strong>Category:</strong> {place.category}</p>
      <p><strong>Best Time to Visit:</strong> {place.bestTime}</p>
      <p>{place.detailedDescription}</p>
      <a href={place.mapLink} target="_blank" rel="noopener noreferrer" style={{ color: "#764ba2" }}>
        View on Map
      </a>
    </div>
  );
};

export default PlaceDetail;
