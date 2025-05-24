import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router";
import CocktailList from "./CocktailList";
import SearchForm from "../Components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailQuery = (searchTerm)=>{
  return{
    queryKey :["search",searchTerm || "all"],
    queryFn : async ()=>{
      searchTerm = searchTerm || "vodka";
      const response = await axios.get(`${url}${searchTerm}`);
      return response.data.drinks;
    }
  }
}

export const loader = (queryClient)=> async ({request}) => {
  // console.log(request);
  const newUrl = new URL(request.url);
  // console.log(url);
  const searchTerm = newUrl.searchParams.get("search") || "margarita";
  // const searchQuery = "margarita";
  // console.log(response);
  await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));
  return {
    searchTerm
  };
};

const Landing = () => {
  const {searchTerm } = useLoaderData();
  // console.log(drinks);

  const {data : drinks} = useQuery(searchCocktailQuery(searchTerm));

  return (
    <div>
      <SearchForm/>
      <CocktailList drinks={drinks} />
    </div>
  );
};

export default Landing;
