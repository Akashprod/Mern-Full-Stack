import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodo } from "../redux/Todo/todoAction";




const TodoInput = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

 

  const addTodo = () => {
    // postTodo(title,dispatch);

// dispatch(postTodo(title,dispatch));

dispatch(postTodo(title));

    setTitle("");
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="Enter you todo..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>ADD</button>
    </div>
  );
};

export default TodoInput;
