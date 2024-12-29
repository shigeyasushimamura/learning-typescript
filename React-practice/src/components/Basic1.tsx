import React, { useState } from "react";
import styles from "./Basic1.module.css";

const Basic1 = () => {
  const [product, setProduct] = useState({ name: "", price: "" });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, name: e.target.value });
  };

  return (
    <>
      <main>
        <h1>プロダクト管理</h1>

        <div>
          <article>
            <h4>Product name is {product.name}</h4>
            <h4>Product price is {product.price}</h4>
          </article>
          <form className={styles.form}>
            <h1>入力フォーム</h1>
            <div className={styles.container}>
              <div>
                <label htmlFor="name" className={styles.label}>
                  new Product name
                </label>
                <input
                  className={styles.input}
                  type="text"
                  value={product.name}
                  onChange={(e) => handleNameChange(e)}
                />
              </div>

              <div className="">
                <label htmlFor="price" className={styles.label}>
                  new Product Price
                </label>
                <input
                  id="price"
                  type="text"
                  className={styles.input}
                  value={product.price}
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                />
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Basic1;
