import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styles from "../styles/postlist.module.css";
import Header from "Utils/components/Header";
import BackButton from "Utils/components/BackButton";
import Account from "Main/components/Account";
import PostList from "PostList/components/PostList";
import PaginationComponent from "PostList/components/PaginationComponent";
import { useAccount } from "Utils/hooks/useAccount";
import { useRecentPostList } from "PostList/hooks/useRecentPostList";

const PostListPage: React.FC = () => {
  const { userInfo } = useAccount();
  const { postList, totalCount, handleGetRecentPostList } = useRecentPostList();
  const [activePage, setActivePage] = useState<number>(1);

  const handlePageChange = (e: number) => {
    handleGetRecentPostList({ page: e });
    setActivePage(e);
    window.scrollTo(0, 0);
  };

  if (userInfo && postList) {
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
          {postList.length !== 0 ? (
            <>
              <PostList postList={postList} />
              <PaginationComponent
                totalCount={totalCount}
                onChange={handlePageChange}
                itemsCountPerPage={5}
                activePage={activePage}
              />
            </>
          ) : (
            <div className={styles.null_post}>등록된 게시글이 없습니다</div>
          )}
        </div>
      </>
    );
  }
};

export default PostListPage;
