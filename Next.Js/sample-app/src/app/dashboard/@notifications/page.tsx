import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Notifactions</h1>
      <Link href={"/dashboard/archive"}>Archive</Link>
    </div>
  );
};

export default page;
