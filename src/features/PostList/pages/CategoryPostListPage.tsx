import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../styles/postlist.module.css";
import Account from "features/Main/components/Account";
import PostList from "features/PostList/components/PostList";
import PaginationComponent from "features/PostList/components/PaginationComponent";
import Header from "utils/components/Header";
import Loading from "utils/components/Loading";
import BackButton from "utils/components/BackButton";
import { useFetchUser } from "utils/hooks/useFetchUser";
import { useCagtegoryPostList } from "features/PostList/hooks/useCategoryPostList";

const CategoryPostListPage: React.FC = () => {
  const location = useLocation();
  const { category } = location.state || {};
  const { userInfo } = useFetchUser();
  const [activePage, setActivePage] = useState<number>(1);
  const {
    categoryPostList,
    totalCount,
    isCategoryPostLoading,
    refetchCategoryPostList,
  } = useCagtegoryPostList({ page: activePage, size: 5, category });

  const handlePageChange = (e: number) => {
    setActivePage(e);
  };

  useEffect(() => {
    refetchCategoryPostList();
    window.scrollTo(0, 0);
  }, [activePage, refetchCategoryPostList]);

  if (userInfo && categoryPostList) {
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

          <p className={styles.box_title}>{category}</p>
          {isCategoryPostLoading ? (
            <Loading />
          ) : (
            <>
              <PostList postList={categoryPostList} />
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

export default CategoryPostListPage;
