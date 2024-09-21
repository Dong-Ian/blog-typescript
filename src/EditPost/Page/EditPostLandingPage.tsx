import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PostInterface } from "Post/Type/PostType";

import GetPostFunction from "Post/Function/GetPostFunction";
import GetCategoryFunction from "Posting/Function/GetCategoryFunction";

import EditPostPage from "./EditPostPage";

const EditPostLandingPage: React.FC = () => {
  const navigate = useNavigate();
  let { postSeq } = useParams();

  const [post, setPost] = useState<PostInterface | null>(null);
  const [categoryList, setCategoryList] = useState<string[] | null>(null);

  async function GetCategoryList() {
    const result = await GetCategoryFunction();

    if (result.result) {
      setCategoryList(result.categoryList);
      return;
    }

    alert("카테고리를 불러오지 못했습니다.");
    navigate(`/postlist/${postSeq}`);
    return;
  }

  async function GetPost() {
    if (!postSeq) {
      alert("유효하지 않은 포스트 번호입니다.");
      return;
    }

    const result = await GetPostFunction({ postSeq: postSeq });

    if (result.result) {
      setPost(result.postList);
      return;
    }

    alert("게시글을 불러오던 중 오류가 발생했습니다.");
    navigate(`/postlist/${postSeq}`);
    return;
  }

  useEffect(() => {
    if (!post) {
      GetPost();
      GetCategoryList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  if (post && categoryList) {
    return <EditPostPage post={post} categoryList={categoryList} />;
  }

  return null;
};

export default EditPostLandingPage;
