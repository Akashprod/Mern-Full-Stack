import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./Pages";

import ErrorElement from "./Components/ErrorElement";

import { loader as LandingLoader } from "./Pages/Landing";
import { loader as SingleProductLoader } from "./Pages/SingleProduct";
import { loader as ProductLoader } from "./Pages/Products";
import { loader as CheckoutLoader } from "./Pages/Checkout";
import { loader as OrdersLoader } from "./Pages/Orders";

import { action as registerAction } from "./Pages/Register";
import { action as loginAction } from "./Pages/Login";
import { action as CheckoutAction } from "./Components/CheckoutForm";

import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
      children: [
        {
          index: "true",
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: LandingLoader(queryClient),
        },
        {
          path: "products",
          element: <Products />,
          errorElement: <ErrorElement />,
          loader: ProductLoader(queryClient),
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          ErrorElement: <ErrorElement />,
          loader: SingleProductLoader(queryClient),
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "checkout",
          element: <Checkout />,
          loader: CheckoutLoader(store),
          action: CheckoutAction(store,queryClient),
        },
        {
          path: "orders",
          element: <Orders />,
          loader: OrdersLoader(store,queryClient),
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
      action: loginAction(store),
    },
    {
      path: "register",
      element: <Register />,
      action: registerAction,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
