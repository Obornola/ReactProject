import React, { useState, useEffect } from 'react';

import style from './input.module.scss';

function Input({russian, getValueInputRussian, valueInputRussian}) {
const [input, setInput] = useState(russian);

useEffect(() => {
  getValueInputRussian(valueInputRussian);
}, [])


  return (
    <>
      <input className={style.input} type="text" value={input} onChange={(event)=>{setInput(event.target.value)}}/>
    </>
  );
}

export default Input;
