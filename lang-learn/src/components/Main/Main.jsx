import React, {useContext} from 'react';
import { globalContext } from '../../Context/MyContext';
import SelectionLang from '../SelectionLang/SelectionLang.jsx';
import TableWords from '../TableWords/TableWords.jsx';
import TableAddWords from '../TableAddWords/TableAddWords';
import style from './main.module.scss';

function Main() {
  const {words, isLoaded, setIsLoaded} = useContext(globalContext);
return (
<div className={style.main}>
  <div className={style.container}>
    <SelectionLang />
    <TableWords />
    <TableAddWords words={words} key={words.id} setIsLoaded={setIsLoaded} isLoaded={isLoaded}/>
  </div>
</div>
);
}

export default Main;