import React, {useState} from 'react';
import data from '../../data/data.json';
import classNames from 'classnames/bind';
import CardItem from '../CardItem/CardItem.jsx';
import ButtonSlider from '../ButtonSlider/ButtonSlider.jsx';


import style from './game.module.scss';

function Game() {
  const [cardIndex, setCardIndex] = useState(1);

  function prevCard() {
    if (cardIndex !== 1) {
      setCardIndex(cardIndex - 1);
    } else if (cardIndex === 1) {
      setCardIndex(data.length);
    }
  }

  function nextCard() {
    if (cardIndex !== data.length) {
      setCardIndex(cardIndex + 1);
    } else if (cardIndex === data.length) {
      setCardIndex(1);
    }
  }

  return (
    <div className = {style.game}>
    <div className = {style.container}>
    <>
    {data.map((item, index) => {
      return(
        <div className={cardIndex === index + 1 ? classNames(style.slide, style.activeAnim) : classNames(style.slide)} key = {item.id}>
        <CardItem english = {item.english}
                  transcription = {item.transcription}
                  russian = {item.russian}
                  key = {item.id}
        />
        </div>
      )
    })}
    <ButtonSlider moveSlide={prevCard} direction={"prev"}/>
    <ButtonSlider moveSlide={nextCard} direction={"next"}/>
    </>
    </div >
    </div>
  );
}

export default Game;