import React, { useState } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

const MyFormChallenge = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Write a color" />
      <div className="color-boxes">
        {colors.map((color) => (
          <BoxColor key={color} color={color} inputValue={inputValue} />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;
