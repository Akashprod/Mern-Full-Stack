import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuth: false,
    userDetails: null,
  });

  const LoginUser = (userDetails) => {
    setAuthState({
      isAuth: true,
      userDetails: userDetails,
    });
  };

  const LogoutUser = () => {
    setAuthState({
      isAuth: false,
      userDetails: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, LoginUser, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const GlobalUseContext = () => {
  return useContext(AuthContext);
};
