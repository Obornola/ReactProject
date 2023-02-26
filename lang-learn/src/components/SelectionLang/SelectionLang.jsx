import React from 'react';
import Select from 'react-select';
import languages from '../../data/languages.json';
import style from './selectionLang.module.scss';

function SelectionLang() {
  return (
  <div className= {style.container}>
    <div className= {style.dropDownList}>
      <Select
      options= {languages}
      placeholder= "Выберите язык"
      className={style.select}
      />
    </div>
  </div>);
}

export default SelectionLang;