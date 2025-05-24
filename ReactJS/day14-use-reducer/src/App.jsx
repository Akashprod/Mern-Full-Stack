// import React, { useReducer } from 'react'

// const reducerFunction = (currentState,actionObject)=>{
//   switch(actionObject.type){
//      case "increment_count" : {
//       return currentState + actionObject.payload;
//      }
//      case "decrement_count":{
//       return currentState-actionObject.payload;
//      }
//      case "reset":{
//       return 0;
//      }
//      case "default":{
//       "object type not defined"
//      }
//   }
 
// }

// const App = () => {

//  const[count,dispatch] = useReducer(reducerFunction,0)

//   const handleInc = ()=>{
//     dispatch({
//       type:"increment_count",
//       payload : 2
//     })
//   }

//   const handleDec = ()=>{
//     dispatch({
//       type : "decrement_count",
//       payload : 1
//     })
//   }

//   const handleReset = ()=>{
//     dispatch({
//       type : "reset"
//     });
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleInc}>Inc</button>

//       <button onClick={handleDec}>Dec</button>

//       <button onClick={handleReset}> Reset</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Todo from './Components/Todo'

const App = () => {
  return (
    <div><Todo/></div>
  )
}

export default App