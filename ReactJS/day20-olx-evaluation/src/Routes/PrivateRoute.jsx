import React from "react";
import { GlobalUseContext } from "../Context/AuthContext";
import Login from "../Pages/LOgin";

const PrivateRoute = ({ children }) => {
  const { authState } = GlobalUseContext();

  return <div>{authState.isAuth ? children : <Login />}</div>;
};

export default PrivateRoute;
