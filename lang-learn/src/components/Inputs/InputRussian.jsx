import React, { useState, useEffect } from 'react';

import style from './input.module.scss';

function Input({getValueInputRussian, valueInputRussian}) {
const [input, setInput] = useState('');

useEffect(() => {
  getValueInputRussian(valueInputRussian);
}, [])


  return (
    <>
    {console.log(input)}
      <input className={style.input} type="text" value={input} onChange={(event)=>{setInput(event.target.value)}}/>
    </>
  );
}

export default Input;
