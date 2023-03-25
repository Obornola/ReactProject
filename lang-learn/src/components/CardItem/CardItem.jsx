import React, {useState} from 'react';
import style from './cardItem.module.scss';

function CardItem({words}, cardIndex) {
const {english, transcription, russian} = words;
const [isTranslate, setIsTranslate] = useState(true);

function getTranslateWord(){
  setIsTranslate(!isTranslate);
  }

return (
  <>
  <div className={style.card} key={cardIndex}>
    <div className={style.column}>
      <div className={style.itemLanguage}>{english}</div>
      <div className={style.itemTranscription}>{transcription}</div>
      {isTranslate ? 
      <button className={style.itemButton} onClick={getTranslateWord}>Посмотреть перевод</button>
      :
      <div className={style.itemRussian}>{russian}</div>
      }
    </div>
  </div>
</>
);
}

export default CardItem;