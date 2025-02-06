import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../styles/main.module.css";
import Account from "Main/components/Account";
import Category from "Main/components/Category";
import PinnedPostList from "Main/components/PinnedPostList";
import RecentPostList from "Main/components/RecentPostList";
import Header from "Utils/components/Header";
import Loading from "Utils/components/Loading";
import { useRecentPostList } from "PostList/hooks/useRecentPostList";
import { usePinnedPostList } from "PostList/hooks/usePinnedPostList";
import { useFetchUser } from "Utils/hooks/useFetchUser";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const { userInfo, isLoading } = useFetchUser();

  const { recentPostList, isRecentPostLoading } = useRecentPostList({
    page: 1,
    size: 5,
  });
  const { pinnedPostList, isPinnedPostLoading } = usePinnedPostList({
    page: 1,
    size: 5,
  });

  if (!userInfo || !recentPostList || !pinnedPostList) return null;

  if (isLoading || isRecentPostLoading || isPinnedPostLoading)
    return <Loading />;

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
