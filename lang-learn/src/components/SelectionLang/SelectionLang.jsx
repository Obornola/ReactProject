import React, {useContext} from 'react';
import { globalContext } from '../../Context/MyContext';
import Select from 'react-select';
import style from './selectionLang.module.scss';

function SelectionLang() {
  const {languages, setLanguages} = useContext(globalContext);

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