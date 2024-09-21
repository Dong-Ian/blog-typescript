import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { isLoggedInState } from "Utils/Atom/Atom";

import MainPage from "./Main/Page/MainPage";
import LoginPage from "Login/Page/LoginPage";

import PostListPage from "PostList/Page/PostListPage";
import PinnedPostListPage from "PostList/Page/PinnedPostListPage";
import CategoryPostListPage from "PostList/Page/CategoryPostListPage";
import TagPostListPage from "PostList/Page/TagPostListPage";

import PostPage from "Post/Page/PostPage";
import PostingPage from "Posting/Page/PostingPage";
import EditPostLandingPage from "EditPost/Page/EditPostLandingPage";

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
      </Routes>
    </Router>
  );
};

export default App;
