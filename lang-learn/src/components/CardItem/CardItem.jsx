import React, { useState } from 'react';
import style from './cardItem.module.scss';

function CardItem({english, transcription, russian}) {
const [isTranslate, setIsTranslate] = useState(true);

function getTranslateWord(){
setIsTranslate(!isTranslate);
}
return (
<>
{isTranslate ? (
  <>
  <div className={style.card}>
    <div className={style.column}>
      <div className={style.itemLanguage}>{english}</div>
      <div className={style.itemTranscription}>{transcription}</div>
      <button className={style.itemButton} onClick={getTranslateWord}>Посмотреть перевод</button>
    </div>
  </div>
  </>
) : (
<>
<div className={style.card}>
    <div className={style.column}>
      <div className={style.itemLanguage}>{english}</div>
      <div className={style.itemTranscription}>{transcription}</div>
      <div className={style.itemRussian}>{russian}</div>
    </div>
  </div>
</>
  )}
</>
);
}

export default CardItem;