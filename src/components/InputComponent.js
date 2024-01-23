import React from "react";
import "../assets/styles/InputComponent.css";

const InputComponent = ({
    name,
    id,
    value,
    label,
    onChange = () => {},
    defaultChecked,
}) => {
    return (
        <div className="InputComponent">
            <input
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={() => onChange(value)}
                defaultChecked={defaultChecked}
            ></input>
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default InputComponent;
