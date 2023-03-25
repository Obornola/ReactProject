import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import LogIn from '../../components/LogIn/LogIn';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';


import style from '../app/app.module.scss';

function App() {
  return (
    <Router>
    <div className={style.container}>
      <header>
      <div className={style.header}>
      <div className={style.container}>
        <div className={style.row}>
          <Logo/>
          <div className={style.navigation}>
          <ul>
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/table-words">Таблица слов</NavLink></li>
            <li><NavLink to="/game">Игра</NavLink></li>
          </ul>
        </div>
          <LogIn/>
      </div>
      </div>
    </div>
      </header>
      <Main/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
