import React, { useState, useEffect } from "react";
// import axios from "axios";
import Article from "./Article";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ApiFetch = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => {
    //     console.log(res);
    //     setPostList(res.data);
    //   })
    //   .catch((err) => console.log(err));

    //fetch
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((res: Post[]) => {
        console.log(res);
        setPostList(res);
      })
      .catch((err) => {
        console.log(err);
        setError("データの取得に失敗しました");
      });
  }, []);

  if (error) {
    return (
      <>
        <section>
          <h1>{error}</h1>
          <button onClick={() => window.location.reload()}>再試行する</button>
        </section>
      </>
    );
  }

  return (
    <>
      <h1>Apifetch</h1>
      <section>
        <h2>Post List</h2>
        {postList.map((post: Post) => {
          return <Article {...post} />;
        })}
      </section>
    </>
  );
};

export default ApiFetch;
