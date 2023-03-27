import React from 'react';
import { Link } from 'react-router-dom';
import style from './logo.module.scss';

function Logo() {
return (
<Link to="/">
<div className={style.logo}>
  <img src='assets/img/global-education.png' alt='global-education' />
  <span>Learn Language</span>
</div>
</Link>
);
}

export default Logo;