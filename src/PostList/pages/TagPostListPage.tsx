import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../styles/postlist.module.css";
import Header from "Utils/components/Header";
import BackButton from "Utils/components/BackButton";
import Account from "Main/components/Account";
import PostList from "PostList/components/PostList";
import PaginationComponent from "PostList/components/PaginationComponent";
import { useAccount } from "Utils/hooks/useAccount";
import { useTagPostList } from "PostList/hooks/useTagPostList";

const TagPostListPage: React.FC = () => {
  const location = useLocation();
  const { tag } = location.state || {};
  const userInfo = useAccount();
  const { postList, totalCount, handleGetTagPostList } = useTagPostList({
    tag,
  });
  const [activePage, setActivePage] = useState<number>(1);

  const handlePageChange = (e: number) => {
    handleGetTagPostList({ page: e });
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

          <p className={styles.box_title}>{tag}</p>
          <PostList postList={postList} />
          <PaginationComponent
            totalCount={totalCount}
            onChange={handlePageChange}
            itemsCountPerPage={5}
            activePage={activePage}
          />
        </div>
      </>
    );
  }
};

export default TagPostListPage;
