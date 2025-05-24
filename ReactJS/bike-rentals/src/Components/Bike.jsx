import React from 'react'
import Button from './Button'

const Bike = ({id,image,name,rate,available}) => {
  return (
    <div style={{ display:"grid",justifyContent:"center",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}>
      <img src={image} alt="" style={{margin:"10px"}} />
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <h3>{name}</h3>
      <h3 style={{color:"orange"}}>{rate}</h3>

      </div>
      <h4>Bike Number : {id}</h4>
      <h4>Bike Available :{available}</h4>
      <Button/>
    </div>
  )
}

export default Bike