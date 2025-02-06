import React from "react";
import "./Product.css";

const Price = ({ price }) => {
  let oldPrice = {
    textDecoration: "line-through",
  };
  let newPrice = {
    fontWeight: "bold",
  };
  let style = {
    backgroundColor: "yellow",
    // paddingBottom: "10px",
    height: "2em",
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };
  return (
    <>
      <div style={style}>
        <span style={oldPrice}>{price[0]}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newPrice}>{price[1]}</span>
      </div>
    </>
  );
};

const Product = ({ productName, discription, price }) => {
  return (
    <div className="Product">
      <h3>{productName}</h3>
      <p>{discription[0]}</p>
      <p>{discription[1]}</p>
      <Price price={price} />
    </div>
  );
};

export default Product;
