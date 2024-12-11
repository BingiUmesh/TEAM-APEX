import React from "react";
import Link from "next/link";

const Products = () => {
  const productId = 100;
  return (
    <div>
      <h1>Products list</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3">Product 3</Link>
      </h2>
      <h2>
        <Link href={`/products/${productId}`}>{`product ${productId}`}</Link>
      </h2>
    </div>
  );
};

export default Products;
