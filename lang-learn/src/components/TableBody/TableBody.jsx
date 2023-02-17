import React, { useState } from 'react';
import { HandySvg } from 'handy-svg';
import classNames from 'classnames/bind';
import deleteBtn from './deleteBtn.svg';
import editBtn from './editBtn.svg';
import saveBtn from './saveBtn.svg';
import style from './tableBody.module.scss';

function TableBody({number, english, transcription, russian}) {
const [isEdit, setIsEdit] = useState(true);

function getEditWord(){
setIsEdit(!isEdit);
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
        <input type="text" defaultValue={english}/>
      </div>
      <div className={style.columnTranscription}>
        <input type="text" defaultValue={transcription}/>
      </div>
      <div className={style.columnRussian}>
        <input type="text" defaultValue={russian}/>
      </div>
      <div className={style.columnEdit}>
        <div className={classNames(style.button, style.btnSave)}>
          <HandySvg src={saveBtn} className={style.path} width="16" height="16" fill="none" />
        </div>
        <div className={classNames(style.button, style.btnDelete)}>
          <HandySvg src={deleteBtn} className={style.path} width="16" height="16" fill="none" />
        </div>
      </div>
    </div>
  </>
  )}
</>
);
}

export default TableBody;