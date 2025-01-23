import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../styles/main.module.css";

import Header from "../../Utils/components/Header";
import Account from "../components/Account";
import Category from "../components/Category";
import PinnedPostList from "Main/components/PinnedPostList";
import RecentPostList from "Main/components/RecentPostList";

import { useFetchUser } from "Utils/hooks/useFetchUser";
import { useRecentPostList } from "PostList/hooks/useRecentPostList";
import { usePinnedPostList } from "PostList/hooks/usePinnedPostList";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const { userInfo } = useFetchUser();

  const { recentPostList } = useRecentPostList({ page: 1, size: 5 });
  const { pinnedPostList } = usePinnedPostList({ page: 1, size: 5 });

  if (!userInfo || !recentPostList || !pinnedPostList) return null;

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
            <PinnedPostList postList={pinnedPostList} navigate={navigate} />
            <RecentPostList postList={recentPostList} navigate={navigate} />
          </div>
        </div>
        <div className={styles.category_box}>
          <Category />
        </div>
      </div>
    </>
  );
};

export default MainPage;
