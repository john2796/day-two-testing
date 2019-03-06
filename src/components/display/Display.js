import React from "react";

const Display = ({ balls, strike }) => {
  return (
    <div>
      <h1 data-testid="ball">Balls : {balls}</h1>
      <h1 data-testid="strike">strike : {strike}</h1>
    </div>
  );
};

export default Display;
