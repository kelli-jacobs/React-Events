import React, { useState } from "react";

const HoverBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: isHovered ? "lightcoral" : "lightblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        border: "1px solid #ccc",
        cursor: "pointer",
        transition: "background-color 0.3s ease"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? "Hovered!" : "Hover over me"}
    </div>
  );
};

export default HoverBox;