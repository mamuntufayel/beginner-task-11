import React from "react";
import Banner from "../../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <h3 className="text-success text-center mt-5">
        Welcome to Hi-Fi Electronics
      </h3>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
};

export default Home;
