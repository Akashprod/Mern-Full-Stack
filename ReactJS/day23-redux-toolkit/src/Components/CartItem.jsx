import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../Features/Cart/CartSlice";

const CartItem = ({ id, title, img, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button onClick={() => dispatch(removeItem(id))} className="remove-btn">
          remove
        </button>
      </div>
      <div>
        <button onClick={()=>dispatch(increase(id))} className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button onClick={()=>dispatch(decrease(id))} className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
