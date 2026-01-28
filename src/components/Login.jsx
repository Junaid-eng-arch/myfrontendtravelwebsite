import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in both email and password.");
      return;
    }
    try {
      const response = await axios.post(
        "https://kerala-i5mr.onrender.com/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success("Login successful!");
      console.log("Login response:", response.data);
       const { token, user } = response.data;

      // 🟩 Save token & username
      localStorage.setItem("token", token);
      // localStorage.setItem("username", user.username);
      localStorage.setItem("username", user.name); 

      
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
      {/* Left Side - Image */}
      <div style={{
        flex: 1,
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('login.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "40px",
        textAlign: "center"
      }}>
        <div style={{ fontSize: "70px", marginBottom: "20px" }}>🌐</div>
        <h1 style={{ fontSize: "50px", fontWeight: "700", marginBottom: "20px", textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}>Welcome Back</h1>
        <p style={{ fontSize: "20px", textShadow: "1px 1px 5px rgba(0,0,0,0.5)" }}>
          Sign in to continue your journey with us
        </p>
      </div>

      {/* Right Side - Form */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "400px",
          padding: "50px",
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ fontSize: "32px", marginBottom: "10px", fontWeight: "700", color: "#333" }}>Sign In</h2>
          <p style={{ color: "#666", marginBottom: "30px" }}>Enter your email and password to access your account</p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "600", color: "#333" }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  border: "2px solid #e0e0e0",
                  fontSize: "15px",
                  outline: "none",
                  transition: "all 0.3s"
                }}
                onFocus={(e) => e.target.style.borderColor = "#667eea"}
                onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label style={{ display: "block", marginBottom: "5px", fontWeight: "600", color: "#333" }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  border: "2px solid #e0e0e0",
                  fontSize: "15px",
                  outline: "none",
                  transition: "all 0.3s"
                }}
                onFocus={(e) => e.target.style.borderColor = "#667eea"}
                onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
              />
            </div>

            <div style={{ marginBottom: "25px", textAlign: "right" }}>
              <Link to="/forgot-password" style={{ color: "#667eea", textDecoration: "none", fontWeight: "500" }}>Forgot Password?</Link>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "10px",
                border: "none",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s",
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
              Sign In
            </button>
          </form>

          <p style={{ marginTop: "25px", textAlign: "center", color: "#666" }}>
            New here? <Link to="/register" style={{ color: "#667eea", fontWeight: "600" }}>Create an Account</Link>
          </p>
        </div>
      </div>

      {/* Toast Container */}
     <ToastContainer
  position="top-center"  // center horizontally at the top
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
    </div>
  );
};

export default Login;
