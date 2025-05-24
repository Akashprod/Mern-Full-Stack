import React, { useState } from 'react'

const AddTodo = ({addTask}) => {

const [title,setTitle] = useState("");

const handleAdd = ()=>{
    addTask(title);
    setTitle("");
}

  return (
    <div style={{margin : "10px"}}>
        <input type="text" value={title} onChange={(event)=>{
            return setTitle(event.target.value);
        }}/>
        <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default AddTodo