import React, { useState } from "react";

function ButtonClickExercise() {
    // State to manage text and background color
    const [clicked, setClicked] = useState(false);

    // Function to handle click
    const handleClick = () => {
        setClicked(true); // Set clicked state to true
    };

    return (
        <button 
            onClick={handleClick}
            style={{ 
                backgroundColor: clicked ? "green" : "blue", 
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer"
            }}
        >
            {clicked ? "Thank You" : "Click Me"}
        </button>
    );
}

export default ButtonClickExercise;