import {
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_ERROR,
  TODO_REQUEST,
} from "../../actionType";

const initialState = {
  todo: [],
  isLoading: false,
  isError: false,
};

export const todoReducerFunction = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_TODO_SUCCESS: {
      // console.log("GET_TODO_SUCCESS payload:", payload);
      return { ...state, todo: payload, isLoading: false, isError: false };
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
