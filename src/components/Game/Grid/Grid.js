import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../../constants';
import { range } from '../../../utils';

import Row from './Row/Row';

import s from './Grid.module.scss';

function Grid({ guesses, answer }) {
  console.log('grid guesses:', guesses);
  
  return (
    <div className={s.guessResults}>
      {range(NUM_OF_GUESSES_ALLOWED).map((num, i, array) => (
        <Row key={num} guess={guesses[num]} answer={answer} firstRow={i === 0} lastRow={i === array.length - 1}></Row>
      ))}
    </div>
  );
}

export default Grid;