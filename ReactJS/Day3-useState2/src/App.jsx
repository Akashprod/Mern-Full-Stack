import React, { useState } from 'react'

const App = () => {

  const [count,setCount] = useState(0);
  const handleIncrease = ()=>{
    // setCount(count+100);
    // setCount(count+100);
    // setCount(count+100);
    // setCount(count+100);
    setCount((prev)=>prev+100);
    setCount((prev)=>prev+100);
    setCount((prev)=>prev+100);
    setCount((prev)=>prev+100);
    console.log(count);
  }
  const handleDecrease = () =>{
    setCount(count-100);
  }
  return (
    <div>
      <h1>Current count : {count}</h1>
      <button onClick={handleIncrease}>Increase by 100</button>
      <button onClick={handleDecrease}>Decrease by 100</button>
      </div>
    
  )
}

export default App