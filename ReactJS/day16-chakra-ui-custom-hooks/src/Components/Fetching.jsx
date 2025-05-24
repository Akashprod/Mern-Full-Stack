import React from "react";
import useFetch from "../custom hooks/useFetch";

const url = "https://fakestoreapi.com/products";

const Fetching = () => {
 
const{data,loading,error} = useFetch(url);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>{error}</h1>;

  return (
    <div>
      {data.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
};

export default Fetching;
