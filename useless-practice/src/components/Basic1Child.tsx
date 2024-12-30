import React from "react";

const Basic1Child = (props: { name: string }) => {
  return (
    <>
      <p>my name is {props.name}</p>
    </>
  );
};

export default Basic1Child;
