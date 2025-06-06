import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id != id);
    },
    increase : (state,{payload})=>{
        const cartItem = state.cartItems.find((item)=>item.id === payload)
        cartItem.amount = cartItem.amount+1;
    },
    decrease : (state,{payload})=>{
        const cartItem = state.cartItems.find((item)=>item.id === payload);
        if(cartItem.amount < 1){
          cartItem.amount = cartItem.amount;
        }else{
          cartItem.amount = cartItem.amount-1;
        }
        
    },
    calculateTotals : (state)=>{
        let amount = 0;
        let total = 0;

        state.cartItems.forEach((item)=>{
            amount += item.amount;
            total += item.amount * item.price;
        })
        state.amount = amount;
        state.total = total;
        console.log(amount,total);
    }
  },
});

export default cartSlice.reducer;
export const { clearCart,removeItem,increase,decrease,calculateTotals } = cartSlice.actions;
