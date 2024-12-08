import React from "react";

const Product = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h2>product id {params.productId}</h2>
    </div>
  );
};

export default Product;
