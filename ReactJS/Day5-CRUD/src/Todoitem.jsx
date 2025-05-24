import React from 'react'

const Todoitem = ({id,title,status,handleDelete,handleToggle}) => {

    function handleUpdate(id){
        const body = {status:!status};
        handleToggle(id,body);
    }

  return (
    <div style={{display:"flex", justifyContent:"space-between",gap:"10px"}}>
        <p>{title}</p>
        <p>{status ? "Completed" : "Not Completed"}</p>
        <button onClick={()=>handleDelete(id)}>Delete</button>
        <button onClick={()=>handleUpdate(id)}>Toggle</button>
    </div>
  )
}

export default Todoitem