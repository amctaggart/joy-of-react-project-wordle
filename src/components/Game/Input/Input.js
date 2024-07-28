import React from 'react';

import s from './Input.module.scss';

function Input({ handleNewGuess, gameState }) {
  const [guess, setGuess] = React.useState('');

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (gameState && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameState]);

  function handleInputChange($event) {
    const formattedGuess = $event.target.value.toUpperCase().trim();
    setGuess(formattedGuess);
  }

  function handleFormSubmit($event) {
    $event.preventDefault();
    if(guess.length !== 5) {
      window.alert('Please enter a 5-letter word.');
      return;
    }
    const nextGuess = guess;
    handleNewGuess(nextGuess);
    setGuess('');
  }

  return (
    <form 
      className={s.guessInputWrapper} 
      onSubmit={$event => handleFormSubmit($event)}
    >
      <label htmlFor="guess-input">
        Enter guess:
      </label>
      <input 
        ref={inputRef}
        id="guess-input" 
        type="text" 
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5-letter word"
        value={guess} 
        disabled={gameState !== 'in-progress' ? 'disabled' : null}
        onChange={$event => handleInputChange($event)} 
      />
    </form>
  );
}

export default Input;
