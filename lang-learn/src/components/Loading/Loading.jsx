import React from 'react';

import style from './loading.module.scss';

function Loading() {
  return (
    <div className={style.container}>
      <div className={style.loading}>
        <h2>Loading...</h2>
        <h2>Loading...</h2>
      </div>
    </div>
  )
}

export default Loading
