import React from "react";
import { Link } from "react-router";
import { GlobalUseContext } from "../Context/AuthContext";

const NavBar = () => {
  const { authState, LogoutUser } = GlobalUseContext();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <Link
        to="/"
        style={{
          margin: "5px",
          padding: "5px",
          textDecorationLine: "none",
          fontWeight: "bold",
        }}
      >
        My OLX
      </Link>

      {authState.isAuth ? (
        <>
        <h4>Welcome Datar Baabu</h4>
         <button style={{ margin: "5px", padding: "5px" }} onClick={LogoutUser}>Logout</button>
        </>
       
      ) : (
        <Link style={{ margin: "5px", padding: "5px" }} to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavBar;
