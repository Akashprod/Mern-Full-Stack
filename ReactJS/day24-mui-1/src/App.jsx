import React, { useState } from "react";
import Button from "@mui/material/Button";

const App = () => {
  const [isOpen, setIsopen] = useState(false);

  return (
    <>
      {/* <Button variant="contained" color='error'>My Button</Button> */}
      {/* <Button style={{color:"black"}} variant="contained" color='secondary'>My Button</Button> */}
      {/* <Button variant="contained" color="error" sx={{ color: "skyblue" ,typography:"h1"}}>
        My Button
      </Button> */}
      {/* <Button variant="contained" color="error" sx={{ color: "skyblue" ,fontSize:"h6.fontSize"}}>
        My Button
      </Button> */}
      {/* <Button
        variant="contained"
        color="secondary"
        sx={{
          color: "red",
          fontSize: 20,
          margin: 10,
          padding: 2,
          borderRadius: 2,
          // borderColor:"warning.light",
          // borderColor : (theme)=>theme.palette.secondary.main,
          // borderColor : (theme)=>theme.typography.h1,
          borderStyle: "solid",
          borderWidth :"2px",
          width : 0.5,
          maxWidth : "sm",
          boxShadow : 20,
          zIndex : (theme)=>theme.zIndex["modal"]+1,
        }}
      >
        My Button
      </Button> */}

      {/* <Button
        variant="contained"
        color="secondary"
        sx={(theme)=>({
          ...theme.typography.h1,
          color: "red",
          fontSize: 20,
          margin: 10,
          padding: 2,
          borderRadius: 2,
          // borderColor:"warning.light",
          // borderColor : (theme)=>theme.palette.secondary.main,
          // borderColor : (theme)=>theme.typography.h1,
          borderStyle: "solid",
          borderWidth :"2px",
          width : 0.5,
          maxWidth : "sm",
          boxShadow : 20,
          zIndex : (theme)=>theme.zIndex["modal"]+1,
        })}
      >
        My Button
      </Button> */}

      {/* <Button
        variant="contained"
        sx={{ bgcolor: isOpen ? "green" : "red" }}
        onClick={() => setIsopen(!isOpen)}
      >
        My Button
      </Button> */}

      {/* <Button
        variant="contained"
        sx={[
          {
            bgcolor: "green",
            boxShadow: 10,
            fontSize: 20,
            "&:hover": { bgcolor: "lightgreen" },
            "&:focus": { bgcolor: "orange" },
          },
          isOpen && {
            bgcolor: "red",
            boxShadow: 20,
            fontSize: 25,
            "&:hover": { bgcolor: "orange" },
            "&:focus": { bgcolor: "lightgreen" },
          },
        ]}
        onClick={() => setIsopen(!isOpen)}
      >
        My Button
      </Button> */}

<Button
        variant="contained"
        sx={[
          {
            bgcolor: {
xs:"red",sm:"purple",xl:"blue"
            },
            boxShadow: 10,
            fontSize: 20,
            "&:hover": { bgcolor: "lightgreen" },
            "&:focus": { bgcolor: "orange" },
            "& >p":{color:"black"}
          },
          isOpen && {
            bgcolor: "red",
            boxShadow: 20,
            fontSize: 25,
            
            "&:hover": { bgcolor: "orange" },
            "&:focus": { bgcolor: "lightgreen" },
            "& >p":{color:"white"}
          },
        ]}
        onClick={() => setIsopen(!isOpen)}
      >
        My Button <p> This is inside p tag</p>
      </Button>
    </>
  );
};

export default App;
