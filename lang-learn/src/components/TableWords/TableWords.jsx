import React from 'react';
import TableBody from '../TableBody/TableBody';
import words from '../../data/words.json';
import style from './tableWords.module.scss';

const numberArr = [];

  for (let i = 1; i <= words.length; i++){
      numberArr.push(i);
  }

function TableWords() {
return (
<div className={style.container}>
  <h3>Таблица слов</h3>
  <div className={style.table}>
    <div className={style.tableHead}>
      <div className={style.columnNumber}>№</div>
      <div className={style.columnLanguage}>english</div>
      <div className={style.columnTranscription}>transcription</div>
      <div className={style.columnRussian}>russian</div>
      <div className={style.columnEdit}>edit</div>
    </div>
    <>
      {
      words.map((item, index)=>
      <TableBody english={item.english} 
                 transcription={item.transcription} 
                 russian={item.russian}
                 number={numberArr[index]}
                 key={item.id}>
      </TableBody>
      )}
    </>
  </div>
</div>
);
}



export default TableWords;