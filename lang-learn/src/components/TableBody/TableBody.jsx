import React, { useState, useEffect } from 'react';
import { HandySvg } from 'handy-svg';
import classNames from 'classnames/bind';
import deleteBtn from './deleteBtn.svg';
import editBtn from './editBtn.svg';
import saveBtn from './saveBtn.svg';
import closeBtn from './closeBtn.svg';
import PUT from '../../Services/PUT';
import DELETE from '../../Services/DELETE';

import style from './tableBody.module.scss';


function TableBody({item, number, setIsLoaded, isLoaded}) {


const [isEdit, setIsEdit] = useState(true);
const [objectWords, setObjectWords] = useState();

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

function handleEditWords(){
  setIsEdit(!isEdit);
  setObjectWords(item);
  }

  function handleChangeInput(nameKey, event){
    const copyObject = {...objectWords};
    copyObject[nameKey] = event.target.value.toLowerCase();

    switch (nameKey){
      case "english":
        const regularEnglish = /^[a-zA-Z]+(?:\s[a-zA-Z.-]+)*$/;
        if(!regularEnglish.test(String(event.target.value).toLowerCase())){
          setEnglishErrorMessage('Поле заполняется английскими буквами');
          if(!event.target.value){
            setEnglishErrorMessage('Поле не заполнено');
          }
        }else{
          setEnglishErrorMessage('');
        }
          break;
      case "transcription":
        if(!event.target.value){
          setTranscriptionErrorMessage('Поле не заполнено');
          }else{
            setTranscriptionErrorMessage('');
          }
          break;
      case "russian":
        const regularRussian = /^[а-яёА-ЯЁ]+(?:\s[а-яёА-ЯЁ.-]+)*$/;
        if(!regularRussian.test(String(event.target.value).toLowerCase())){
          setRussianErrorMessage('Поле заполняется русскими буквами');
          if(!event.target.value){
            setRussianErrorMessage('Поле не заполнено');
            }
        } else {
          setRussianErrorMessage('');
        }
          break;
    }
    
    setObjectWords(copyObject);
  }
  
  function handleCansel(){
    setIsEdit(true);
  }

  function saveEdit(){
    PUT.putServer(item.id, objectWords);
    setIsLoaded(!isLoaded);
  }

  function deleteWord(){
    DELETE.deleteData(item.id);
    setIsLoaded(!isLoaded);
  }

  

return (
<>
{console.log(objectWords)}
  {isEdit ? (
  <>
    <div className={style.tableBody}>
      <div className={style.columnNumber}>{number}</div>
      <div className={style.columnLanguage}>{item.english}</div>
      <div className={style.columnTranscription}>{item.transcription}</div>
      <div className={style.columnRussian}>{item.russian}</div>
      <div className={style.columnEdit}>
        <button className={classNames(style.button, style.btnEdit)} onClick={handleEditWords}>
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
        <input onChange={(event) => {
          handleChangeInput("english", event);
        }}
              name="english"
              type="text"
              defaultValue={objectWords.english}
        />
        {englishErrorMessage && <div className={style.errors}>{englishErrorMessage}</div>}
      </div>
      <div className={style.columnTranscription}>
        <input onChange={(event) => {
          handleChangeInput("transcription", event);
        }}
              name="transcription"
              type="text"
              defaultValue={objectWords.transcription}
        />
        {transcriptionErrorMessage && <div className={style.errors}>{transcriptionErrorMessage}</div>}
      </div>
      <div className={style.columnRussian}>
        <input onChange={(event) => {
          handleChangeInput("russian", event);
        }}
              name="russian"
              type="text"
              defaultValue={objectWords.russian}
        />
        {russianErrorMessage && <div className={style.errors}>{russianErrorMessage}</div>}
      </div>
      <div className={style.columnEdit}>
        <button onClick={saveEdit} className={classNames(style.button, style.btnSave)} disabled = {!inputsValid}>
          <HandySvg src={saveBtn} className={style.btnSaveSvg} width="16" height="16" fill="none" />
        </button>
        <button onClick={deleteWord} className={classNames(style.button, style.btnDelete)}>
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