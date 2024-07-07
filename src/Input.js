import React from "react";
import "./index.css";

const Input = ({ colorValue, setColorValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="square__input"
        placeholder="Add color name"
        autoFocus
        required
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
