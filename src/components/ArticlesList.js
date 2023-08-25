import { Link } from "react-router-dom";
const ArticlesList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div>
          <Link
            key={item.articleId}
            className="article-list-item"
            to={`/articles/${item.articleId}`}
          >
            <h3>{item.title}</h3>
            <p>{item.content[0].substring(0, 10)}...</p>
          </Link>
        </div>
      ))}
    </>
  );
};
export default ArticlesList;
