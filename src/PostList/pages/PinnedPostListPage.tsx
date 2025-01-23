import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styles from "../styles/postlist.module.css";
import Account from "Main/components/Account";
import PostList from "PostList/components/PostList";
import PaginationComponent from "PostList/components/PaginationComponent";
import Header from "Utils/components/Header";
import BackButton from "Utils/components/BackButton";
import Loading from "Utils/components/Loading";
import { usePinnedPostList } from "PostList/hooks/usePinnedPostList";
import { useFetchUser } from "Utils/hooks/useFetchUser";

const PinnedPostListPage: React.FC = () => {
  const { userInfo } = useFetchUser();
  const [activePage, setActivePage] = useState<number>(1);
  const {
    pinnedPostList,
    totalCount,
    isPinnedPostLoading,
    refetchPinnedPostList,
  } = usePinnedPostList({ page: activePage, size: 5 });

  const handlePageChange = (e: number) => {
    setActivePage(e);
  };

  useEffect(() => {
    refetchPinnedPostList();
    window.scrollTo(0, 0);
  }, [activePage, refetchPinnedPostList]);

  if (userInfo && pinnedPostList) {
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

          <p className={styles.box_title}>고정 게시글</p>
          {isPinnedPostLoading ? (
            <Loading />
          ) : pinnedPostList.length !== 0 ? (
            <>
              <PostList postList={pinnedPostList} />
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

export default PinnedPostListPage;
