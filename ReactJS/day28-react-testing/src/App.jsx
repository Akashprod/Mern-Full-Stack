import React from "react";
import Button from "./Components/Button";
import Counter from "./Components/Counter";

const App = () => {
  const test_func = () => {
    alert("button clicked");
  };

  return (
    <>
      <Button children="hello" size="large" color="red" func={test_func} />
      <Button children="world" size="medium" color="blue" func={test_func} />
      <Button children="hii" size="small" color="teal" func={test_func} />

      <Counter/>
   
    </>
  );
};

export default App;
