import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Main/Page/MainPage";
import LoginPage from "Login/Page/LoginPage";

import PostListPage from "PostList/Page/PostListPage";
import PinnedPostListPage from "PostList/Page/PinnedPostListPage";
import CategoryPostListPage from "PostList/Page/CategoryPostListPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/postlist" element={<PostListPage />} />
        <Route path="/postlist/pinned" element={<PinnedPostListPage />} />
        <Route
          path="/postlist/category/:category"
          element={<CategoryPostListPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
