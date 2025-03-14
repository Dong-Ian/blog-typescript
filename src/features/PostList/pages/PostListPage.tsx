import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styles from "../styles/postlist.module.css";
import Account from "features/Main/components/Account";
import PostList from "features/PostList/components/PostList";
import PaginationComponent from "features/PostList/components/PaginationComponent";
import Header from "utils/components/Header";
import BackButton from "utils/components/BackButton";
import Loading from "utils/components/Loading";
import { useRecentPostList } from "features/PostList/hooks/useRecentPostList";
import { useFetchUser } from "utils/hooks/useFetchUser";

const PostListPage: React.FC = () => {
  const { userInfo } = useFetchUser();
  const [activePage, setActivePage] = useState<number>(1);

  const {
    recentPostList,
    totalCount,
    isRecentPostLoading,
    refetchRecentPostList,
  } = useRecentPostList({ page: activePage, size: 5 });

  const handlePageChange = (e: number) => {
    setActivePage(e);
  };

  useEffect(() => {
    refetchRecentPostList();
    window.scrollTo(0, 0);
  }, [activePage, refetchRecentPostList]);

  if (userInfo && recentPostList) {
    return (
      <>
        <Helmet title={userInfo.title} />
        <Header />
        <div className={styles.outer_post_box}>
          <div style={{ marginLeft: "30px" }}>
            <BackButton />
          </div>

          <div className={styles.account_box}>
            {userInfo && <Account userInfo={userInfo} />}
          </div>

          <p className={styles.box_title}>전체 게시글</p>

          {isRecentPostLoading ? (
            <Loading />
          ) : recentPostList.length !== 0 ? (
            <>
              <PostList postList={recentPostList} />
              <PaginationComponent
                totalCount={totalCount}
                onChange={handlePageChange}
                itemsCountPerPage={5}
                activePage={activePage}
              />
            </>
          ) : (
            <div className={styles.null_post}>고정된 게시글이 없습니다</div>
          )}
        </div>
      </>
    );
  }
  return <Loading />;
};

export default PostListPage;
