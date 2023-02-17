import React from 'react';
import Logo from '../Logo/Logo.jsx';
import LogIn from '../LogIn/LogIn.jsx';
import style from '../Header/header.module.scss';
import NavBar from '../NavBar/NavBar.jsx';

function Header() {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.row}>
      <Logo/>
      <NavBar/>
      <LogIn/>
      </div>
      </div>
    </div>
  );
}

export default Header;
