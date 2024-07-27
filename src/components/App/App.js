import Game from '../Game';
import Header from '../Header';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.wrapper}>
      <Header />

      <div className={s.gameWrapper}>
        <Game />
      </div>
    </div>
  );
}

export default App;
