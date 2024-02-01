import { Link } from "react-router-dom";
import "./ArticleList.css";

const ArticlesList = ({ items } ) => {
  return (
    <>
      {items.map((item) => (
        <div className="articles" key={item.articleId}>
          <Link
            key={item.articleId}
            className="article-list-item"
            to={`/articles/${item.articleId}`}
          >
            <h3>{item.title}</h3>
            <p>{item.content[0].substring(0, 200)}...</p>
          </Link>
        </div>
      ))}
    </>
  );
};
export default ArticlesList;
