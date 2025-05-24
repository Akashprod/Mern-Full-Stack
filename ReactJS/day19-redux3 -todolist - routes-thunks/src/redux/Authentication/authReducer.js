import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actionType";

const initialStates = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: ""
};

export const authReducerFunction = (
  state = initialStates,
  { type, payload }
) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, isError: false, isAuth: false };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload,
      };
    }
    case LOGIN_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default : return state
  }
};
