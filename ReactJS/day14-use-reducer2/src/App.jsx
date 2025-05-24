import React, { useReducer } from "react";

const initialValue = {
  name: "",
  age: 18,
  country: "",
};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, age: state.age + action.payload };
    }
    case "DECREMENT": {
      return { ...state, age: state.age - action.payload };
    }
    case "USERNAME": {
      return { ...state, name: action.payload };
    }
    case "COUNTRY":{
      return { ...state, country:action.payload}
    }
    case "SUBMIT":{
      return state=action.payload
    }
    default:
      return state;
  }
};

const App = () => {
  console.log("re-rendered");
  const [state, dispatch] = useReducer(reducerFunction, initialValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type : "SUBMIT",
      payload : initialValue
    })
    console.log(state);
  };

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
      payload: 1,
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "DECREMENT",
      payload: 1,
    });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">UserName : </label>
      <input
        type="text"
        value={state.name}
        onChange={(event) =>
          dispatch({
            type: "USERNAME",
            payload: event.target.value,
          })
        }
      />
      <br />
      <label htmlFor="">Age : </label>

      <button type="button" onClick={handleDecrement}>
        {" "}
        -{" "}
      </button>
      <span> {state.age} </span>
      <button type="button" onClick={handleIncrement}>
        {" "}
        +{" "}
      </button>
      <br />
      <label htmlFor="">Country : </label>
      <select name="" id="" onChange={(event)=>dispatch({
        type : "COUNTRY",
        payload : event.target.value
      })}>
        <option value="">Select Country</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="china">China</option>
      </select>
      <button type="submit">Update Details</button>
    </form>
  );
};

export default App;
