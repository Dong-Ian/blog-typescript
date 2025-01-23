import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../styles/postlist.module.css";
import Account from "Main/components/Account";
import PostList from "PostList/components/PostList";
import PaginationComponent from "PostList/components/PaginationComponent";
import Header from "Utils/components/Header";
import BackButton from "Utils/components/BackButton";
import Loading from "Utils/components/Loading";
import { useTagPostList } from "PostList/hooks/useTagPostList";
import { useFetchUser } from "Utils/hooks/useFetchUser";

const TagPostListPage: React.FC = () => {
  const location = useLocation();
  const { tag } = location.state || {};
  const { userInfo } = useFetchUser();
  const [activePage, setActivePage] = useState<number>(1);

  const { tagPostList, totalCount, isTagPostLoading, refetchTagPostList } =
    useTagPostList({ page: activePage, size: 5, tag });

  const handlePageChange = (e: number) => {
    setActivePage(e);
  };

  useEffect(() => {
    refetchTagPostList();
    window.scrollTo(0, 0);
  }, [activePage, refetchTagPostList]);

  if (userInfo && tagPostList) {
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
          {isTagPostLoading ? (
            <Loading />
          ) : (
            <>
              <PostList postList={tagPostList} />
              <PaginationComponent
                totalCount={totalCount}
                onChange={handlePageChange}
                itemsCountPerPage={5}
                activePage={activePage}
              />
            </>
          )}
        </div>
      </>
    );
  }
  return <Loading />;
};

export default TagPostListPage;
