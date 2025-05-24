import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "./Menu";
import Class from "./Class";

const App = () => {
  const [state, setState] = useState(false);

  const handleToggle = () => {
    return setState((prev) => !prev);
  };

  return (
    <>
    <Class/>
      {state ? (
        <Button variant="contained" onClick={handleToggle}>
          Dashboard
        </Button>
      ) : (
        <Menu handleToggle={handleToggle} />
      )}
    </>
  );
};

export default App;

{
  /* <Button disabled variant="contained">
        My Button
      </Button>
      <Button
        disabled
        sx={{ "&.Mui-disabled": { color: "red" } }}
        variant="contained"
      >
        My Button
      </Button> */
}
