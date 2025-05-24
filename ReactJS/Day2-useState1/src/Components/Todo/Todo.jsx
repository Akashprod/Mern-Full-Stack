import React, { useState } from 'react'
import Addtodo from './Addtodo';
import List from './List';

export const Todo = () => {
    const [text,setText] = useState('');
    const [todo,setTodo] = useState([]);

    const handleChange = (event)=>{
        setText(event.target.value);
    }

    const handleAddTodo = ()=>{
        const newItem = {
            title : text,
            status : false,
            id : Date.now()+Math.random()
        }

        const todoAfterItemAddition = [...todo,newItem];
        setTodo(todoAfterItemAddition);
        setText('');
        
    }
    function handleToggle(id){
        const afterToggle = todo.map((item)=>{
            return (
                item.id===id ? {...item,status:!item.status} : item
            )
        });
        setTodo(afterToggle);
    }

  return (
        <div>
            <div>
                <List handleAddTodo={handleAddTodo} handleChange={handleChange} text={text}/>
            </div>
            <ul>
                <Addtodo todo={todo} handleToggle={handleToggle}/>
            </ul>
        </div>
  )
}
