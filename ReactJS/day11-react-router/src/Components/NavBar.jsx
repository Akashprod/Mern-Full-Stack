import React from "react";
import { NavLink } from "react-router";
import { GlobalContext } from "./AuthContextProvider";

const links = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/cart",
    text: "Cart",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/users",
    text: "Users",
  },
];

const defaultStyle = { color: "black", textDecoration: "none" };
const activeStyle = {
  color: "white",
  textDecoration: "none",
  text: "bold",
  background: "blue",
  padding: "4px",
};

const NavBar = () => {
    const {isAuth,Login,Logout} = GlobalContext();
  return (

    

    <div style={{ display: "flex", gap: "20px" }}>
      {links.map((link) => {
        return (
          <NavLink
            to={link.path}
            key={link.path}
            style={({ isActive }) => {
              return isActive ? activeStyle : defaultStyle;
            }}
          >
            {link.text}
          </NavLink>
        );
      })}

      {isAuth && <button onClick={Logout}>Logout</button>}
    </div>
    
  );
  
};

export default NavBar;
