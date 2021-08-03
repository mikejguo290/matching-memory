import React from 'react';
// Add import statements below
import { useSelector , useDispatch } from 'react-redux';
// import selectors;
import { selectVisibleIDs, selectMatchedIDs } from '../../boardSlice.js';
// import action creators; 
import { flipCard } from '../../boardSlice.js';


let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id))
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
    click = () => {}; // set click function to return nothing instead of flipHandler(id); no flip handler, no actions dispatched. - clicking wil do nothing!
  }

  // 2nd if statement
  // implement card id array membership check
  // check if id is in array of ids of cards that match. 
  // Using the matchedIDs data, you can now reveal the matched cards by changing their cardStyle to 'matched'
  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length===2) {
    click = () => {}; // set click function to return nothing instead of flipHandler(id); - clicking wil do nothing!
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
