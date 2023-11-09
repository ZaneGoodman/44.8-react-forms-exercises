import React from "react";

const Box = ({ backgroundColor, width, height }) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor, 
        width: width, 
        height: height }}
    ></div>
  );
};

export default Box;
