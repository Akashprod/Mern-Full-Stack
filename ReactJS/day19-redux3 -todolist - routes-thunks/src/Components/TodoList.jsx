import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import { getTodo } from "../redux/Todo/todoAction";



const TodoList = () => {
  const { todo, isLoading, isError } = useSelector((store) => store.todoReducerFunction);

  const dispatch = useDispatch();
  

  useEffect(() => {
    // getTodo(dispatch);
    dispatch(getTodo);
  }, []);

  // console.log(todo);

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
