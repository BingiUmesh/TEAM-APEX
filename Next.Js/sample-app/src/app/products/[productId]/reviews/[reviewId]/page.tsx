import React from "react";

const reviewId = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <div>
      <h2>Product id {params.productId}</h2>
      <h2>review id {params.reviewId} </h2>
    </div>
  );
};

export default reviewId;
