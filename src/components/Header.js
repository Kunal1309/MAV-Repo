import React from 'react'

const Header = () => {
  return (
    <div className="content">
        <p
        style={{
          color: "#203081",
          padding: "3%",
          fontSize: "4rem",
          textShadow: "3px 3px 20px #ffff, -2px 1px 30px #6477da",
        }}
      >
        <span
          style={{
            marginLeft: "5%",
            borderBottom: "2px dashed blue",
            outlineBottom: "2px dashed blue",
            outlineOffset: "3px",
          }}
        >
          MAV AEROSAFETY
        </span>
      </p>
    </div>
  )
}

export default Header