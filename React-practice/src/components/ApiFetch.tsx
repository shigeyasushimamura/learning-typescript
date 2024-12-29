import React, { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ApiFetch = () => {
  const [postList, setPostList] = useState<Post[]>([]);

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
      .then((res) => {
        console.log(res);
        setPostList(res);
      });
  }, []);

  return (
    <>
      <h1>Apifetch</h1>
      <section>
        <h2>Post List</h2>
        {postList.map((post: Post) => {
          return (
            <article key={post.id}>
              <h3>
                {post.id}:{post.title}
              </h3>
              <p>{post.body}</p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default ApiFetch;
