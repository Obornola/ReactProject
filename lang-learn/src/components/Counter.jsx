import React, {useState} from 'react';
  
function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(){
      setCount(count + 1);
  }


  return (
    <>
      <button onClick={handleClick}>{count}</button>
    </>
  );
}

export default Counter;
