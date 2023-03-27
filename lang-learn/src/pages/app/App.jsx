import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import {PageHome, PageTable, PageGame, PageError} from '../index';
import Logo from '../../components/Logo/Logo';
import LogIn from '../../components/LogIn/LogIn';
import Main from '../../components/Main/Main';


import style from '../app/app.module.scss';

const setActive = ({isActive}) => isActive ? style.activeLink : '';

function App() {
  return (
    <Router>
    <div className={style.container}>
      <header>
      <div className={style.container}>
        <div className={style.row}>
          <Logo/>
          <div className={style.navigation}>
          <ul>
            <li><NavLink to="/" className={setActive}>Главная</NavLink></li>
            <li><NavLink to="/table-words" className={setActive}>Таблица слов</NavLink></li>
            <li><NavLink to="/game" className={setActive}>Игра</NavLink></li>
          </ul>
        </div>
          <LogIn/>
      </div>
      </div>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<PageHome/>}/>
          <Route path='/table-words' element={<PageTable/>}/>
          <Route path='/game' element={<PageGame/>}/>
          <Route path='*' element={<PageError/>}/>
        </Routes>
      </main>
      {/* <Main/> */}
    </div>
    </Router>
  );
}

export default App;
