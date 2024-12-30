import React from "react";

const MyBlog = () => {
  return (
    <>
      <header className="header-content">
        <div className="header-title">私のブログ</div>

        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="article-list">
          <article className="article-card">
            <header>
              <h2>記事タイトル1</h2>
              <p>投稿日: 2024-01-01</p>
            </header>

            <section className="content">
              <h3>2024技術トレンド</h3>
              <p>svelteとrust</p>
            </section>
            <footer>
              <p className="author">著者:eco</p>
              <p className="category">カテゴリー:web開発</p>
            </footer>
          </article>
          <article className="article-card">
            <header>
              <h2>記事タイトル2</h2>
              <p>投稿日: 2024-01-01</p>
            </header>

            <section className="content">
              <h3>2024技術トレンド</h3>
              <p>svelteとrust</p>
            </section>
            <footer>
              <p className="author">著者:eco</p>
              <p className="category">カテゴリー:web開発</p>
            </footer>
          </article>
          <article className="article-card">
            <header>
              <h2>記事タイトル3</h2>
              <p>投稿日: 2024-01-01</p>
            </header>

            <section className="content">
              <h3>2024技術トレンド</h3>
              <p>svelteとrust</p>
            </section>
            <footer>
              <p className="author">著者:eco</p>
              <p className="category">カテゴリー:web開発</p>
            </footer>
          </article>

          <article className="article-card">
            <header>
              <h2>記事タイトル4</h2>
              <p>投稿日: 2024-01-01</p>
            </header>

            <section className="content">
              <h3>2024技術トレンド</h3>
              <p>svelteとrust</p>
            </section>
            <footer>
              <p className="author">著者:eco</p>
              <p className="category">カテゴリー:web開発</p>
            </footer>
          </article>

          <article className="article-card">
            <header>
              <h2>記事タイトル5</h2>
              <p>投稿日: 2024-01-01</p>
            </header>

            <section className="content">
              <h3>2024技術トレンド</h3>
              <p>svelteとrust</p>
            </section>
            <footer>
              <p className="author">著者:eco</p>
              <p className="category">カテゴリー:web開発</p>
            </footer>
          </article>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 私のブログ. All rights reserved.</p>
      </footer>
    </>
  );
};

export default MyBlog;
