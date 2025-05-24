import React from 'react'

export const LabelPrice = ({label,price}) => {
  return (
    <div style={{display:"flex",gap:"5px"}}>
      <p>{label}</p>
      <p>INR : {price}</p>
    </div>
  )
}
