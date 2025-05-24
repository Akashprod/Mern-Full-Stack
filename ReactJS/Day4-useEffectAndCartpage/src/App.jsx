import React, { useState } from 'react'
import Timer from './Components/Timer';
// import { CartContainer } from './Components/CartContainer'
// import { Count } from './Components/Count'

export const App = () => {

  const [showTimer,setShowTimer] = useState(true);
  return (
    // <div><CartContainer/></div>
    // <div><Count/></div>
    <>
      {showTimer && <Timer />}
      <button onClick={()=>setShowTimer(!showTimer)}>
      {showTimer ? "Hide Timer " : "Show Timer"}
      </button>
    </>
  )
}
