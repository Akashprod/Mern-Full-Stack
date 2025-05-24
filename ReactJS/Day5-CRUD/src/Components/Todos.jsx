import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import Todoitem from '../Todoitem';

const Todos = () => {

  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState(false);

    const handleAdd = (inputValue) =>{
        const newTodoItem = {
            title : inputValue,
            status : false
        }

        //POST -- Adding
        let result = fetch('http://localhost:3000/todos',{
          method : "POST",
          headers : {
            "Content-type" : "application/json"
          },
          body : JSON.stringify(newTodoItem)
        });

        result.then(()=>{
          //update DOM
          setStatus(!status);

        });
        result.catch((error)=>{
          console.log(error);
        });
    }

    //Get -- to read

    async function fetchAndUpdateData() {
      try {
        let response = await fetch("http://localhost:3000/todos");
        let data = await response.json();
        setTodo(data);
      } catch (error) {
        console.log(error);
      }
    }

    //Delete

    const handleDelete = (id)=>{
      let result = fetch(`http://localhost:3000/todos/${id}`,{
        method : "DELETE",
      });
      result.then(()=>{
        setStatus(!status);
      });
    }

    //Toggle

    const handleToggle = (id,body)=>{
      console.log(id,body);
      let result = fetch(`http://localhost:3000/todos/${id}`,{
        method : "PATCH",
          headers : {
            "Content-type" : "application/json"
          },
          body : JSON.stringify(body)

      });
      result.then(()=>{
        setStatus(!status);
      });
    }

    

    useEffect(()=>{
      fetchAndUpdateData();
    },[status]);

  return (
    <div>
    <AddTodo handleAdd={handleAdd} />
    {todo.map((item)=>{
      return(<Todoitem key={item.id} {...item} handleDelete={handleDelete} handleToggle={handleToggle}/>)
    })}
    </div>
  )
}

export default Todos