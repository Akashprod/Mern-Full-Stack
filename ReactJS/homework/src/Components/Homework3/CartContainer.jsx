import React from 'react'
import CartItem from './CartItem'
import Total from './Total'

let CartItems = [
    {id:1,label : "Noodles", price:30, quantity:1},
    {id:2,label : "Biryani", price:90, quantity:1},
    {id:3,label : "Chips", price:10, quantity:1}


];

const CartContainer = () => {
  return (
    <div>
        <CartItem/>
        <Total/>
    </div>
  )
}

export default CartContainer

