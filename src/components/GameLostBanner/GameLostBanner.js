import React from 'react';

import Banner from '../Banner';
import PlayAgain from '../PlayAgain';

function GameLostBanner({ answer, handleResetGame }) {
  return (
    <Banner modifierClass="sad">
      <p>Sorry, the correct answer was <strong>{answer}</strong>.</p>
      <PlayAgain handleResetGame={handleResetGame} />
    </Banner>
  );
}

export default GameLostBanner;
