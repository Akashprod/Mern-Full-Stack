import { Button } from '@mui/material'
import React from 'react'

const Menu = ({handleToggle}) => {


  return (
    <><div style={{display:"grid", backgroundColor : "white"}} >
    <Button onClick={handleToggle}  sx={{color : "blue"}}>Profile</Button> 
    <Button onClick={handleToggle} sx={{color : "blue"}}>My Account</Button>
    <Button onClick={handleToggle} sx={{color : "blue"}}>Logout</Button>
    </div>
    </>
  )
}

export default Menu