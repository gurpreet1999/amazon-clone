import React from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard";
import MetaData from "../Layout/MetaData";
import axios from "axios";
import { useQuery } from "react-query";
import Loader from "../Layout/Loader/Loader";

const Home = () => {
  const fetchAllProducts = async () => {
    const { data } = await axios.get("http://localhost/5000/api/v1/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    return data;
  };

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["allProducts"], fetchAllProducts);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <MetaData title="ECOMMERCE" />
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>

            <h2 className="homeHeading">Featured Products</h2>
            <div className="container" id="container">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
