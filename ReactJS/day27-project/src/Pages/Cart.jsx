import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../Components/SectionTitle";
import CartItemsList from "../Components/CartItemsList";
import CartTotals from "../Components/CartTotals";
import { Link } from "react-router-dom";

const Cart = () => {
  const numberItemsInCart = useSelector(
    (state) => state.cartState.numberOfItemsInCart
  );

const user = useSelector((state)=>state.userState.user);

  if (numberItemsInCart === 0) {
    return (
      <div className="flex justify-center mt-32">
        <SectionTitle text="your cart is empty...Add more to shop more" />
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center mt-5">
        <SectionTitle text="Shopping Cart" />
      </div>
      <div className="mt-8 ml-48 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link className="btn btn-primary btn-block mt-8" to="/checkout">
              Proceed to checkout
            </Link>
          ) : (
            <Link className="btn btn-primary btn-block mt-8" to="/login">
              Please Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
