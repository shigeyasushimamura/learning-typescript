import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Post } from "./ApiFetch";
import styles from "./PostDetail.module.css";

const PostDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id"); // クエリパラメータ "id" を取得
  const [post, setPost] = useState<Post>({});
  const [errMsg, setErrMsg] = useState<string | null>(null);
  console.log("id", id);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPost(res);
      })
      .catch(() => {
        setErrMsg("データ取得に失敗しました");
      });
  }, [id]);

  if (errMsg) {
    return (
      <>
        <section>
          <h1>{errMsg}</h1>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            再試行する
          </button>
        </section>
      </>
    );
  }

  return (
    <article className={styles.article}>
      <header className={styles.articleHeader}>
        <h1>記事詳細</h1>
        <h2>{post.title}</h2>
      </header>
      <div className={styles.articleMetaInfo}>
        <time dateTime="2024-12-31">投稿日:2024-12-31</time>
      </div>
      <section className={styles.articleContent}>{post.body}</section>
    </article>
  );
};

export default PostDetail;
