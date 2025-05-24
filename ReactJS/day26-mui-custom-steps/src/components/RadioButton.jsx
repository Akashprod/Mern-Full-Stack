import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react'

const RadioButton = () => {
    return (
        <FormControl disabled>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            
            name="radio-buttons-group"
            sx={{
              "& .MuiFormControlLabel-label":{
                color:"red",
                fontSize : "1.5rem",
                fontFamily :"Verdana"
              },
              "& .MuiRadio-root":{
                "&.Mui-checked":{
                  color :"red"
                },
              "&.Mui-disabled":{
                color :"green"
              }
              }
            }}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      );
}

export default RadioButton