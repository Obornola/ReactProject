import React from 'react';
import CardItem from '../CardItem/CardItem.jsx';
import data from '../../data/data.json';

import style from './game.module.scss';

function Game() {
return (
<div className={style.game}>
  <div className={style.container}>
    <>
    {
      data.map((item)=>
      <CardItem english={item.english} 
                transcription={item.transcription}
                russian={item.russian}
                key={item.id}/>
    )}
    </>
  </div>
</div>
);
}

export default Game;