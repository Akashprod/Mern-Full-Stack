import { ADD, SUBTRACT } from "../../actionType";
import { loadData, saveData } from "../../utils/accessLocalStorage";

const initialState = {
  count: loadData("counter") || 0
};

export const counterReducerFunction = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD: 
    saveData("counter",state.count + payload)
    {
      return { ...state, count: state.count + payload };
    }
    case SUBTRACT:
    saveData("counter",state.count - payload )  
    {
      return { ...state, count: state.count - payload };
    }

    default:
      return state;
  }
};
