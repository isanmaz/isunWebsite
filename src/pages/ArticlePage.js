import { useParams } from "react-router-dom";
import articles from "./Artikle-content";
import NotFoundPage from "./NotFoundPage";
import axios from "axios";
import { useState, useEffect } from "react";
import CommentList from "../components/CommentList";
const ArticlePage = () => {
  //object destructuring
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      if (newArticleInfo) {
        setArticleInfo(newArticleInfo);
      }
    }
    fetchData();
  }, []);
  

  const article = articles.find((article) => article.articleId === articleId);
  if (!article) {
    return <NotFoundPage />;
  }
  return (
    <>
      <h1>{article.title} </h1>
      <p>This article has {articleInfo.upvote}</p>
      {article.content.map((par) => (
        <p key={par}>{par}</p>
      ))}
      <CommentList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
