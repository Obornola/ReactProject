import React, { useState, useEffect } from 'react';

import style from './input.module.scss';

function Input({getValueInputTranscription, valueInputTranscription}) {
const [input, setInput] = useState('');

useEffect(() => {
  getValueInputTranscription(valueInputTranscription);
}, [])


  return (
    <>
    {console.log(input)}
      <input className={style.input} type="text" value={input} onChange={(event)=>{setInput(event.target.value)}}/>
    </>
  );
}

export default Input;
