import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/User/userSlice";

const NavBar = () => {
  const theme = useSelector((state) => state.userState.theme);
  const isDarkTheme = theme === "dracula";

  const dispatch = useDispatch();

  const numberOfItemsInCart = useSelector(
    (state) => state.cartState.numberOfItemsInCart
  );

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink to="/" className="hidden lg:flex btn btn-primary text-3xl">
            Store
          </NavLink>
          <div className="dropdown">
            <label className="btn btn-ghost lg:hidden">
              <FaBarsStaggered tabIndex={0} className="w-6 h-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-0 p-2 shadow-2xl bg-base-300 rounded-xl"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end gap-x-4">
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="indicator-item badge badge-sm badge-primary">
                {numberOfItemsInCart}
              </span>
            </div>
          </NavLink>
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleTheme}
              defaultChecked={isDarkTheme}
            />
            <BsSunFill className="swap-on h-6 w-6" />
            <BsMoonFill className="swap-off h-6 w-6" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
