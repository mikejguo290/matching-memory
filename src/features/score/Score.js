import React from 'react';
// Add import statement below
import { useSelector } from 'react-redux'

// import selectors;
import { selectMatchedIDs } from '../board/boardSlice.js';

export const Score = () => {
  // score is based on the number of cards matched
  // Add selected data variable below

  

  return (
    // implement selected data inside <div>
    <div className="score-container">Matched: 0</div>
  );
};