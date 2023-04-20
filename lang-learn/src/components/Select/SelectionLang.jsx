import React, {useState} from 'react';

import style from './select.module.scss';

function Select({languages, setLanguages, getValueSelect}) {
  const[select, setSelect] = useState();
  const handleSelectOptions = (event) => {
    getValueSelect(select);
    setLanguages(event.target.value);
  }

  return (
    
  <div className= {style.container}>
    <div className= {style.dropDownList}>
      <select onChange={handleSelectOptions} className={style.select}>
      <option defaultValue="" disabled>Выберите язык</option>
      <option value="english">English</option>
      <option value="español">Español</option>
      <option value="deutsch">Deutsch</option>
      </select>
      
    </div>
  </div>);
}

export default Select;