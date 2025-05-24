import React, { useState } from 'react'

const AddTodo = ({handleAdd}) => {
   const [inputValue,setInputValue] = useState("");

   function handleClick(){
    handleAdd(inputValue);
   }

  return (
    <div>
        <input type="text" value={inputValue} onChange={(event)=>setInputValue(event.target.value)}/>
        <button onClick={handleClick}>ADD</button>
    </div>
  )
}

export default AddTodo