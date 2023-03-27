import React from 'react';
import { Link } from 'react-router-dom';
import style from './pageHome.module.scss';

function PageHome() {
return (
<div className={style.container}>
  <div className={style.row}>
    <div className={style.column}>
      <img className={style.img} src='./assets/img/homepage-img.png' alt='learn_language' />
    </div>
    <div className={style.column}>
      <h1>Learn Language</h1>
      <p>Приложение для изучения иностранного языка и расширения словарного запаса.</p>
      <Link to="/table-words">Старт</Link>
    </div>
  </div>
</div>
);
}

export default PageHome;