// import React, { useEffect, useState } from "react";

// const apiUrl = "https://kerala-i5mr.onrender.com";

// const Notification = () => {
//   const [notifications, setNotifications] = useState([]);

//   const user = JSON.parse(localStorage.getItem("user"));
//   const email = user?.email;

//   // 🔹 Fetch notifications
//   const fetchNotifications = async () => {
//     if (!email) return;

//     try {
//       const res = await fetch(
//         `${apiUrl}/api/notifications/${email}`
//       );

//       if (!res.ok) {
//         throw new Error("Failed to fetch notifications");
//       }

//       const data = await res.json(); // backend returns ARRAY
//       setNotifications(data);
//     } catch (err) {
//       console.error("Notification load failed:", err);
//     }
//   };

//   // 🔹 Load notifications on mount & when email changes
//   useEffect(() => {
//     fetchNotifications();
//   }, [email]);

//   // 🔹 Mark notification as read
//   const markAsRead = async (id) => {
//     try {
//       await fetch(`${apiUrl}/api/notifications/read/${id}`, {
//         method: "PUT",
//       });

//       // Optimistic UI update
//       setNotifications((prev) =>
//         prev.map((n) =>
//           n._id === id ? { ...n, isRead: true } : n
//         )
//       );
//     } catch (err) {
//       console.error("Mark as read failed:", err);
//     }
//   };

//   return (
//     <div style={{ padding: "90px 20px", maxWidth: 750, margin: "auto" }}>
//       <h2 style={{ color: "#32d296", textAlign: "center", marginBottom: 30 }}>
//         Notifications
//       </h2>

//       {notifications.length === 0 ? (
//         <p style={{ color: "white", textAlign: "center" }}>
//           No notifications yet
//         </p>
//       ) : (
//         notifications.map((n) => (
//           <div
//             key={n._id}
//             onClick={() => !n.isRead && markAsRead(n._id)}
//             style={{
//               background: "#111",
//               padding: 18,
//               borderRadius: 14,
//               marginBottom: 14,
//               borderLeft: `6px solid ${n.isRead ? "#444" : "#32d296"}`,
//               color: "white",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               cursor: "pointer",
//               opacity: n.isRead ? 0.6 : 1,
//               transition: "0.3s",
//             }}
//           >
//             <div>
//               <p style={{ marginBottom: 6 }}>{n.message}</p>
//               <small style={{ opacity: 0.6 }}>
//                 {new Date(n.createdAt).toLocaleString()}
//               </small>
//             </div>

//             {!n.isRead && (
//               <span
//                 style={{
//                   background: "#32d296",
//                   color: "black",
//                   padding: "4px 10px",
//                   borderRadius: 10,
//                   fontSize: 12,
//                   fontWeight: "bold",
//                 }}
//               >
//                 NEW
//               </span>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Notification;












import React, { useEffect, useState } from "react";

const apiUrl = "https://kerala-i5mr.onrender.com";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const user = JSON.parse(localStorage.getItem("user"));
  const email = user?.email;

  // 🔹 Fetch notifications
  const fetchNotifications = async () => {
    if (!email) {
      setLoading(false);
      setError("No user email found. Please log in.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const res = await fetch(`${apiUrl}/api/notifications/${email}`);
      
      if (!res.ok) {
        throw new Error(`Failed to fetch notifications: ${res.status}`);
      }
      
      const data = await res.json();
      setNotifications(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Notification load failed:", err);
      setError(err.message || "Failed to load notifications");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Load notifications on mount
  useEffect(() => {
    fetchNotifications();
  }, [email]);

  // 🔹 Mark notification as read
  const markAsRead = async (id) => {
    try {
      const res = await fetch(`${apiUrl}/api/notifications/read/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to mark as read");
      }

      // Optimistic UI update
      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, isRead: true } : n))
      );
    } catch (err) {
      console.error("Mark as read failed:", err);
      // Optionally show error to user
    }
  };

  // 🔹 Render loading state
  if (loading) {
    return (
      <div style={{ padding: "90px 20px", maxWidth: 750, margin: "auto" }}>
        <h2 style={{ color: "#32d296", textAlign: "center", marginBottom: 30 }}>
          Notifications
        </h2>
        <p style={{ color: "white", textAlign: "center" }}>Loading...</p>
      </div>
    );
  }

  // 🔹 Render error state
  if (error) {
    return (
      <div style={{ padding: "90px 20px", maxWidth: 750, margin: "auto" }}>
        <h2 style={{ color: "#32d296", textAlign: "center", marginBottom: 30 }}>
          Notifications
        </h2>
        <div
          style={{
            background: "#331111",
            padding: 18,
            borderRadius: 14,
            borderLeft: "6px solid #ff4444",
            color: "white",
            textAlign: "center",
          }}
        >
          <p>{error}</p>
          <button
            onClick={fetchNotifications}
            style={{
              marginTop: 12,
              padding: "8px 16px",
              background: "#32d296",
              color: "black",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "90px 20px", maxWidth: 750, margin: "auto" }}>
      <h2 style={{ color: "#32d296", textAlign: "center", marginBottom: 30 }}>
        Notifications
      </h2>

      {notifications.length === 0 ? (
        <p style={{ color: "white", textAlign: "center" }}>
          No notifications yet
        </p>
      ) : (
        <div>
          {notifications.map((n) => (
            <div
              key={n._id}
              onClick={() => !n.isRead && markAsRead(n._id)}
              style={{
                background: "#111",
                padding: 18,
                borderRadius: 14,
                marginBottom: 14,
                borderLeft: `6px solid ${n.isRead ? "#444" : "#32d296"}`,
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: n.isRead ? "default" : "pointer",
                opacity: n.isRead ? 0.6 : 1,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!n.isRead) {
                  e.currentTarget.style.transform = "translateX(4px)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <div style={{ flex: 1 }}>
                <p style={{ marginBottom: 6, lineHeight: 1.5 }}>{n.message}</p>
                <small style={{ opacity: 0.6, fontSize: 12 }}>
                  {new Date(n.createdAt).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </small>
              </div>

              {!n.isRead && (
                <span
                  style={{
                    background: "#32d296",
                    color: "black",
                    padding: "4px 10px",
                    borderRadius: 10,
                    fontSize: 12,
                    fontWeight: "bold",
                    marginLeft: 12,
                    flexShrink: 0,
                  }}
                >
                  NEW
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notification;