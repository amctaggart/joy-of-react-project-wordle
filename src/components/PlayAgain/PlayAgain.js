import React from 'react';

import s from './PlayAgain.module.scss';

function PlayAgain({ handleResetGame }) {

  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    if (handleResetGame && buttonRef.current) {
      buttonRef.current.focus({ focusVisible: true });
    }
  }, [handleResetGame]);

  return (
    <button ref={buttonRef} className={s.outlineButton} onClick={handleResetGame}>Play Again</button>
  );
}

export default PlayAgain;
