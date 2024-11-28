import React, { useState } from "react";

const Count = () => {
  let [count, setCount] = useState(0);
  let increment = () => {
    let inc = count + 1;
    setCount(inc);
    console.log(count);
  };
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={increment}>Increment count</button>
    </div>
  );
};

export default Count;
