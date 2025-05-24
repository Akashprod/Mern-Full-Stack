import React from "react";
import { Todo } from "../constants";
import { toggleTodo } from "../apiCalls";

interface TodoItem extends Todo {
  handleChange: (id?: number) => void;
}

const TodoItem = ({ id, title, status, handleChange }: TodoItem) => {
  const handleToggle = (id?: number) => {
    toggleTodo(status, id).then((res) => "hi");
    handleChange();
  };

  return (
    <div>
      <h3>
        {title} - {status ? "Completed" : "Pending"}
      </h3>
      <button onClick={() => handleToggle(id)}>toggle</button>
    </div>
  );
};

export default TodoItem;
