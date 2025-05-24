import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/Features/Cart/CartSlice"
import modalReducer from "../src/Features/Modal/ModalSlice"

export const store = configureStore(
    {
        reducer : {
            cart : cartReducer,
            modal : modalReducer
        }
    }
)