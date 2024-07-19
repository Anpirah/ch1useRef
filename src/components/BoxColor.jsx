import React, { useRef } from 'react';

const BoxColor = ({ color, inputValue }) => {
  const boxRef = useRef();

  const matchColor = inputValue.toLowerCase() === color.toLowerCase();

  return (
    <div
      ref={boxRef}
      className={`box ${color}`}
      style={{ backgroundColor: matchColor ? color : 'transparent' }}
    >
      {matchColor ? `I am the color ${color}` : `I am not the color ${inputValue}`}
    </div>
  );
};

export default BoxColor;
