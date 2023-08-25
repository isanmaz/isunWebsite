import { useParams } from "react-router-dom";
import articles from "./Artikle-content";

const ArticlePage = () => {
  //object destructuring
  const { articleId } = useParams();
  const article = articles.find((article) => article.articleId === articleId);

  return (
    <>
      <h1>{article.title} </h1>
      {article.content.map((par, index) => (
        <p key={index}>{par}</p>
      ))}
    </>
  );
};

export default ArticlePage;
