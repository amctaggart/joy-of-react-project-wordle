import React from 'react';

import Banner from '../Banner';
import PlayAgain from '../PlayAgain';

function GameWonBanner({ numOfGuesses, handleResetGame }) {
  return (
    <Banner modifierClass="happy">
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}</strong>.
      </p>
      <PlayAgain handleResetGame={handleResetGame}/>
    </Banner>
  );
}

export default GameWonBanner;
