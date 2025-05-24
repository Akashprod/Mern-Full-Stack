import React, { useState } from "react";
import { addTodo } from "../apiCalls";

const TodoInput = ({handleRender}: { handleRender: () => void }) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = {
      title,
      status: false,
    };
    addTodo(newTodo);
    handleRender();
    setTitle("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          value={title}
          onChange={handleChange}
        />

        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default TodoInput;
