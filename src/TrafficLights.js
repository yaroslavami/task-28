import React, { useState } from 'react';
import './TrafficLights.css';

const TrafficLights = () => {
  const [currentColor, setCurrentColor] = useState('red');

  const changeColor = () => {
    if (currentColor === 'red') {
      setCurrentColor('yellow');
    } else if (currentColor === 'yellow') {
      setCurrentColor('green');
    } else {
      setCurrentColor('red');
    }
  };

  return (
    <div>
      <div className="traffic-light">
        <div className={`light ${currentColor === 'red' ? 'red' : ''}`}></div>
        <div className={`light ${currentColor === 'yellow' ? 'yellow' : ''}`}></div>
        <div className={`light ${currentColor === 'green' ? 'green' : ''}`}></div>
      </div>
      <button onClick={changeColor}>Змінити колір</button>
    </div>
  );
};

export default TrafficLights;
