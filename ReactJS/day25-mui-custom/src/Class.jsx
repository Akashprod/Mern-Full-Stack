import React from "react";
import Button from "@mui/material/Button";
import { Checkbox, styled } from "@mui/material";
import { createTheme } from "@mui/material";

export const MyOwnerButton = styled(Button)(({theme,...ownerState})=>
  theme.unstable_sx ({
    // color : theme.palette.primary.main,
    color : ownerState.color === "red" ? "red" : "blue",
    bgcolor : theme.palette.secondary.main,
    mb :{xs:1,sm:7,md:12},
    "&:hover":{
      bgcolor : "red"
    }
  })
)

export const theme = createTheme({
  // components :{
  //   "MuiButton":{
  //     styleOverrides:{
  //       root :{
  //         color : "white",
  //         backgroundColor : "red",
  //         borderRadius : 25,
  //         height : "10rem",
  //         width : "10rem"
  //       }
  //     }
  //   }
  // }

  palette: {
    primary: {
      main: "#f2f905",
    },
    secondary: {
      main: "#05f914",
    },
    customColors: {
      main: "#070c08",
    },
  },

  // typography: {
  //   blueTextClass: {
  //     color: "blue",
  //     bgcolor: "black",
  //     borderRadius: 25,
  //     height: "10rem",
  //     width: "10rem",
  //   },
  // },
});

// The typography key inside MUI's createTheme is specifically for font styles like font family, font size, font weight, etc.

export const MyThemedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 10,
  padding: 8,
  margin: 8,
  ":hover": {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 15,
    padding: 5,
    margin: 5,
  },
}));

const Class = () => {
  const MyStyledButton = styled(Button)({
    color: "white",
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 8,
    margin: 8,
    ":hover": {
      color: "grey",
      backgroundColor: "lightBlue",
      borderRadius: 15,
      padding: 5,
      margin: 5,
    },
  });

  return (
    <div>
      <MyOwnerButton color="reddrf">Owner</MyOwnerButton>
      <MyOwnerButton>sx</MyOwnerButton>
      <Button
        sx={{ bgcolor: "primary.light", color: "red" }}
        variant="contained"
      >
        Global Button
      </Button>

      <Checkbox color="primary" />
      <Button variant="contained">Global Button</Button>
      <MyThemedButton>I m themly styled</MyThemedButton>
      <MyStyledButton>I am styled customly</MyStyledButton>
    </div>
  );
};

export default Class;
