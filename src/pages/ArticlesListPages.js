import articles from "./Artikle-content";
import ArticlesList from "../components/ArticlesList";
const ArticlesListPages = () => {
  return (
    <>
      <h1>Articles List</h1>
      <ArticlesList item={articles} />
    </>
  );
};
export default ArticlesListPages;
