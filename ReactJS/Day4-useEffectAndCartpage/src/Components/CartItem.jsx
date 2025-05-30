import React from 'react'
import { LabelPrice } from './LabelPrice'
import { QuantityContainer } from './QuantityContainer'

export const CartItem = ({id,label,quantity,price,changeQuantity}) => {
  return (
    <div style={{display:"flex", gap:"60px",margin:"10px", justifyContent:"space-between"}}>
      <LabelPrice label={label} price={price} />
      <QuantityContainer quantity={quantity} changeQuantity={changeQuantity} id={id} />
    </div>
  )
}
