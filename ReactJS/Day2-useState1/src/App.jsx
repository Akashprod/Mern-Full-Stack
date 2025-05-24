// Single Button
// import React, { useState } from 'react';

// export const App = () => {

//     const [count, setCount] = useState(0);

//     function handleClick(){
//       setCount(count+1);
//     }

//   return (
//     <button onClick={handleClick} >clicked {count} times</button>
//   )
// }


// two independent buttons
// import React, { useState } from 'react'

// export const App = () => {
//   return (
//     <div>
//       <MyButton/>
//       <MyButton/>
//       </div>
//   )
// }

// function MyButton(){

//   const [count,setCount] = useState(0);

//   function handleClick(){
//     setCount(count+1);
//   }

//   return <button onClick={handleClick}>clicked {count} times</button>
// }

// two dependent buttons
// import React, { useState } from 'react';

// export const App = () => {

//   const [count,setCount] = useState(0);
//   function handleClick(){
//     setCount(count+1);
//   }

//   return (
//     <div>
//       <MyButton count={count} handleClick={handleClick}/>
//       <MyButton count={count} handleClick={handleClick}/>

//     </div>
//   )
// }

// function MyButton({count,handleClick}){
//   return <button onClick={handleClick}>clicked {count} times </button>
// }

// todolist

import React from 'react'
import { Todo } from './Components/Todo/Todo'

export const App = () => {
  return (
    <div><Todo/></div>
  )
}




