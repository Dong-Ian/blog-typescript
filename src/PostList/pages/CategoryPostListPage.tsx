import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../styles/postlist.module.css";
import { UserInfoInterface } from "Main/types/Main.type";
import { PostInterface } from "PostList/types/PostList.type";
import getAccount from "Main/services/getAccount.service";
import { getCategoryPostList } from "PostList/services/getPostList.service";
import Header from "Utils/components/Header";
import BackButton from "Utils/components/BackButton";
import Account from "Main/components/Account";
import PostList from "PostList/components/PostList";
import PaginationComponent from "PostList/components/PaginationComponent";

const CategoryPostListPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { category } = location.state || {};

  const [userInfo, setUserInfo] = useState<UserInfoInterface | null>(null);
  const [postList, setPostList] = useState<PostInterface[] | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(1);

  const handleGetUserInfo = async () => {
    const result = await getAccount();

    if (result.result) {
      setUserInfo(result.profileResult);
      return;
    }

    alert("사용자 정보를 불러오지 못했습니다.");
    return;
  };

  const handleGetPostList = async ({ page }: { page: number }) => {
    const result = await getCategoryPostList({
      page: page,
      size: 5,
      category: category,
    });

    if (result.result) {
      setPostList(result.postList);
      setTotalCount(Number(result.postCount));
      return;
    }

    alert("글을 불러오지 못하였습니다.");
    navigate("/");
    return;
  };

  const handlePageChange = (e: number) => {
    handleGetPostList({ page: e });
    setActivePage(e);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleGetUserInfo();
    handleGetPostList({ page: 1 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

          <p className={styles.box_title}>{category}</p>
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

export default CategoryPostListPage;
