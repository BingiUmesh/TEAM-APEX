import React from "react";
import { useState } from "react";

const LIkeButton = () => {
  let [isToggle, setIsToggle] = useState(false);
  let setLike = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      <h1 onClick={setLike}>
        {isToggle ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </h1>
    </div>
  );
};

export default LIkeButton;
