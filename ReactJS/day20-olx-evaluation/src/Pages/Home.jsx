import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

import "react-loading-skeleton/dist/skeleton.css";
import Loading from "../Components/Loading";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setLoading(false);
        return setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <ProductCard {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
