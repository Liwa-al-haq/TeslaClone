import React from "react";
import "./Button.css";
const Button = ({ imp, text, link,onClick }) => {
  return (
    <div
      className={`button ${imp == "secondary" ? "button_white" : ""}`}
    >
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
