import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
}

const Basic2 = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [count, setCount] = useState<number>(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("useEffect invoked!");
    const interval = setInterval(addCount, 1000);
    return () => {
      clearInterval(interval);
      console.log("clear!");
    };
  }, []);

  const addProduct = () => {
    setProductList([...productList, { id: productList.length, name: "Hello" }]);
  };

  return (
    <>
      <h4>Basic2</h4>
      <section>
        <button onClick={addProduct}>Add new Product</button>

        <section>
          <h4>show productList</h4>
          <ul>
            {productList.map((product: Product) => {
              return (
                <li key={product.id}>
                  <span>{product.id}:</span>
                  <span>{product.name}</span>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <h1>counter:{count}</h1>
          <button onClick={addCount}>increment</button>
        </section>
      </section>
    </>
  );
};

export default Basic2;
