import { legacy_createStore } from "redux";
import { reducerFunction } from "./reducer";

const initialState = {
    count : 0,
    
}


export const store = legacy_createStore(reducerFunction, initialState);