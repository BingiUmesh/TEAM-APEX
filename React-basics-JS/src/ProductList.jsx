import React from "react";
import Product from "./Product";

const ProductList = () => {
  let list1 = ["hi", "hello", "bye"];
  return (
    <>
      {/* <Product title="Phones" price={10000} features={list1} /> */}
      <Product title="Phones" price={10000} features={list1} />
      <Product title="Laptop" price={100000} />
      <Product title="Ipad" price={25000} />
    </>
  );
};

export default ProductList;
