import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {PageHome, PageTable, PageGame, PageError} from '../index';

import style from '../app/app.module.scss';

function App() {
  return (
    <Router>
    <div className={style.container}>
        <Routes>
          <Route path='/' element={<PageHome/>}/>
          <Route path='/table-words' element={<PageTable/>}/>
          <Route path='/game' element={<PageGame/>}/>
          <Route path='*' element={<PageError/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
