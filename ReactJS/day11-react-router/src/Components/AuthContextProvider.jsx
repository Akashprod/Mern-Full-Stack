import { createContext, useContext, useState } from "react";
import {  toast } from 'react-toastify';


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);

  const Login = () => {
    setIsAuth(true);
    toast("User Logged in");
  };

  const Logout = () => {
    setIsAuth(false);
    toast("User Logged out");
  };

  return (
    <AuthContext.Provider value={{ isAuth, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const GlobalContext = () => {
  return useContext(AuthContext);
};
