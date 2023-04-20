import React, {useContext} from 'react';
import { globalContext } from '../../Context/MyContext';
import TableBody from '../TableBody/TableBody';


import style from './tableWords.module.scss';


function TableWords() {
  const {words, setWords, isLoaded, setIsLoaded} = useContext(globalContext);
  

  const numberArr = [];

  for (let i = 1; i <= words.length; i++){
      numberArr.push(i);
  }

return (
<div className={style.container}>
  <h3>Таблица слов</h3>
  <div className={style.table}>
    <div className={style.tableHead}>
      <div className={style.columnNumber}>№</div>
      <div className={style.columnLanguage}>английский</div>
      <div className={style.columnTranscription}>транскрипция</div>
      <div className={style.columnRussian}>русский</div>
      <div className={style.columnEdit}>редактирование</div>
    </div>
    <>
      {words.map((item, index)=> (<TableBody item={item} number={numberArr[index]} key={item.id} setIsLoaded={setIsLoaded} isLoaded={isLoaded}/>))}
    </>
  </div>
</div>
);
}



export default TableWords;