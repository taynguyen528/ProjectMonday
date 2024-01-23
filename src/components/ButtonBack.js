// ContinueButton.js
import React from "react";
import "../assets/styles/ButtonBack.css";

const ButtonBack = ({ onClick }) => {
    return (
        <button className="back-button" onClick={onClick}>
            <i className="fa-solid fa-chevron-left"></i>
            <span>Back</span>
        </button>
    );
};

export default ButtonBack;
