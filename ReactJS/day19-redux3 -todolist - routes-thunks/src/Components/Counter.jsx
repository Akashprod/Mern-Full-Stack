import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFunction, subtractFunction } from "../redux/Counter/counterAction";

const Counter = () => {
  const counter = useSelector((store) => {
    // console.log(store);
    return store.counterReducerFunction.count;
  });

  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(addFunction(1));
  };

  const handleDec = () => {
    dispatch(subtractFunction(1));
  };

  return (
    <div>
      <h1>Count : {counter}</h1>
      <button onClick={handleInc}>Increase</button>
      <button onClick={handleDec}>Decrease</button>
    </div>
  );
};

export default Counter;
