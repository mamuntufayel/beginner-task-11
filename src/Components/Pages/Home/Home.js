import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import Banner from "../../Banner/Banner";
import HotSale from "../HotSale/HotSale";
import Loading from "../Loading/Loading";
import OurExclusive from "../OurExclusive/OurExclusive";
import Products from "../Products/Products";

const Home = () => {
  const [loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-success text-center mt-5">
        Welcome to Hi-Fi Electronics
      </h3>
      <Banner></Banner>
      <Products></Products>
      <OurExclusive></OurExclusive>
      <HotSale></HotSale>
    </div>
  );
};

export default Home;
