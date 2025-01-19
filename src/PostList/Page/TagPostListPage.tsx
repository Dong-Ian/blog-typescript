import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../Style/postlist.module.css";
import { UserInfoInterface } from "Main/Type/MainType";
import { PostInterface } from "PostList/Type/PostListType";
import getAccount from "Main/services/getAccount.service";
import { GetTagPostListFunction } from "PostList/Function/GetPostListFunction";
import Header from "Utils/Component/Header";
import BackButton from "Utils/Component/BackButton";
import Account from "Main/components/Account";
import PostList from "PostList/Component/PostList";
import PaginationComponent from "PostList/Component/PaginationComponent";

const TagPostListPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { tag } = location.state || {};

  const [userInfo, setUserInfo] = useState<UserInfoInterface | null>(null);
  const [postList, setPostList] = useState<PostInterface[] | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(1);

  async function handleGetUserInfo() {
    const result = await getAccount();

    if (result.result) {
      setUserInfo(result.profileResult);
      return;
    }

    alert("사용자 정보를 불러오지 못했습니다.");
    return;
  }

  async function GetPostList({ page }: { page: number }) {
    const result = await GetTagPostListFunction({
      page: page,
      size: 5,
      tag: tag,
    });

    if (result.result) {
      setPostList(result.postList);
      setTotalCount(Number(result.postCount));
      return;
    }

    alert("글을 불러오지 못하였습니다.");
    navigate("/");
    return;
  }

  function handlePageChange(e: number) {
    GetPostList({ page: e });
    setActivePage(e);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    handleGetUserInfo();
    GetPostList({ page: 1 });
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
