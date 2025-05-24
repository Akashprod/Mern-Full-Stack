import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utils.js";
import { useDispatch } from "react-redux";
import { addItem } from "../features/Cart/CartSlice.js";

const singleProductQuery = (id) => {
  return {
    queryKey: ["SingleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return { product: response.data.data };
  };

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, colors, company, description } =
    product.attributes;
  const IndianMoney = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const cartProduct = {
    cartID: product.id + productColor,
    productId: product.id,
    image,
    title,
    quantity,
    productColor,
    company,
    price,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  const handleQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  return (
    <section className="mx-4">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />

        <div>
          <h1 className="capitalize text-3xl font-bold ">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{IndianMoney}</p>
          <p className="mt-6 leading-8">{description}</p>
        </div>

        <div className="mt-6">
          <h4 className="text-md font-medium -tracking-wider capitalize">
            Colors
          </h4>
          <div className="mt-2">
            {colors.map((color) => {
              return (
                <button
                  key={color}
                  type="button"
                  className={`badge w-6 h-6 mr-2 ${
                    color === productColor && "border-3 border-secondary"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              );
            })}
          </div>
        </div>

        <div className=" w-full max-w-xs">
          <label className="label">
            <h4 className="text-md font-medium tracking-wider capitalize">
              amount
            </h4>
          </label>
          <select
            className="select select-secondary select-bordered select-md"
            value={quantity}
            onChange={handleQuantity}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>

        <div className="my-10">
          <button onClick={addToCart} className="btn btn-secondary btn-md">
            Add to bag
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
