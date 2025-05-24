import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import { getErrorAction, getRequestAction, getSuccessAction } from "../action";

import axios from "axios";

const TodoList = () => {
  const { todo, isLoading, isError } = useSelector((store) => store);

  const dispatch = useDispatch();
  const getTodo = () => {
    dispatch(getRequestAction());
    axios
      .get("http://localhost:3000/todos")
      .then((res) =>
        // console.log(res.data)
        //here we are going to add this to store
        dispatch(getSuccessAction(res.data))
      )
      .catch((error) =>
        // console.log(error)
        //here we are going to add this to store
        dispatch(getErrorAction())
      );
  };

  useEffect(() =>{getTodo()} , []);

  console.log(todo);

  return (
    <div>
      <h1>Todos</h1>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error...</h1>}
      <TodoInput />
      {todo.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default TodoList;
