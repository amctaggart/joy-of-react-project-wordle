import React from 'react';

function PlayAgain({ handleResetGame }) {

  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    if (handleResetGame && buttonRef.current) {
      buttonRef.current.focus({ focusVisible: true });
    }
  }, [handleResetGame]);

  return (
    <button ref={buttonRef} className="outline-button" onClick={handleResetGame}>Play Again</button>
  );
}

export default PlayAgain;
