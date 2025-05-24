import React, { useState } from "react";
import { CartItem } from "./CartItem";
import {Total} from "./Total"

let cartItems = [
  { id: 1, label: "Noodles", quantity: 1, price: 20 },
  { id: 2, label: "Biryani", quantity: 1, price: 90 },
  { id: 3, label: "Soup", quantity: 1, price: 10 },
];

export const CartContainer = () => {

    const [cart,setCart] = useState(cartItems);

    const totalPrice = cart.reduce(function(bag,item){
        return (bag+(item.price * item.quantity))
    },0);

    const changeQuantity = (id,value) =>{
        let updateCart = cart.map((item)=>{

            let newQuantity = item.quantity+value;
                newQuantity = newQuantity >0 ? newQuantity : 0;

            return (item.id === id ? {...item,quantity : newQuantity} : item)
        });
        setCart(updateCart);
    }

  return <div>
    {cart.map((item)=>{
        return <CartItem key={item.id} {...item} changeQuantity={changeQuantity} />
    })}
    <Total totalPrice={totalPrice}/>
  </div>;
};
