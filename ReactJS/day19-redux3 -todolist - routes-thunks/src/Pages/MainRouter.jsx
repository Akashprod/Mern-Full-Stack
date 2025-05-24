import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import PrivateRoute from "../Components/PrivateRoute";
import Counter from "../Components/Counter";
import TodoList from "../Components/TodoList";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/counter"
        element={
          <PrivateRoute>
            <Counter />
          </PrivateRoute>
        }
      />
      <Route path="/todo" element={<TodoList />} />
    </Routes>
  );
};

export default MainRouter;
