import React from "react";
import Product from "./Product";

const ProductList = () => {
  const products = [
    "Logitech MX Master",
    "Apple pencil (2nd Gen)",
    "Zebronics Zeb-transformer",
    "Petronics Toad 23",
  ];
  const discription = [
    ["8,000 DPI", "5 Programmable Buttons"],
    ["Intutive Surface", "Designed for i Pad Pro"],
    ["Designed for i Pad Pro", "Intutive Surface"],
    ["Wireless", "Optical Orientation"],
  ];
  const price = [
    ["12,495", "8,999"],
    ["11,900", "9,199"],
    ["15,99", "899"],
    ["599", "278"],
  ];
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <h1>Block Buster Deals | Shop Now</h1>
      <div style={style}>
        <Product
          productName={products[0]}
          discription={discription[0]}
          price={price[0]}
        />
        <Product
          productName={products[1]}
          discription={discription[1]}
          price={price[1]}
        />
        <Product
          productName={products[2]}
          discription={discription[2]}
          price={price[2]}
        />
        <Product
          productName={products[3]}
          discription={discription[3]}
          price={price[3]}
        />
      </div>
    </>
  );
};

export default ProductList;
