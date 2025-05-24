import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../features/User/userSlice";
import { clearCart } from "../features/Cart/CartSlice";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userState.user);

const queryClient = useQueryClient();

  const handleLogout = ()=>{
    navigate("/");
    dispatch(logOutUser());
    dispatch(clearCart());
    queryClient.removeQueries();
  }

  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center " >
            <p className="text-xs sm:text-sm">Hello to {user.username}</p>
            <button className="btn btn-secondary btn-hover" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              create account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
