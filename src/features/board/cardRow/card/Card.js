import React from 'react';
// Add import statements below
import { useSelector } from 'react-redux';
import { selectVisibleIDs } from '../../boardSlice.js';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs);
  
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  // default text of each card is an image. rather than the card.contents.
  // cardText is returned by Card.
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id)) {
    // if id is in list of visible ids, display card.contents in cardText.
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (false) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (false) {
    click = () => {};
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
