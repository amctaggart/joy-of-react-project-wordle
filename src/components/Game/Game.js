import React from 'react';

import Input from './Input/Input';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import Grid from './Grid';
import GameLostBanner from '../GameLostBanner';
import GameWonBanner from '../GameWonBanner';


function Game() {
  // Pick a random answer word.
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.warn('answer:', answer);

  const [guesses, setGuesses] = React.useState([]);
  // 'in-progress' | 'lost' | 'won'
  const [gameState, setGameState] = React.useState('in-progress');

  function handleNewGuess(nextGuess) {
    const nextGuesses = [...guesses, nextGuess]
    setGuesses(nextGuesses);

    if (nextGuess === answer) {
      setGameState('won');
      return;
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost');
      return
    }
  }

  function handleResetGame() {
    setGuesses([]);
    setGameState('in-progress');
    setAnswer(sample(WORDS));
    console.log({ answer });
  }

  return (
    <>
      <Grid guesses={guesses} answer={answer}></Grid>
      <Input handleNewGuess={handleNewGuess} gameState={gameState} ></Input>
      { gameState === 'lost' && <GameLostBanner answer={answer} handleResetGame={handleResetGame} />}
      { gameState === 'won' && <GameWonBanner numOfGuesses={guesses.length} handleResetGame={handleResetGame} />}
    </>
  );
}

export default Game;
