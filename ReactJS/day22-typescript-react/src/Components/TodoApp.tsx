import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import { getTodo } from "../apiCalls";
import { Todo } from "../constants";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [change, setChange] = useState<boolean>(false);

  useEffect(() => {
    getTodo().then((res: Todo[]) => {
      setTodo(res);
    });
  }, [change]);

  const handleChange = () => {
    setChange((prev) => !prev);
  };

  const handleRender = ()=>{
    setChange((prev) => !prev);
  }

  return (
    <div>
      <h1>TS AddTo List</h1>
      <TodoInput handleRender={handleRender}/>
      {todo.map((element: Todo) => {
        return (
          <TodoItem key={element.id} {...element} handleChange={handleChange} />
        );
      })}
    </div>
  );
};

export default TodoApp;
