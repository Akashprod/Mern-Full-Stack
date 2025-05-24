import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  postErrorAction,
  postRequestAction,
  postSuccessAction,
} from "../action";
import axios from "axios";

const TodoInput = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const postTodo = () => {
    dispatch(postRequestAction());
    const newTodo = {
      title:title,
    };

    axios
      .post("http://localhost:3000/todos", newTodo)
      .then(
        (res) => 
          // console.log(res.data)
        //here we are going to add this to store
        dispatch(postSuccessAction(res.data))
      )
      .catch(
        (error) => 
          // console.log(error)
        //here we are going to add this to store
        dispatch(postErrorAction())
      );
  };

  const addTodo = () => {
    postTodo();
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
