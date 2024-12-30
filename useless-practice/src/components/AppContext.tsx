import React, { useState, useEffect, useContext, createContext } from "react";

const AppContext = () => {
  const context = createContext();

  return (
    <section>
      <header>
        <h1>useContext 検証</h1>
      </header>
    </section>
  );
};
export default AppContext;
