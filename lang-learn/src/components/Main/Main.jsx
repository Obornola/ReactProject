import React from 'react';
import SelectionLang from '../SelectionLang/SelectionLang.jsx';
import TableMain from '../TableMain/TableMain.jsx';
import style from './main.module.scss';

function Main() {
return (
<div className={style.main}>
<div className={style.container}>
  <SelectionLang />
  <TableMain/>
  </div> 
</div>
);
}

export default Main;