import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      setMessage("");
      return;
    }

    try {
      const response = await axios.post(
        "https://kerala-i5mr.onrender.com/api/auth/register",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("API Response:", response.data);
      setMessage("Account created successfully!");
      setError("");
      setName("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data?.message || "Registration failed.");
      setMessage("");
    }
  };

  return (
    <div style={{ 
      minHeight: "100vh",
      display: "flex",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "#f5f5f5"
    }}>
      {/* Left Side - Image */}
      <div style={{
        flex: "1",
        minHeight: "100vh",
        background: `linear-gradient(rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.3)), url('register.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{
          textAlign: "center",
          color: "white",
          padding: "40px",
          zIndex: 1
        }}>
          <div style={{
            fontSize: "60px",
            marginBottom: "20px"
          }}>✈️</div>
          <h1 style={{
            fontSize: "48px",
            fontWeight: "700",
            margin: "0 0 20px 0",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
          }}>Explore the World</h1>
          <p style={{
            fontSize: "20px",
            margin: 0,
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
          }}>Your adventure begins here</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div style={{
        // flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        background: "white"
      }}>
        <div style={{ 
          width: "400px",
          maxWidth: "350px", 
          padding: "40px"
        }}>
          {/* Logo/Header */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ 
              margin: "0 0 10px 0",
              fontSize: "36px",
              fontWeight: "700",
              color: "#333"
            }}>Create Account</h2>
            <p style={{ 
              margin: 0, 
              color: "#666",
              fontSize: "15px"
            }}>Join us and start your journey today</p>
          </div>

          {message && (
            <div style={{ 
              padding: "12px 16px",
              backgroundColor: "#d4edda",
              color: "#155724",
              borderRadius: "10px",
              marginBottom: "20px",
              border: "1px solid #c3e6cb",
              fontSize: "14px"
            }}>
              {message}
            </div>
          )}
          
          {error && (
            <div style={{ 
              padding: "12px 16px",
              backgroundColor: "#f8d7da",
              color: "#721c24",
              borderRadius: "10px",
              marginBottom: "20px",
              border: "1px solid #f5c6cb",
              fontSize: "14px"
            }}>
              {error}
            </div>
          )}

          <form onSubmit={handleRegister}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ 
                display: "block",
                marginBottom: "8px",
                color: "#333",
                fontWeight: "600",
                fontSize: "14px"
              }}>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                style={{ 
                  width: "100%", 
                  padding: "10px 10px",
                  border: "2px solid #e0e0e0",
                  borderRadius: "10px",
                  fontSize: "15px",
                  transition: "all 0.3s ease",
                  outline: "none",
                  boxSizing: "border-box"
                }}
                onFocus={(e) => e.target.style.borderColor = "#667eea"}
                onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ 
                display: "block",
                marginBottom: "8px",
                color: "#333",
                fontWeight: "600",
                fontSize: "14px"
              }}>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{ 
                  width: "100%", 
                  padding: "10px 10px",
                  border: "2px solid #e0e0e0",
                  borderRadius: "10px",
                  fontSize: "15px",
                  transition: "all 0.3s ease",
                  outline: "none",
                  boxSizing: "border-box"
                }}
                onFocus={(e) => e.target.style.borderColor = "#667eea"}
                onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label style={{ 
                display: "block",
                marginBottom: "8px",
                color: "#333",
                fontWeight: "600",
                fontSize: "14px"
              }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                style={{ 
                  width: "100%", 
                  padding: "10px 10px",
                  border: "2px solid #e0e0e0",
                  borderRadius: "10px",
                  fontSize: "15px",
                  transition: "all 0.3s ease",
                  outline: "none",
                  boxSizing: "border-box"
                }}
                onFocus={(e) => e.target.style.borderColor = "#667eea"}
                onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
              />
            </div>

            <button 
              type="submit" 
              style={{ 
                width: "100%", 
                padding: "14px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.5)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
              }}
            >
              Create Account
            </button>
          </form>

          <div style={{
            marginTop: "30px",
            textAlign: "center"
          }}>
            <p style={{ 
              margin: 0,
              color: "#666",
              fontSize: "14px"
            }}>
              Already have an account?{" "}
              <Link 
                to="/login" 
                style={{ 
                  color: "#667eea",
                  textDecoration: "none",
                  fontWeight: "600",
                  transition: "color 0.2s ease"
                }}
                onMouseOver={(e) => e.target.style.color = "#764ba2"}
                onMouseOut={(e) => e.target.style.color = "#667eea"}
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;