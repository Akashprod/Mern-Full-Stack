import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/LOgin";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/product/:id/view"
        element={
          <PrivateRoute>
            <ProductDetailsPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

// "email":"bruce@wayne.com",
//     "password":"gotham123"

export default AllRoutes;
