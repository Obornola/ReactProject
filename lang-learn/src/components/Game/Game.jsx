import React, {useState} from 'react';
import words from '../../data/words.json';
import classNames from 'classnames/bind';
import CardItem from '../CardItem/CardItem.jsx';
import ButtonSlider from '../ButtonSlider/ButtonSlider.jsx';


import style from './game.module.scss';

function Game() {
  const [cardIndex, setCardIndex] = useState(0);

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
      <div className = {style.container}>
        {words.map((item, index) => {
          return(
            <div className={cardIndex === index ? classNames(style.slide, style.activeAnim) : classNames(style.slide)} key = {item.id}>
              <CardItem words={words[cardIndex]} cardIndex={cardIndex} key={cardIndex}/>
            </div>
    )
    })
    }
    <ButtonSlider moveSlide={prevCard} direction={"prev"}/>
    <ButtonSlider moveSlide={nextCard} direction={"next"}/>
      </div >
    </div>
  );
}

export default Game;