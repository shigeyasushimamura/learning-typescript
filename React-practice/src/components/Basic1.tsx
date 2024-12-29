import React, { useState } from "react";
import Basic1Child from "./Basic1Child";

const Basic1 = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    console.log("clicked!");
    setCount((count) => count + 1);
  };

  return (
    <>
      <main>
        <div className="">
          <h1>Basic1</h1>
          <Basic1Child name="hoge" />
          <Basic1Child name="fuga" />
        </div>
        <p>Click count:{count}</p>
        <button onClick={clickHandler}>Click Me!</button>
      </main>
    </>
  );
};

export default Basic1;
