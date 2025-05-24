import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import {
  About,
  SinglePageError,
  HomeLayout,
  Cocktail,
  NewsLetter,
  Error,
  Landing,
} from "./assets/index";
import { loader as landingLoader } from "./Pages/Landing";
import {loader as singleCocktailLoader} from "./Pages/Cocktail"
import {action as newsLetterAction} from "./Pages/NewsLetter"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient =new  QueryClient({
  defaultOptions :{
    queries : {
      staleTime : 1000*60*5,
    }
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, 
        element: <Landing />, 
        errorElement: <SinglePageError />,
        loader : landingLoader(queryClient) },
      { path: "cocktail/:id", 
        element: <Cocktail />,
        loader : singleCocktailLoader(queryClient)
       },
      { path: "newsletter",
         element: <NewsLetter />,
        action: newsLetterAction},
      { path: "about", element: <About /> },
    ],
  },
]);




const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={true}/>
    </QueryClientProvider>
   
    </>
      
    
  );
};

export default App;
