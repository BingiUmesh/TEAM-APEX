import React from "react";
import Link from "next/link";

const blogPage = () => {
  return (
    <div>
      <h2>Blog page</h2>
      <Link href="/blog/first">FirstBlog</Link>
      <Link href="/blog/second">SecondBlog</Link>
    </div>
  );
};

export default blogPage;
