const initialValue = {
  theme: "LIGHT",
};

export const themeReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case "TOGGLE_THEME": {
      return { ...state, theme: payload };
    }

    default:
      return state;
  }
};
