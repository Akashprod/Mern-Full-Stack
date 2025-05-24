import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { todoReducerFunction } from "./Todo/todoReducer";
import { counterReducerFunction } from "./Counter/counterReducer";
import { authReducerFunction } from "./Authentication/authReducer";
import { thunk } from "redux-thunk";

// const logger =(store)=>(dispatch)=>(action)=>{
  // console.log(a);
  // console.log(b);
  // console.log(c);

//   if(typeof action === "function"){
//     return action(dispatch);
//   }else return dispatch(action);

// }

const rootReducer = combineReducers({
  todoReducerFunction,
  counterReducerFunction,
  authReducerFunction
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));


