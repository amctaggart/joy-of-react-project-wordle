import React from 'react';

import Input from './Input/Input';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import Grid from './Grid';
import GameLostBanner from '../GameLostBanner';
import GameWonBanner from '../GameWonBanner';
import Keyboard from '../Keyboard';

import s from './Game.module.scss';

function Game() {
  // Pick a random answer word.
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.warn('answer:', answer);

  const [guesses, setGuesses] = React.useState([]);
  const [checkedGuesses, setCheckedGuesses] = React.useState([]);

  // 'in-progress' | 'lost' | 'won'
  const [gameState, setGameState] = React.useState('in-progress');

  function handleNewGuess(nextGuess) {
    const nextGuesses = [...guesses, nextGuess]
    setGuesses(nextGuesses);

    setCheckedGuesses([...checkedGuesses, checkGuess(nextGuess, answer)]);

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
    setCheckedGuesses([]);
    setGameState('in-progress');
    setAnswer(sample(WORDS));
    console.warn('answer:', answer);
  }

  return (
    <>
      <Grid checkedGuesses={checkedGuesses}></Grid>
      <Keyboard checkedGuesses={checkedGuesses}/>
      <Input handleNewGuess={handleNewGuess} gameState={gameState} ></Input>
      { gameState === 'lost' && <GameLostBanner answer={answer} handleResetGame={handleResetGame} />}
      { gameState === 'won' && <GameWonBanner numOfGuesses={guesses.length} handleResetGame={handleResetGame} />}
    </>
  );
}

export default Game;
