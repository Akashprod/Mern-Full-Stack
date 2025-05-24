import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleTheme } from "../action";

const Theme = () => {
  const dispatch = useDispatch();

  const handleDark = () => {
    dispatch(handleTheme("DARK"));
  };

  const handleLight = () => {
    dispatch(handleTheme("LIGHT"));
  };
  return (
    <div>
      <button onClick={handleDark}>Dark Mode</button>
      <button onClick={handleLight}>Light Mode</button>
    </div>
  );
};

export default Theme;
