import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../../constants';
import { range } from '../../../utils';

import Row from './Row/Row';

function Grid({ guesses, answer }) {
  console.log('grid guesses:', guesses);
  
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Row key={i} guess={guesses[i]} answer={answer}></Row>
      ))}
    </div>
  );
}

export default Grid;