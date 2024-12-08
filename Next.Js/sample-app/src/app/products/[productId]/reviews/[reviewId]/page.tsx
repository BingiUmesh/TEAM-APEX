import React from "react";
import { notFound } from "next/navigation";
const reviewId = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) notFound();

  return (
    <div>
      <h2>Product id {params.productId}</h2>
      <h2>review id {params.reviewId} </h2>
    </div>
  );
};

export default reviewId;
