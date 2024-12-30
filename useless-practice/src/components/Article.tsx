import styles from "./ApiFetch.module.css";
import { Post } from "./ApiFetch";
import { Link } from "react-router-dom";

const Article = ({ id, title, body }: Post) => {
  return (
    <article className={styles.card}>
      <Link to={`/postDetail?id=${id}`} key={id} className={styles.cardLink}>
        <header className={styles.cardHeader}>
          {id}:{title}
        </header>

        <div className={styles.cardContent}>{body}</div>
      </Link>
    </article>
  );
};

export default Article;
