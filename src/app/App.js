import './App.css';
import React from 'react';
import { Score } from '../features/score/Score.js';
import { Board } from '../features/board/Board.js';
// Add import statements below
import { useDispatch } from 'react-redux';
// import actions!
import { setBoard } from '../features/board/boardSlice.js';


const App = () => {
  // Add dispatch variable below
  const dispatch = useDispatch(); //the useDispatch() hook returns a reference to the store.dispatch() method.

  const startGameHandler = () => {
    // Add action dispatch below
    // to start the game, set the board, randomise the cards. 

  };

  const tryAgainHandler = () => {
    // Add action dispatch below
    
  };

  return (
    <div className="App">
      <Score />
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler} className="start-button">
          Start Game
        </button>
        <button onClick={tryAgainHandler} className="try-new-pair-button">
          Try New Pair
        </button>
      </footer>
    </div>
  );
};

export default App;
