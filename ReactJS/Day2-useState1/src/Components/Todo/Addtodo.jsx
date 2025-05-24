import React from 'react'

const Addtodo = ({todo,handleToggle}) => {
  return (
    <>
    {todo.map((item)=>{
        const {title,status,id} = item;
                    return (
                        <li key={id}>
                            {title} - {status ? "Completed" : "Not Completed"}
                            <button onClick={()=>handleToggle(id)}>Change</button>
                        </li>
                    );
                })}
    </>
  )
}

export default Addtodo

