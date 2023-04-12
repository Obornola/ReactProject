import React from 'react';
import style from './input.module.scss';

function Input(props) {
    const {id, name, type, value, onChange, pattern, required, errorMessage, errorMessageEmpty, ...inputProps} = props;


  return (
    <>
    {console.log("render")}
      <input className={style.input} value={value} name={name} type={type} pattern={pattern} {...inputProps} onChange={onChange} required={required}/>
        {!value ?
            <span className={style.errors}>{errorMessageEmpty}</span>
            :
            <span className={style.errors}>{errorMessage}</span>
        }       
    </>
  );
}

export default Input;
