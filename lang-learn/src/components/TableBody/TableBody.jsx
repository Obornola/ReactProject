import React, { useState, useEffect } from 'react';
import { HandySvg } from 'handy-svg';
import classNames from 'classnames/bind';
import deleteBtn from './deleteBtn.svg';
import editBtn from './editBtn.svg';
import saveBtn from './saveBtn.svg';
import closeBtn from './closeBtn.svg';

import style from './tableBody.module.scss';


function TableBody({number, english, transcription, russian}) {
const [isEdit, setIsEdit] = useState(true);

const [englishInput, setEnglishInput] = useState(english);
const [transcriptionInput, setTranscriptionInput] = useState(transcription);
const [russianInput, setRussianInput] = useState(russian);

const [englishErrorMessage, setEnglishErrorMessage] = useState('');
const [transcriptionErrorMessage, setTranscriptionErrorMessage] = useState('');
const [russianErrorMessage, setRussianErrorMessage] = useState('');

const [inputsValid, setInputsValid] = useState(false);

useEffect(() => {
  if(englishErrorMessage || transcriptionErrorMessage || russianErrorMessage){
    setInputsValid(false);
  }else{
    setInputsValid(true);
  }
}, [englishErrorMessage, transcriptionErrorMessage, russianErrorMessage]);

const englishInputHandler = (event) => {
  setEnglishInput(event.target.value.toLowerCase());
  const re = /^[a-zA-Z]+(?:\s[a-zA-Z.-]+)*$/;
  if(!re.test(String(event.target.value).toLowerCase())){
    setEnglishErrorMessage('Поле заполняется английскими буквами');
    if(!event.target.value){
    setEnglishErrorMessage('Поле не заполнено');
    }
  }else{
    setEnglishErrorMessage('');
  }
}

const transcriptionInputHandler = (event) => {
  setTranscriptionInput(event.target.value.toLowerCase());
    if(!event.target.value){
      setTranscriptionErrorMessage('Поле не заполнено');
    }else{
      setTranscriptionErrorMessage('');
  }
}

const russianInputHandler = (event) => {
  setRussianInput(event.target.value.toLowerCase());
  const re = /^[а-яёА-ЯЁ]+(?:\s[а-яёА-ЯЁ.-]+)*$/;
  if(!re.test(String(event.target.value).toLowerCase())){
    setRussianErrorMessage('Поле заполняется русскими буквами');
    if(!event.target.value){
      setRussianErrorMessage('Поле не заполнено');
    }
  }else{
    setRussianErrorMessage('');
  }
}

function getEditWord(){
  setIsEdit(!isEdit);
  }
  
  function handleCansel(){
    setIsEdit(true);
  }

  function handleSave(){
    console.log(setEnglishInput(englishInput));
    console.log(setTranscriptionInput(transcriptionInput));
    console.log(setEnglishInput(russianInput));
  }

return (
<>
  {isEdit ? (
  <>
    <div className={style.tableBody}>
      <div className={style.columnNumber}>{number}</div>
      <div className={style.columnLanguage}>{english}</div>
      <div className={style.columnTranscription}>{transcription}</div>
      <div className={style.columnRussian}>{russian}</div>
      <div className={style.columnEdit}>
        <button className={classNames(style.button, style.btnEdit)} onClick={getEditWord}>
          <HandySvg src={editBtn} className={style.btnEditSvg} width="16" height="16" fill="none"/>
        </button>
      </div>
    </div>
  </>
  ) : (
  <>
    <div className={style.tableBody}>
    <div className={style.columnNumber}>{number}</div>
      <div className={style.columnLanguage}>
        <input onChange={event => englishInputHandler(event)}
              name="english"
              type="text"
              value={englishInput}
        />
        {englishErrorMessage && <div className={style.errors}>{englishErrorMessage}</div>}
      </div>
      <div className={style.columnTranscription}>
        <input onChange={event => transcriptionInputHandler(event)}
              name="transcription"
              type="text"
              value={transcriptionInput}
        />
        {transcriptionErrorMessage && <div className={style.errors}>{transcriptionErrorMessage}</div>}
      </div>
      <div className={style.columnRussian}>
        <input onChange={event => russianInputHandler(event)}
              name="russian"
              type="text"
              value={russianInput}
        />
        {russianErrorMessage && <div className={style.errors}>{russianErrorMessage}</div>}
      </div>
      <div className={style.columnEdit}>
        <button onClick={handleSave} className={classNames(style.button, style.btnSave)} disabled = {!inputsValid}>
          <HandySvg src={saveBtn} className={style.btnSaveSvg} width="16" height="16" fill="none" />
        </button>
        <button className={classNames(style.button, style.btnDelete)}>
          <HandySvg src={deleteBtn} className={style.btnDeleteSvg} width="16" height="16" fill="none" />
        </button>
        <button className={classNames(style.button, style.btnClose)} onClick={handleCansel}>
          <HandySvg src={closeBtn} className={style.btnCloseSvg} width="16" height="16" fill="none" />
        </button>
      </div>
    </div>
  </>
  )}
</>
);
}

export default TableBody;