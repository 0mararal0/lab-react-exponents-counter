import React from "react";

export const Exponent = ({ num, exponent }) => {
  let showOp = "";
  for (let i = 0; i < exponent; i++) {
    if (i === exponent - 1) {
      showOp = showOp + exponent;
    } else {
      showOp = showOp + num + " * ";
    }
  }

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}
        <sup>{exponent}</sup>
        <small>{exponent}</small>
      </p>
      <p className="exponent-result">
        {showOp} = <span className="total">{num ** exponent}</span>
      </p>
    </div>
  );
};
