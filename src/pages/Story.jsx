import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LatestStories.css";

const LatestStories = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://kerala-i5mr.onrender.com/api/places")  // 🔥 your API URL
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="stories-container">
      <h2 className="stories-heading">Our Latest Travel Stories</h2>

      <div className="stories-grid">
        {posts.map((item) => (
          <div className="story-card" key={item.id}>
            <div
              className="story-img"
              style={{ backgroundImage: `url(${item.imageurl})` }} // 🔥 image from API
            >
              <div className="story-tag">Blogs</div>
            </div>

            <div className="story-info">
              <div className="meta">
                <span>📅 {item.date || "Unknown date"}</span>
                <span>💬 0</span>
              </div>

              <h3 className="story-title">{item.name}</h3> {/* 🔥 title */}
              <p className="story-description">{item.description}</p> {/* 🔥 description */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestStories;
