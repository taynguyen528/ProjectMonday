import React from "react";
import "../assets/styles/ButtonContinue.css";

const ButtonContinue = ({ onClick, disabled }) => {
    return (
        <button
            className="continue-button"
            onClick={onClick}
            disabled={disabled}
        >
            <span>Continue</span>
            <i className="fa-solid fa-chevron-right"></i>
        </button>
    );
};

export default ButtonContinue;
