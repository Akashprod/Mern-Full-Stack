import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loginFailureAction,
  loginRequestAction,
  loginSuccessAction,
} from "../redux/Authentication/authAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginRequestAction());

    const userData = {
      email,
      password,
    };

    axios
      .post("https://reqres.in/api/login", userData)
      .then((res) => {
        console.log(res.data);
        return dispatch(loginSuccessAction(res.data));
      })
      .catch((error) => {
        console.log(error);
        return dispatch(loginFailureAction());
      });
  };

  return (
    <>
      <h1>Login here to proceed...</h1>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
