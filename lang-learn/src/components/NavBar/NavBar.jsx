import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './navBar.module.scss';

const setActive = ({isActive}) => isActive ? style.activeLink : '';

function NavBar() {
return (
<div className={style.navigation}>
  <ul>
    <li><NavLink to="/" className={setActive}>Главная</NavLink></li>
    <li><NavLink to="/table-words" className={setActive}>Таблица слов</NavLink></li>
    <li><NavLink to="/game" className={setActive}>Игра</NavLink></li>
  </ul>
</div>
);
}

export default NavBar;