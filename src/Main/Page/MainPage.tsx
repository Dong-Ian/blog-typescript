import React from "react";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { UserInfo } from "../Type/MainType";
import { Post } from "../../PostList/Type/PostListType";

import styles from "../Style/main.module.css";

import GetAccountFunction from "../Function/GetAccountFunction";
import {
  GetPinnedPostListFunction,
  GetRecentPostListFunction,
} from "../../PostList/Function/GetPostListFunction";

const MainPage: React.FC = () => {
  // const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [recentPostList, setRecentPostList] = useState<Post | null>(null);
  const [pinnedPostList, setPinnedPostList] = useState<Post | null>(null);

  async function GetAccount() {
    const result = await GetAccountFunction();

    if (result.result) {
      setUserInfo(result.profileResult);
      return;
    }

    alert("사용자 정보를 불러오지 못했습니다.");
    return;
  }

  async function GetRecentPostList() {
    const result = await GetRecentPostListFunction({ page: 1, size: 5 });

    if (result.result) {
      setRecentPostList(result.unpinnedPostList || []);
      return;
    }

    alert("최근 게시글을 불러오지 못했습나다.");
    return;
  }

  async function GetPinnedPostList() {
    const result = await GetPinnedPostListFunction({ page: 1, size: 5 });

    if (result.result) {
      console.log(result.pinnedPostList);
      setPinnedPostList(result.pinnedPostList || []);
      return;
    }

    alert("고정 게시글을 불러오지 못했습니다.");
    return;
  }

  useEffect(() => {
    GetAccount();
    GetRecentPostList();
    GetPinnedPostList();
  }, []);

  if (userInfo && recentPostList && pinnedPostList) {
    return (
      <>
        <Helmet title={userInfo.title} />
        <div className={styles.container}>
          <p>MainPage</p>
        </div>
      </>
    );
  }
};

export default MainPage;
