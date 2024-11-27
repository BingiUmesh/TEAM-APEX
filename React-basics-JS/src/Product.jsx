import React from "react";
import "./Product.css";

const Product = ({ title, price, features }) => {
  // const list = features.map((feature) => <li>{feature}</li>);
  let styles = { backgroundColor: price > 30000 && "yellow" };
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>Price :{price}</h5>
      {/* <p>{list}</p> */}
      {/* <p>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p> */}

      {/* write a condition if price is greater than 30000 it should display get 5% discount and also bg color yellow*/}
      {price > 30000 && <p>Get 5% discount</p>}
    </div>
  );
};

export default Product;
