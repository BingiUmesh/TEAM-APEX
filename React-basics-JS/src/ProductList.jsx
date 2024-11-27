import React from "react";
import Product from "./Product";

const ProductList = () => {
  return (
    <>
      <Product title="Phones" price={10000} />
      <Product title="Laptop" price={100000} />
      <Product title="Ipad" price={25000} />
    </>
  );
};

export default ProductList;
