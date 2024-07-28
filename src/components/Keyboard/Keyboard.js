import React from 'react';

import s from './Keyboard.module.scss';

import { KEYBOARD } from '../../constants';

// modifer: 'correct' | 'incorrect' | 'misplaced'
function Key({ children, modifier }) {
  return (
    <div className={`${s.keyboardButton} ${modifier ? s[modifier] : ''}`}>{children}</div>
  );
}

function Keyboard({ checkedGuesses }) {
  console.log('checkedGuesses:', checkedGuesses);
  const flattenedCheckedGuesses = checkedGuesses.flat();
  console.log('flattenedCheckedGuesses:', flattenedCheckedGuesses);

  function getLetterStatusLookup(checkedGuesses) {
    let statusByLetter = {};

    const flattenedCheckedGuesses = checkedGuesses.flat();
    flattenedCheckedGuesses.forEach(({letter, status}) => {
      let currentLetterStatus = statusByLetter[letter];

      if(!currentLetterStatus) {
        statusByLetter[letter] = status;
      } else if(currentLetterStatus === 'correct') {
        // do nothing
      } else if(currentLetterStatus === 'misplaced' && status === 'incorrect') {
        // do nothing
      } else {
        statusByLetter[letter] = status;
      }
    });
    return statusByLetter;
  }

  const letterStatusLookup = getLetterStatusLookup(flattenedCheckedGuesses);

  return (
    <div className={s.keyboard}>
      {KEYBOARD.map(row => (
        <div className={s.keyboardRow}>
          {row.map(letter => (
            <Key key={letter} modifier={letterStatusLookup[letter]}>{letter}</Key>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
