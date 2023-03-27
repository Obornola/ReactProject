import React from 'react';
import { Link } from 'react-router-dom';

import style from '../PageError/pageError.module.scss';

function PageError() {
  return (
    <div className={style.background}>
      <div className={style.image}>
      <img src='./assets/img/icon_error_page.png' alt='icon'/>
      </div>
      <div className={style.text}>
      <h1>Вы потерялись?</h1>
      <p>Похоже, что страница, которую вы ищете, не найдена</p>
      <Link to="/">Возвращайтесь домой</Link>
      </div>
    </div>
  );
}

export default PageError;
