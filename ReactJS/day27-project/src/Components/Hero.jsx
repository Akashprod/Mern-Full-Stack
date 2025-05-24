import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp"
import hero2 from "../assets/hero2.webp"
import hero3 from "../assets/hero3.webp"
import hero4 from "../assets/hero4.webp"

const CarouselImages = [hero1,hero2,hero3,hero4];

const Hero = () => {
  return (
    <div className=" mx-2 lg:mx-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          This is a store where you can shop anything
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Store is a major Indian e-commerce company founded in 2007 by Sachin
          Bansal and Binny Bansal. It initially focused on online book sales but
          expanded into various product categories. Flipkart has a large
          customer base and a wide range of products, including electronics,
          fashion, and home appliances
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">Our Products</Link>
        </div>
      </div>

      <div className="lg:carousel carousel-center hidden h-[28rem] p-4 space-x-4 bg-neutral rounded-box" >
        {CarouselImages.map((image)=>{
          return(
            <div key={image} className="carousel-item" >
              <img src={image} className="rounded-box h-full w-80 object-cover" />
            </div>
          )
        })}
      </div>

    </div>
  );
};

export default Hero;
