import {
  ADD,
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  SUBTRACT,
  TODO_ERROR,
  TODO_REQUEST,
} from "../actionType";

const initialState = {
    count : 0,
    todo : [ ] ,
    isLoading : false,
    isError : false
}

export const reducerFunction = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD: {
      return { ...state, count: state.count + payload };
    }
    case SUBTRACT: {
      return { ...state, count: state.count - payload };
    }
    case TODO_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_TODO_SUCCESS: {
        console.log("GET_TODO_SUCCESS payload:", payload);
      return { ...state, todo: payload , isLoading: false, isError: false};
    }
    case TODO_ERROR: {
      return { ...state, isError: true };
    }
    case POST_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        todo: [...state.todo, payload],
      };
    }
    default:
      return state;
  }
};
