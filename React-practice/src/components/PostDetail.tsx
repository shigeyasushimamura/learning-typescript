import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Post } from "./ApiFetch";

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
    <>
      <header>
        <h1>記事詳細</h1>
      </header>

      <main>
        <article>
          <header>{post.title}</header>
          <section>{post.body}</section>
        </article>
      </main>
    </>
  );
};

export default PostDetail;
