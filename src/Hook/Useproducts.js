import React, { useEffect, useState } from "react";

const Useproducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://serene-badlands-74233.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default Useproducts;
