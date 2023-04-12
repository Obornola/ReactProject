import React, { useState, useEffect } from 'react';

import style from './input.module.scss';

function Input({english, getValueInputEnglish, valueInputEnglish}) {
const [input, setInput] = useState(english);

useEffect(() => {
  getValueInputEnglish(valueInputEnglish);
}, [])


  return (
    <>
      <input className={style.input} type="text" value={input} onChange={(event)=>{setInput(event.target.value)}}/>
    </>
  );
}

export default Input;
