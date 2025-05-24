import React, { useReducer } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const initialValue = [
  { id: 1, title: "Learn HTML", status: false },
  { id: 2, title: "Learn CSS", status: false },
  { id: 3, title: "Learn JS", status: false },
];

const reducerFunction = (state, action) => {
    switch (action.type){
        case "ADD":{
            return [...state,{id:Date.now(),title:action.payload,status:false}]
        }
        case "UPDATE":{
            return state.map((item)=>{
              return  item.id === action.payload ? {...item,status:!item.status}:item}
            )
        }
        case "DELETE":{
          return state.filter((item)=>item.id !== action.payload);
        }
    }
};



const Todo = () => {
  const [todo, dispatch] = useReducer(reducerFunction, initialValue);
  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload : id
    });
  };
  
  const handleUpdate = (id) => {
    dispatch({
      type: "UPDATE",
      payload : id
    });
  };
  
  const addTask = (title) => {
    dispatch({
      type: "ADD",
      payload : title
    });
  };
  return (
    <div>
      <h1>To-Do-List</h1>
      <AddTodo addTask={addTask} />
      <ul>
        {todo.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
