import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItem: [],
  numberOfItemsInCart: 0,
  cartTotal: 0,
  tax: 0,
  shippingCharge: 500,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      const item = state.cartItem.find(
        (item) => item.cartID === product.cartID
      );

      if (item) {
        item.quantity += product.quantity;
      } else {
        state.cartItem.push(product);
      }
      state.cartTotal += product.price * product.quantity;
      state.numberOfItemsInCart += product.quantity;

      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Items added to the cart");
    },

    removeItem: (state, action) => {
      const  cartID  = action.payload;

      const product = state.cartItem.find((item) => item.cartID === cartID);
      state.cartItem = state.cartItem.filter((item) => item.cartID !== cartID);

      state.numberOfItemsInCart -= product.quantity;
      state.cartTotal -= product.price * product.quantity;

      cartSlice.caseReducers.calculateTotals(state);

      toast.error("Items removed from cart successfully");
    },

    editItem: (state, action) => {
      const { cartID, quantity } = action.payload;

      const item = state.cartItem.find((item) => item.cartID === cartID);
      
      state.numberOfItemsInCart += quantity - item.quantity;
      state.cartTotal += item.price * (quantity - item.quantity);
      item.quantity = quantity;

      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Items edited successfully");
    },

    clearCart: () => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },

    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shippingCharge;
      localStorage.setItem(
        "cart",
        JSON.stringify(JSON.parse(JSON.stringify(state)))
      );
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
