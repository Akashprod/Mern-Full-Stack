import React from "react";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import SectionTitle from "../Components/SectionTitle";
import CheckoutForm from "../Components/CheckoutForm";
import CartTotals from "../Components/CartTotals";

export const loader = (store) => async () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warn("You must login to checkout");
    redirect("/login");
  }
};

const Checkout = () => {

  const cartTotal = useSelector((state)=>state.cartState.cartTotal);

  if(cartTotal === 0){
    return <div className="flex justify-center pt-32">
      <SectionTitle text="Your cart is empty...Add items to shop moore..."/>
    </div>
  }
  return (
    <>
    <SectionTitle text="Glad to see you ordering"/>
    <div className="mt-8 mx-32 grid gap-8 md:grid-cols-2 items-center">
    <CheckoutForm/>
    <CartTotals/>
    </div>
    
    </>
  )
};

export default Checkout;
