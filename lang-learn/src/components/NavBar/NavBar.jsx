import React from 'react';
import style from './navBar.module.scss';

function NavBar() {
return (
<div className={style.navigation}>
  <ul>
    <li><a href="#">Главная</a></li>
    <li><a href="#">Таблица слов</a></li>
    <li><a href="#">Игра</a></li>
  </ul>
</div>
);
}

export default NavBar;