import React from 'react';

const GameResult = ({ feedback, onReset }) => (
  <div>
    <p>{feedback}</p>
    <button onClick={onReset}>Заново</button>
  </div>
);

export default GameResult;
