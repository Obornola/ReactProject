import React from 'react';
import words from '../../data/words.json';

import style from './counter.module.scss';

function Counter({cardCount}) {

  return (
    <div className={style.container}>
      <p>{cardCount} из {words.length} карточек</p>
    </div>
  );
}

export default Counter;
