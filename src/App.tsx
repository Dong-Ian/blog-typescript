import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Main/Page/MainPage";
import LoginPage from "Login/Page/LoginPage";

import PostListPage from "PostList/Page/PostListPage";
import PinnedPostListPage from "PostList/Page/PinnedPostListPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/postlist" element={<PostListPage />} />
        <Route path="/postlist/pinned" element={<PinnedPostListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
