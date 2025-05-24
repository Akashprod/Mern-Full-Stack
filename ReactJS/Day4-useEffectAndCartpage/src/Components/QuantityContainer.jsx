import React from 'react'

export const QuantityContainer = ({quantity,changeQuantity,id}) => {
  return (
    <div style={{display:"flex",gap:"5px"}}>
      <button onClick={()=>changeQuantity(id,-1)}>-</button>
      <p>{quantity}</p>
      <button onClick={()=>changeQuantity(id,+1)}>+</button>
    </div>
  )
}
