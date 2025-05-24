// Example for accessing DOM elements
// import React from 'react'
// import { useRef } from 'react'

// const App = () => {

//     const inputref = useRef(null);

//     const handleFocus = ()=>{
//       console.log(inputref);
//       inputref.current.focus();
//     }

//     console.log("render");

//   return (
//     <div>
//       <input type="text" placeholder='type here...' ref={inputref}/>
//       <button onClick={()=>handleFocus()}>Click to focus</button>
//     </div>
//   )
// }

// export default App

// Example for stroing mutuable values

// import React, { useState } from 'react'
// import { useRef } from 'react';

// const App = () => {

//   const [flag,setFlag] = useState(false);
//   // let val= 0;
//   // const [val,setVal] = useState(0);
//   const val = useRef(0);

//   const handleCount = ()=>{
//     // val = val+1;
//     // setVal(val+1);
//     val.current = val.current+1;
//     console.log("inside",val);
//   }
//   console.log("outside",val);

//   return (
//     <>
//     <h1>Count : {val.current}</h1>
//     <button onClick={handleCount}>Click</button>
//     <button onClick={()=>setFlag(!flag)}>{flag?"Stop":"Start"}</button>

//     </>
//   )
// }

// export default App

// Example for handling multiple input tags targetting by single useRef

// import React from "react";
// import { useRef } from "react";

// const App = () => {
//   const value = useRef([]);

//   const handleFocus = () => {
//     console.log("inn", value);
//     value.current[0].focus();
//   };
//   console.log("outt", value);
//   return (
//     <div>
//       <input
//         type="text"
//         style={{ width: "20px" }}
//         id="input1"
//         ref={(element) => {
//           return (value.current[0] = element);
//         }}
//       />
//       <input
//         type="text"
//         style={{ width: "20px" }}
//         id="input2"
//         ref={(element) => {
//           return (value.current[1] = element);
//         }}
//       />
//       <input
//         type="text"
//         style={{ width: "20px" }}
//         id="input3"
//         ref={(element) => {
//           return (value.current[2] = element);
//         }}
//       />
//       <input
//         type="text"
//         style={{ width: "20px" }}
//         id="input4"
//         ref={(element) => {
//           return (value.current[3] = element);
//         }}
//       />
//       <button onClick={handleFocus}>Click to focus</button>
//     </div>
//   );
// };

// export default App;

// Example of all hooks till now

import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

const App = () => {

  const [count,setCount] = useState(3);
  const refId = useRef(0);

  useEffect(()=>{
    return ()=>{
      console.log("Clean up function");
    }
  },[]);

  // useEffect(()=>{
  //   if(count === 0){
  //     console.log("Timer reached zero");
  //   }
  // },[count]);

  const startTimer = ()=>{
    if(refId.current !== 0){
      return;
    }

    refId.current = setInterval(()=>{
      console.log("counter",Date.now());
      setCount((prev)=>{
        if(prev<=1){
          clearInterval(refId.current);
          return 0; //to make useEffect works(condition that count=0)
        }
        else{
          return prev-1;
        }
      });
    },1000);
  }

  const stopTimer = ()=>{
    clearInterval(refId.current);
    refId.current = 0;
  }

  console.log("render");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  )
}

export default App