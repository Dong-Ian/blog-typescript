import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { isLoggedInState } from "Utils/Atom/Atom";

import MainPage from "./Main/pages/MainPage";
import LoginPage from "Login/pages/LoginPage";

import PostListPage from "PostList/pages/PostListPage";
import PinnedPostListPage from "PostList/pages/PinnedPostListPage";
import CategoryPostListPage from "PostList/pages/CategoryPostListPage";
import TagPostListPage from "PostList/pages/TagPostListPage";

import PostPage from "Post/pages/PostPage";
import PostingPage from "Posting/pages/PostingPage";
import EditPostLandingPage from "EditPost/pages/EditPostLandingPage";
import AdminLandingPage from "Admin/pages/AdminLandingPage";

const App: React.FC = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

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
        <Route path="/postlist/tag/:tag" element={<TagPostListPage />} />
        <Route path="/post/:postSeq" element={<PostPage />} />
        {isLoggedIn && <Route path="/posting" element={<PostingPage />} />}
        {isLoggedIn && (
          <Route path="/edit/:postSeq" element={<EditPostLandingPage />} />
        )}
        {isLoggedIn && <Route path="/admin" element={<AdminLandingPage />} />}
      </Routes>
    </Router>
  );
};

export default App;
