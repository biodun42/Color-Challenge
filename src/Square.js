import React from "react";
import "./index.css";

const Square = ({ colorValue }) => {
  return (
    <section className="square">
      <h2>{colorValue ? colorValue : "Empty Value"}</h2>
      <div
        className="square__color"
        style={{
          backgroundColor: colorValue,
        }}
      ></div>
    </section>
  );
};
Square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Square;
