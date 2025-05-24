import React from "react";
import CocktailCard from "./CocktailCard";
import Wrapper from '../Wrappers/CocktailList'
import { useOutletContext } from "react-router";

const CocktailList = ({ drinks }) => {
  if (!drinks || drinks === "no data found") {
    return (
      <h4 style={{ textAlign: "center" }}>No matched Cocktails found!!!</h4>
    );
  }

  // const data = useOutletContext();
  // console.log(data);

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  // console.log(formattedDrinks);

  return <Wrapper>{
    formattedDrinks.map((item)=>{
        return <CocktailCard key={item.id} {...item} />
    })
    }</Wrapper>;
};

export default CocktailList;
