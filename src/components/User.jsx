import React from "react";

const User = () => {
  // Get logged in user from localStorage
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#e9f7ee",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px"
    }}>
      <div style={{
        backgroundColor: "#c8e6c9",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        maxWidth: "500px",
        width: "100%",
        textAlign: "center"
      }}>
        <h2 style={{ color: "#1b5e20", fontWeight: "900", marginBottom: "20px" }}>
          Welcome, {user ? user.fullName : "Guest"}!
        </h2>
        <p style={{ fontSize: "18px", color: "#2e7d32" }}>
          Email: {user ? user.email : "N/A"} <br />
          Mobile: {user ? user.mobile : "N/A"}
        </p>
        <button
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "/"; // logout and go home
          }}
          style={{
            marginTop: "20px",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#4caf50",
            color: "white",
            fontWeight: "700",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
