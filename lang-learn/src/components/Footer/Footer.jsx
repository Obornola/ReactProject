import React from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import style from './footer.module.scss'

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.row}>
      <NavBar/>
      </div>
      </div>
    </div>
  );
}

export default Footer;
