import React, { useState } from 'react';
import { HandySvg } from 'handy-svg';
import classNames from 'classnames/bind';
import deleteBtn from './deleteBtn.svg';
import editBtn from './editBtn.svg';
import saveBtn from './saveBtn.svg';
import closeBtn from './closeBtn.svg';
import InputEnglish from '../Inputs/InputEnglish';
import InputTranscription from '../Inputs/InputTranscription';
import InputRussian from '../Inputs/InputRussian';

import style from './tableBody.module.scss';

function TableBody({number, english, transcription, russian}) {
const [isEdit, setIsEdit] = useState(true);
const [valueInputEnglish, setValueInputEnglish] = useState({english});
const [valueInputTranscription, setValueInputTranscription] = useState({transcription});
const [valueInputRussian, setValueInputRussian] = useState({russian});

function getEditWord(){
setIsEdit(!isEdit);
}

function getValueInputEnglish (value){
  setValueInputEnglish(valueInputEnglish);
}

function getValueInputTranscription (value){
  setValueInputTranscription(valueInputTranscription);
}

function getValueInputRussian (value){
  setValueInputRussian(valueInputRussian);
}

function getCansel(){
  setIsEdit(true);
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
        <div className={classNames(style.button, style.btnEdit)} onClick={getEditWord}>
          <HandySvg src={editBtn} className={style.btnEditSvg} width="16" height="16" fill="none"/>
        </div>
      </div>
    </div>
  </>
  ) : (
  <>
    <div className={style.tableBody}>
    <div className={style.columnNumber}>{number}</div>
      <div className={style.columnLanguage}>
        <InputEnglish getValueInputEnglish={getValueInputEnglish} valueInputEnglish={english}/>
      </div>
      <div className={style.columnTranscription}>
        <InputTranscription getValueInputTranscription={getValueInputTranscription} valueInputTranscription={transcription}/>
      </div>
      <div className={style.columnRussian}>
        <InputRussian getValueInputRussian={getValueInputRussian} valueInputRussian={russian}/>
      </div>
      <div className={style.columnEdit}>
        <div className={classNames(style.button, style.btnSave)}>
          <HandySvg src={saveBtn} className={style.btnSaveSvg} width="16" height="16" fill="none" />
        </div>
        <div className={classNames(style.button, style.btnDelete)}>
          <HandySvg src={deleteBtn} className={style.btnDeleteSvg} width="16" height="16" fill="none" />
        </div>
        <div className={classNames(style.button, style.btnClose)} onClick={getCansel}>
          <HandySvg src={closeBtn} className={style.btnCloseSvg} width="16" height="16" fill="none" />
        </div>
      </div>
    </div>
  </>
  )}
</>
);
}

export default TableBody;