import "./App.css";
import AboutPage from "./pages/AboutPage";
import ArticlesListPages from "./pages/ArticlesListPages";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/articles" element={<ArticlesListPages />} />

            <Route path="/articles/:articleId" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
