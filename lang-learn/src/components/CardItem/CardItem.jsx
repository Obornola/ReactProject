import React, {useState, useEffect, useRef} from 'react';
import classNames from 'classnames/bind';
import style from './cardItem.module.scss';

function CardItem({words, setCardCount, cardCount, arrWordsId}) {
const {english, transcription, russian} = words;
const [isTranslate, setIsTranslate] = useState(true);
const buttonRef = useRef();

useEffect(() => {
  setIsTranslate(true);
  buttonRef.current.focus();
}, [words]);

function getTranslateWord(){
  setIsTranslate(!isTranslate);
  setCardCount(cardCount + 1);
  arrWordsId.push(words.id);
  console.log(arrWordsId);
  }
 
return (
  <div className={style.container}>
    <div className = {style.card}>
      <div className={style.column}>
        <div className={classNames(style.itemLanguage, style.animated)}>{english}</div>
        <div className={style.itemTranscription}>{transcription}</div>
        {isTranslate ? (
        <button className={style.itemButton} onClick={getTranslateWord} ref={buttonRef}>Посмотреть перевод</button>
        ) : (
        <div className={classNames(style.itemRussian, style.animated)}>{russian}</div>
        )}
      </div>
    </div>
  </div>
);
}

export default CardItem;