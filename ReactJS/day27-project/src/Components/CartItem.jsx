import React from "react";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/Cart/CartSlice";
import { formatPrice } from "../utils.js";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartID, title, price, image, quantity, productColor, company } =
    cartItem;

  const removeItemsFromCart = () => {
    dispatch(removeItem(cartID));
    
  };

  const handleQuantity = (e) => {
    dispatch(editItem({ cartID, quantity: parseInt(e.target.value) }));
  };
  return (
    <article key={cartID} className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border=b border-base-300 pb-6 last:border-b-0">
      <img src={image} alt={title} className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"/>
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="capitalize mt-2 text-sm text-neutral-content">{company}</h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          Color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>

      <div className="form-control max-w-sm">
        <label htmlFor="quantity" className="label">
          <span className="label-text mr-1 mb-1">Quantity</span>
        </label>
        <select
          className="select select-secondary select-bordered select-md"
          value={quantity}
          onChange={handleQuantity}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <button className="mt-2 link link-primary link-hover text-sm" onClick={removeItemsFromCart} >Remove</button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
