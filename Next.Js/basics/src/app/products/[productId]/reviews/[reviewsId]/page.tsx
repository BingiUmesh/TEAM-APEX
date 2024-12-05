"use client";
import React from "react";
import { notFound } from "next/navigation"; // Correct import for Next.js `notFound`

const Page = ({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) => {
  // console.log(params.reviewsId); // Debugging line

  if (parseInt(params.reviewsId) > 1000) {
    console.log("Navigating to notFound page for reviewId:", params.reviewsId); // Debugging line
    return notFound(); // Redirects to the "Not Found" page
  }

  return (
    <div>
      <h2>
        {params.productId} and reviewId is {params.reviewsId}
      </h2>
    </div>
  );
};

export default Page;
