import React from "react";

import { Link } from "react-router-dom";

import Banner from "../../Banner/Banner";
import HotSale from "../HotSale/HotSale";

import OurExclusive from "../OurExclusive/OurExclusive";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <h3 className="text-success text-center mt-5">
        Welcome to Hi-Fi Electronics
      </h3>
      <Banner></Banner>
      <Products></Products>
      <OurExclusive></OurExclusive>
      <HotSale></HotSale>
      <div className="text-center">
        <Link
          className="text-decoration-none fw-bolder fs-3 text-success"
          to="/allItems"
        >
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default Home;
