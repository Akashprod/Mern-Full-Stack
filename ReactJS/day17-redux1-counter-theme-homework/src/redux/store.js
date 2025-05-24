import { combineReducers, legacy_createStore } from "redux";
import { reducerFunction } from "./reducer";

import { themeReducer } from "./themeReducer";

const rootReducer = combineReducers({
  counter: reducerFunction,
  theme: themeReducer,
});

export const store = legacy_createStore(rootReducer);
