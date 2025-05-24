import React from "react";
import Counter from "./Components/Counter";
import Theme from "./Components/Theme";
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((store) => store.theme.theme);

  return (
    <div className={theme === "LIGHT" ? "light" : "dark"}>
      <Counter />
      <Theme />
    </div>
  );
};

export default App;
