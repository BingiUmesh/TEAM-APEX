"use client";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("your order placed sucessfully");
    router.push("/"); //pushing / to stack
    // router.replace("/");//replace the stack history to /(home)
    // router.back();//goes to back to previous page
  };
  return (
    <div>
      <h1>Place order</h1>
      <button onClick={handleClick}>place order</button>
    </div>
  );
};

export default page;
