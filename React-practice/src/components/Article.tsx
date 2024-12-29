import React, { useState, useEffect } from "react";
import styles from "./ApiFetch.module.css";
import { Post } from "./ApiFetch";
import { Link } from "react-router-dom";

const Article = ({ id, title, body }: Post) => {
  return (
    <>
      <article className={styles.card} key={id}>
        <Link to={`/postDetail?id=${id}`} key={id}>
          <header className={styles.cardHeader}>
            {id}:{title}
          </header>
        </Link>
        <p className={styles.cardContent}>{body}</p>
      </article>
    </>
  );
};

export default Article;
