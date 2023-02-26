import React from 'react';
import SelectionLang from '../SelectionLang/SelectionLang.jsx';
import TableWords from '../TableWords/TableWords.jsx';
import Game from '../Game/Game.jsx';
import style from './main.module.scss';

function Main() {
return (
<div className={style.main}>
<div className={style.container}>
  <SelectionLang />
  <TableWords/>
  <Game/>
  </div> 
</div>
);
}

export default Main;