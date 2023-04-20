import React, {useState, useEffect} from 'react';
import classNames from 'classnames/bind';
import { HandySvg } from 'handy-svg';
import saveBtn from './saveBtn.svg';
// import POST from '../../Services/POST';

import style from './tableAddWords.module.scss';

function TableAddWords({words,  setIsLoaded, isLoaded}) {
    // console.log(words);
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

      function saveWord(){
        // POST.postServer(objectWords);
        // console.log(objectWords);
        setIsLoaded(!isLoaded);
      }

  return (
    <div className={style.container}>
        <h4>Добавить новое слово</h4>
        <div className={style.table}>
            <div className={style.tableHead}>
                <div className={style.columnNumber}>№</div>
                <div className={style.columnLanguage}>английский</div>
                <div className={style.columnTranscription}>транскрипция</div>
                <div className={style.columnRussian}>русский</div>
                <div className={style.columnEdit}>редактирование</div>
            </div>
            <div className={style.tableBody}>
                <div className={style.columnNumber}></div>
                <div className={style.columnLanguage}>
                <input onChange={(event) => {
                        handleChangeInput("english", event);
                }}
                        name="english"
                        type="text"
                        // defaultValue={objectWords.english}
                />
                {englishErrorMessage && <div className={style.errors}>{englishErrorMessage}</div>}
                </div>
                <div className={style.columnTranscription}>
                <input onChange={(event) => {
                        handleChangeInput("transcription", event);
                }}
                        name="transcription"
                        type="text"
                        // defaultValue={objectWords.transcription}
                />
                {transcriptionErrorMessage && <div className={style.errors}>{transcriptionErrorMessage}</div>}
                </div>
                <div className={style.columnRussian}>
                <input onChange={(event) => {
                        handleChangeInput("russian", event);
                }}
                        name="russian"
                        type="text"
                        // defaultValue={objectWords.russian}
                />
                {russianErrorMessage && <div className={style.errors}>{russianErrorMessage}</div>}
                </div>
                <div className={style.columnEdit}>
                    <button onClick={saveWord} className={classNames(style.button, style.btnSave)} disabled = {!inputsValid}>
                        <HandySvg src={saveBtn}
                        className={style.btnSaveSvg}
                        width="16"
                        height="16"
                        fill="none"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TableAddWords;
