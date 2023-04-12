import React, { useState } from 'react';
import { HandySvg } from 'handy-svg';
import classNames from 'classnames/bind';
import deleteBtn from './deleteBtn.svg';
import editBtn from './editBtn.svg';
import saveBtn from './saveBtn.svg';
import closeBtn from './closeBtn.svg';
import Input from '../Inputs/Input';

import style from './tableBody.module.scss';


function TableBody({number, english, transcription, russian}) {
const [isEdit, setIsEdit] = useState(true);
const [values, setValues] = useState({
  english: english,
  transcription: transcription,
  russian: russian,
});

const input = [
  {
    id: 1,
    name: "english",
    type: "text",
    errorMessage: "Поле заполняется английскими буквами",
    required: true,
    pattern: "^[a-zA-Z]+$",
  },
  {
    id: 2,
    name: "transcription",
    type: "text",
    errorMessage: "Поле заполнено неверно",
    required: true,
    pattern: "\D [^0-9]"
  },
  {
    id: 3,
    name: "russian",
    type: "text",
    errorMessage: "Поле заполняется русскими буквами",
    required: true,
    pattern:"^[А-Яа-яЁё\s]+$"
  }
]

function getEditWord(){
setIsEdit(!isEdit);
}

function handleCansel(){
  setIsEdit(true);
}

const handleSave = (event) => {
  event.preventDefault();
}

const onChange = (event) => {
  setValues({...values, [event.target.name]:event.target.value.
  toLowerCase()});
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
        <Input name="english"
          id="1"
          type="text"
          errorMessage= "Поле заполняется английскими буквами"
          errorMessageEmpty= "Поле не заполнено"
          value={values.english}
          onChange={onChange}
          pattern= "^[a-zA-Z]+$"
          required= {true}
        />
      </div>
      <div className={style.columnTranscription}>
        <Input name="transcription"
          id="2"
          type="text"
          errorMessageEmpty= "Поле не заполнено"
          value={values.transcription}
          onChange={onChange}
              //  pattern= "\D [^0-9]"
          required= {true}
        />
      </div>
      <div className={style.columnRussian}>
        <Input name="russian"
          id="3"
          type="text"
          errorMessage= "Поле заполняется русскими буквами"
          errorMessageEmpty= "Поле не заполнено"
          value={values.russian}
          onChange={onChange}
          pattern= "^[А-Яа-яЁё\s]+$"
          required= {true}
        />
      </div>
      <div className={style.columnEdit}>
        <div className={classNames(style.button, style.btnSave)} onClick={handleSave}>
          <HandySvg src={saveBtn} className={style.btnSaveSvg} width="16" height="16" fill="none" />
        </div>
        <div className={classNames(style.button, style.btnDelete)}>
          <HandySvg src={deleteBtn} className={style.btnDeleteSvg} width="16" height="16" fill="none" />
        </div>
        <div className={classNames(style.button, style.btnClose)} onClick={handleCansel}>
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