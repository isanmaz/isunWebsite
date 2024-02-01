import articles from "./Artikle-content";
import ArticlesList from "../components/ArticlesList";
import "../components/ArticleList.css";
const ArticlesListPages = () => {
  return (
    <>
      <h1 className="article-list-title">Articles List</h1>
      <ArticlesList 
      key={articles.articleId}
      items={articles} />
    </>
  );
};
export default ArticlesListPages;
