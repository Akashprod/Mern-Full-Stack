import React from 'react'

const List = ({text,handleChange,handleAddTodo}) => {
  return (
    <>
                <input type="text" onChange={handleChange} value={text} />
                <button onClick={handleAddTodo}>Add</button>
      
    </>
  )
}

export default List

