import React, { useState } from 'react'

const Counter = () => {

  const [count,setCount] = useState(0);

  return (
    <>
    <h3>Counter : {count}</h3>
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
    <button onClick={()=>setCount(count*2)}>Double</button>
    </>
  )
}

export default Counter


