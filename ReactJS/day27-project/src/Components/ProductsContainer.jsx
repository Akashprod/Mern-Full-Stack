import React, { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductList from "./ProductList";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return ` btn btn-circle btn-sm ${
      pattern === layout
        ? "text-xl btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };

  return (
    <>
      <div className="flex justify-evenly items-center mt-8 border-b border-base-300 pb-5 mx-4 ">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>

        <div className="flex gap-x-2">
          <button
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>

      <div>
        {totalProducts === 0 ? (
          <h5>Snap, no product matches your search</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
