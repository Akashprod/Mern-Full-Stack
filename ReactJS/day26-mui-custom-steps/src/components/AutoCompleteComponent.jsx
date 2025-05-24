import { Autocomplete, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

const AutoCompleteComponent = () => {
  const topFilms = [
    "Aarya",
    "Bahubali",
    "CinemaChupisthaMama",
    "Dee",
    "EmoGurramEgaravachhu",
    "Fidha",
  ];
  const [value, setValue] = useState([]);

  const CustomPaperComponent = (props) => {
    const { sx, ...otherProps } = props;

    return (
      <Paper
        {...otherProps}
        sx={{
          ...sx,
          bgcolor: "red",
          "& .MuiAutocomplete-option":{
            color :"white"
          }
        }}
      >
        {props.children}
      </Paper>
    );
  };

  return (
    <Autocomplete
  
      multiple
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      disablePortal
      options={topFilms}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movies" />}
      slotProps={{
        chip: {
          sx: {
            color: "red",
          },
        },
      }}
      slots={{
        paper: CustomPaperComponent,
      }}
    />
  );
};

export default AutoCompleteComponent;
