import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../Style/postlist.module.css";
import { UserInfoInterface } from "Main/types/Main.type";
import { PostInterface } from "PostList/Type/PostListType";
import getAccount from "Main/services/getAccount.service";
import { GetRecentPostListFunction } from "PostList/Function/GetPostListFunction";
import Header from "Utils/Component/Header";
import BackButton from "Utils/Component/BackButton";
import Account from "Main/components/Account";
import PostList from "PostList/Component/PostList";
import PaginationComponent from "PostList/Component/PaginationComponent";

const PostListPage: React.FC = () => {
  const navigate = useNavigate();

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
    const result = await GetRecentPostListFunction({ page: page, size: 5 });

    if (result.result) {
      setPostList(result.unpinnedPostList);
      setTotalCount(Number(result.postCount));
      return;
    }

    alert("전체 글을 불러오지 못하였습니다.");
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
