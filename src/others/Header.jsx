import React from 'react'

const Header = ({ data }) => {
  const userName = data?.name || "Admin"

  function LogOut() {
    localStorage.removeItem('loggedInUser')
    window.location.reload()
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 30px",
      borderRadius: "20px",
      background: "rgba(255,255,255,0.15)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      color: "white"
    }}>

      {/* Left Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        
        {/* Avatar */}
        <div style={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ff9966, #ff5e62)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "700",
          fontSize: "18px",
          color: "white"
        }}>
          {userName.charAt(0).toUpperCase()}
        </div>

        {/* Greeting */}
        <div>
          <h3 style={{color:"black", margin: "0", fontWeight: "500" }}>Welcome Back 👋</h3>
          <h2 style={{ color:"black",margin: "0", fontWeight: "800", letterSpacing: "1px" }}>
            {userName}
          </h2>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={LogOut}
        style={{
          padding: "10px 20px",
          borderRadius: "12px",
          border: "none",
          background: "linear-gradient(135deg, #ff512f, #dd2476)",
          color: "white",
          fontWeight: "700",
          cursor: "pointer",
          transition: "0.3s",
          fontSize: "14px"
        }}
        onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
      >
        Log Out
      </button>

    </div>
  )
}

export default Header
