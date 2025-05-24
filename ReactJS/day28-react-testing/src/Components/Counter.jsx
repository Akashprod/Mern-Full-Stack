import React, { useState } from 'react'
import Button from './Button';

const Counter = () => {

const [count,setCount] = useState(0);

const handleAdd = ()=>{
    setCount(prev=>prev+1);
}

  return (
    <div data-testid = "counter" >
        <h2 data-testid="count">Counter:{count}</h2>
        <Button children="Add" color="red" size="medium" func={handleAdd}/>
    </div>
  )
}

export default Counter