import axios from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router";
import Wrapper from "../Wrappers/Cocktail"
import { useQuery } from "@tanstack/react-query";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id)=>{
return {
  queryKey : ["cocktail",id],
  queryFn : async () => {
    const { data } = await axios.get(`${url}${id}`);
    return data;
  }
}
}

export const loader = (queryClient)=> async ({ params }) => {
  const { id } = params;
  await queryClient.ensureQueryData(singleCocktailQuery(id));
  return {  id };
};

const Cocktail = () => {
  const {  id } = useLoaderData();
  const {data} = useQuery(singleCocktailQuery(id));
  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strInstructions: instructions,
    strGlass: glass,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter((item) => {
      return item.startsWith("strIngredient") && singleDrink[item] !== null;
    })
    .map((item) => singleDrink[item]);

  // console.log(validIngredients);

  return (
    
      <Wrapper key={id}>
        <header>
          <Link to="/" className="btn">
            {" "}
            Back Home
          </Link>
          <h3>{name}</h3>
        </header>
        <div className="drink">
          <img src={image} alt={name} className="img" />
          <div className="drink-info">
            <p>
              <span className="drink-data">Name:</span>
              {name}
            </p>

            <p>
              <span className="drink-data">Category:</span>
              {category}
            </p>

            <p>
              <span className="drink-data">Info:</span>
              {info}
            </p>

            <p>
              <span className="drink-data">Glass:</span>
              {glass}
            </p>

            <p>
            <span className="drink-data">Ingredients:</span>
            {validIngredients.map((item,index)=>{
              return (<span>{item}{index<validIngredients.length-1?",":""}</span>)
            })}
            </p>

            <p>
              <span className="drink-data">Instructions:</span>
              {instructions}
            </p>
          </div>
        </div>
      </Wrapper>
    
  );
};

export default Cocktail;
