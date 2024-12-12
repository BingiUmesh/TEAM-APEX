"use client";
import React from "react";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random()) * count;
}

const reviewId = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  const random = getRandomInt(2);
  // console.log(random);
  if (random == 1) {
    throw new Error("Error loading review");
  }

  if (parseInt(params.reviewId) > 1000) notFound();

  return (
    <div>
      <h2>Product id {params.productId}</h2>
      <h2>review id {params.reviewId} </h2>
    </div>
  );
};

export default reviewId;
