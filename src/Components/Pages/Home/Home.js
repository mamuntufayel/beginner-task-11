import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import "./Home.css";

import Banner from "../../Banner/Banner";
import HotSale from "../HotSale/HotSale";

import OurExclusive from "../OurExclusive/OurExclusive";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <h3 className="w-50 text-center mx-auto d-block mt-3 mb-2 text-deco">
        Welcome to Hi-Fi Electronics
      </h3>
      <Banner></Banner>
      <Products></Products>
      <OurExclusive></OurExclusive>
      <HotSale></HotSale>
      <div className="text-center">
        <Link
          title="click to manage inventory"
          className="w-25 fs-3 fw-bolder text-center mx-auto d-block mt-3 mb-2 text-deco"
          to="/allItems"
        >
          Manage Inventories
        </Link>
      </div>
    </div>
  );
};

export default Home;
