import React from "react";
import { Link } from "react-router";


const ProductCard = ({ images, price, title, location,id }) => {
  return (


<div>
      <img src={images} alt="" />
      <h4>Price {price}</h4>
      <h2>{title}</h2>
     
      <h3>{location}</h3>
      <Link to={`/product/${id}/view`} style={{textDecoration:"none"}}>
      <p>More Info...</p>
      </Link>
    </div>


    
  );
};

export default ProductCard;
