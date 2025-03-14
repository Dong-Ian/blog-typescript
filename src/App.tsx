import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./features/Main/pages/MainPage";
import LoginPage from "./features/Login/pages/LoginPage";

import PostListPage from "./features/PostList/pages/PostListPage";
import PinnedPostListPage from "./features/PostList/pages/PinnedPostListPage";
import CategoryPostListPage from "./features/PostList/pages/CategoryPostListPage";
import TagPostListPage from "./features/PostList/pages/TagPostListPage";

import PostPage from "./features/Post/pages/PostPage";
import PostingPage from "./features/Posting/pages/PostingPage";
import EditPostLandingPage from "./features/EditPost/pages/EditPostLandingPage";
import AdminLandingPage from "./features/Admin/pages/AdminLandingPage";
import VerifyUserRoute from "Utils/components/VerifyUserRoute";

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
        <Route path="/postlist/tag/:tag" element={<TagPostListPage />} />
        <Route path="/post/:postSeq" element={<PostPage />} />

        <Route
          path="/posting"
          element={
            <VerifyUserRoute>
              <PostingPage />
            </VerifyUserRoute>
          }
        />
        <Route
          path="/edit/:postSeq"
          element={
            <VerifyUserRoute>
              <EditPostLandingPage />
            </VerifyUserRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <VerifyUserRoute>
              <AdminLandingPage />
            </VerifyUserRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
