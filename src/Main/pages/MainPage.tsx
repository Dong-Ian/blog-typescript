import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../styles/main.module.css";
import { UserInfoInterface, RenderPostListProps } from "../types/Main.type";
import { PostInterface } from "../../PostList/Type/PostListType";
import Header from "../../Utils/Component/Header";
import Account from "../components/Account";
import PostList from "../../PostList/Component/PostList";
import Category from "../components/Category";
import getAccount from "../services/getAccount.service";
import {
  GetPinnedPostListFunction,
  GetRecentPostListFunction,
} from "../../PostList/Function/GetPostListFunction";

const RenderPinnedPostList: React.FC<RenderPostListProps> = ({
  postList,
  navigate,
}) => {
  return (
    <div className={styles.pinned_box}>
      <div className={styles.btn} onClick={() => navigate("/postlist/pinned")}>
        {"고정글 >"}
      </div>
      {postList && postList.length !== 0 ? (
        <PostList postList={postList} />
      ) : (
        <div className={styles.null_post}>등록된 게시글이 없습니다</div>
      )}
    </div>
  );
};

const RenderRecentPostList: React.FC<RenderPostListProps> = ({
  postList,
  navigate,
}) => {
  return (
    <div className={styles.unpinned_box}>
      <div className={styles.btn} onClick={() => navigate("/postlist")}>
        {"최신글 >"}
      </div>
      {postList && postList.length !== 0 ? (
        <PostList postList={postList} />
      ) : (
        <div className={styles.null_post}>등록된 게시글이 없습니다</div>
      )}
    </div>
  );
};

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<UserInfoInterface | null>(null);
  const [recentPostList, setRecentPostList] = useState<PostInterface[] | null>(
    null
  );
  const [pinnedPostList, setPinnedPostList] = useState<PostInterface[] | null>(
    null
  );

  async function handleGetAccount() {
    const result = await getAccount();

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
    handleGetAccount();
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
          <div className={styles.box}>
            <div className={styles.outer_post_box}>
              <RenderPinnedPostList
                postList={pinnedPostList}
                navigate={navigate}
              />
              <RenderRecentPostList
                postList={recentPostList}
                navigate={navigate}
              />
            </div>
          </div>
          <div className={styles.category_box}>
            <Category />
          </div>
        </div>
      </>
    );
  }
};

export default MainPage;
