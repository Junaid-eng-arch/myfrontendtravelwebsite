import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Button } from "react-bootstrap";

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get("https://kerala-i5mr.onrender.com/api/places")
      .then(res => {
        const found = res.data.find(it => (it.id || it._id) === id);
        if (found) setItem(found);
        else console.log("Item not found!");
      })
      .catch(err => console.log("AxiosError:", err));
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <Container style={{ padding: "40px 0" }}>
      <Link to={`/category/${item.category}`}>
        <Button variant="secondary" className="mb-4">← Back to Category</Button>
      </Link>
      <h2>{item.name}</h2>
      <img
        src={item.image || item.imageUrl}
        alt={item.name}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover", marginBottom: "20px" }}
      />
      <p>{item.description}</p>
      <p><strong>Category:</strong> {item.category}</p>
    </Container>
  );
};

export default Details;
