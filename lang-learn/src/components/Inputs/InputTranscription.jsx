import React, { useState, useEffect } from 'react';

import style from './input.module.scss';

function Input({transcription, getValueInputTranscription, valueInputTranscription}) {
const [input, setInput] = useState(transcription);

useEffect(() => {
  getValueInputTranscription(valueInputTranscription);
}, [])


  return (
    <>
      <input className={style.input} type="text" value={input} onChange={(event)=>{setInput(event.target.value)}}/>
    </>
  );
}

export default Input;
