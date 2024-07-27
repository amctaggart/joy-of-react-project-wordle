import React from 'react';

import { range } from '../../../../utils';
import { checkGuess } from '../../../../game-helpers';

function Cell({ letter, status}) {
  return (
    <span className={`cell ${status}`}>
      {letter}
    </span>
  );
}

function Row({ guess, answer }) {
  const checkedGuess = guess ? checkGuess(guess, answer) : [];

  return (
    <p className="guess">
      {range(5).map((i) => (
        <Cell key={i} letter={checkedGuess[i]?.letter ?? ''} status={checkedGuess[i]?.status} />
      ))}
    </p>
  );
}

export default Row;