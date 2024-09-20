import React from "react";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { UserInfoInterface } from "../Type/MainType";
import { PostInterface } from "../../PostList/Type/PostListType";

import styles from "../Style/main.module.css";

import Header from "../../Utils/Component/Header";

import GetAccountFunction from "../Function/GetAccountFunction";
import {
  GetPinnedPostListFunction,
  GetRecentPostListFunction,
} from "../../PostList/Function/GetPostListFunction";
import Account from "../Component/Account";

const MainPage: React.FC = () => {
  // const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserInfoInterface | null>(null);
  const [recentPostList, setRecentPostList] = useState<PostInterface | null>(
    null
  );
  const [pinnedPostList, setPinnedPostList] = useState<PostInterface | null>(
    null
  );

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
        <Header />
        <div className={styles.container}>
          <div className={styles.account_box}>
            {userInfo && <Account userInfo={userInfo} />}
          </div>
        </div>
      </>
    );
  }
};

export default MainPage;
