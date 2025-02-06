import React, { useState } from "react";

const ElementCount = () => {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let blueHandle = () => {
    setMoves((preVal) => {
      return { ...preVal, blue: preVal.blue + 1 };
    });
  };
  let yellowHandle = () => {
    setMoves((preVal) => {
      return { ...preVal, yellow: preVal.yellow + 1 };
    });
  };
  let greenHandle = () => {
    setMoves((preVal) => {
      return { ...preVal, green: preVal.green + 1 };
    });
  };
  let redHandle = () => {
    setMoves((preVal) => {
      return { ...preVal, red: preVal.red + 1 };
    });
  };
  return (
    <div>
      <p>Game Begins</p>
      <div>
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={blueHandle}>
          +1
        </button>
      </div>
      <div>
        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={yellowHandle}
        >
          +1
        </button>
      </div>
      <div>
        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={greenHandle}>
          +1
        </button>
      </div>
      <div>
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={redHandle}>
          +1
        </button>
      </div>
    </div>
  );
};

export default ElementCount;
