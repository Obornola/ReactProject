import React from 'react';
import Footer from '../../components/Footer/Footer';
import Game from '../../components/Game/Game';
import Header from '../../components/Header/Header';

import style from './pageGame.module.scss';

function pageGame() {
  return (
    <div className={style.wrapper}>
      <Header/>
      <Game/>
      <Footer/>
    </div>
  );
}

export default pageGame;
