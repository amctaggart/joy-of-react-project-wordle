import React from 'react';

import { range } from '../../../../utils';

import s from './Row.module.scss';

function Cell({ letter, status, topLeft, topRight, bottomLeft, bottomRight }) {
  return (
    <span 
    className={`
      ${s.cell} 
      ${s[status]}
      ${topLeft ? s.topLeft : ''}
      ${topRight ? s.topRight : ''}
      ${bottomLeft ? s.bottomLeft : ''}
      ${bottomRight ? s.bottomRight : ''}
    `}
    >
      {letter}
    </span>
  );
}

function Row({ checkedGuess, firstRow, lastRow }) {
  return (
    <p 
      className={s.guess}
    >
      {range(5).map((num, i, array) => (
        <Cell 
          key={num} 
          letter={checkedGuess ? checkedGuess[num]?.letter : ''} 
          status={checkedGuess ? checkedGuess[num]?.status : undefined} 
          topLeft={firstRow && i === 0}
          topRight={firstRow && i === array.length - 1}
          bottomLeft={lastRow && i === 0}
          bottomRight={lastRow && i === array.length - 1}
        />
      ))}
    </p>
  );
}

export default Row;