import React from 'react';
import Select from 'react-select';
import languages from '../../data/languages.json';
import style from './selectionLang.module.scss';

const styles= {
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
  fontSize: "20px",
  padding: "8px 80px 8px 20px",
  backgroundColor: "rgb(216, 216, 244)",
  color: "rgb(13, 1, 1)",
  border: "2px solid rgb(53, 53, 106)",
  borderRadius: "5px",
};

function SelectionLang() {
  return (
  <div className= {style.container}>
    <div className= {style.dropDownList}>
      <Select
      options= {languages}
      placeholder= {'Выберите язык'}
      styles={styles}
      />
    </div>
  </div>);
}

export default SelectionLang;