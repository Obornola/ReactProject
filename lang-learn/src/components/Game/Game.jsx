import React, {useState} from 'react';
import words from '../../data/words.json';
import CardItem from '../CardItem/CardItem';
import ButtonSlider from '../ButtonSlider/ButtonSlider';
import Counter from '../Counter/Counter';

import style from './game.module.scss';

function Game() {
  const [cardIndex, setCardIndex] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const arrWordsId = [];
  console.log(arrWordsId);
  
  function prevCard() {
    if (cardIndex === 0) {
      setCardIndex(words.length-1);
    } else if (cardIndex !== 0) {
      setCardIndex(cardIndex - 1);
    }
  }

  function nextCard() {
    if (cardIndex !== words.length-1) {
      setCardIndex(cardIndex + 1);
    } else if (cardIndex === words.length-1) {
      setCardIndex(0);
    }
  }

  return (
    <div className = {style.game}>
      <div className = {style.container} key={cardIndex}>
        <CardItem words={words[cardIndex]} setCardCount={setCardCount} cardCount={cardCount} arrWordsId={arrWordsId}/>
        <ButtonSlider moveSlide={prevCard} direction={"prev"}/>
        <ButtonSlider moveSlide={nextCard} direction={"next"}/>
        <div className={style.counter}>
          <Counter cardCount={cardCount}/>
        </div>
      </div >
    </div>
  );
}

export default Game;