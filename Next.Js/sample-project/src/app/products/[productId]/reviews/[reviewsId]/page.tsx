import React from "react";

const page = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <div>
      <h2>
        {params.productId} and reviwid is {params.reviewId}
      </h2>
    </div>
  );
};

export default page;
