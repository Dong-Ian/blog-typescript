import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "Utils/Atom/Atom";
import styles from "../Style/post.module.css";
import { UserInfoInterface } from "Main/types/Main.type";
import { PostInterface } from "Post/types/Post.type";
import getAccount from "Main/services/getAccount.service";
import getPost from "Post/services/getPost.service";
import Header from "Utils/components/Header";
import Account from "Main/components/Account";
import BackButton from "Utils/components/BackButton";
import Title from "Post/components/Title";
import Tag from "Post/components/Tag";
import DateTimeRender from "Post/components/DateTime";
import AdminButtonRender from "Post/components/AdminButtonRender";
import Contents from "Post/components/Contents";
import Comment from "Post/components/Comment";

const PostPage: React.FC = () => {
  const { postSeq } = useParams();
  const navigate = useNavigate();

  const isLoggedIn = useRecoilValue(isLoggedInState);

  const [userInfo, setUserInfo] = useState<UserInfoInterface>();
  const [post, setPost] = useState<PostInterface | null>(null);
  const [isChangePinnedState, setIsChangePinnedState] =
    useState<boolean>(false);

  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false);

  function handleResize() {
    setIsMobileScreen(window.innerWidth <= 500);
  }

  async function handleGetAccount() {
    const result = await getAccount();

    if (result.result) {
      setUserInfo(result.profileResult);

      return;
    }

    alert("사용자 정보를 불러오지 못했습니다.");
    return;
  }

  async function handleGetPost() {
    if (!postSeq) {
      alert("게시글 번호가 유효하지 않습니다.");
      navigate("/");
      return;
    }

    const result = await getPost({ postSeq: postSeq });

    if (result.result) {
      setPost(result.postList);

      return;
    }

    alert("포스트를 불러오는 중 오류가 발생하였습니다.");
    navigate("/postlist");

    return;
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    handleGetAccount();
    handleGetPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChangePinnedState]);

  if (post) {
    return (
      <>
        <Helmet title={post.postTitle} />
        <Header />

        <div className={styles.outer_post_box}>
          <div className={styles.account_box}>
            {userInfo && <Account userInfo={userInfo} />}
          </div>
          <div className={styles.post_box}>
            <div className={styles.back_button}>
              <BackButton />
            </div>
            {post.category !== "NULL" ? (
              <div
                className={
                  isMobileScreen
                    ? `${styles.category} ${styles.small_category}`
                    : `${styles.category} ${styles.big_category}`
                }
                onClick={() =>
                  navigate(`/postlist/category/${post.category}`, {
                    state: { category: post.category },
                  })
                }
              >
                <p>{post.category}</p>
              </div>
            ) : (
              <div className={styles.category}></div>
            )}
            <Title title={post.postTitle} isMobileScreen={isMobileScreen} />
            <Tag tagList={post.tags} />
            <DateTimeRender reg={post.regDate} viewed={post.viewed} />
            {postSeq && (
              <AdminButtonRender
                isLoggedIn={isLoggedIn}
                postSeq={postSeq}
                post={post}
                setIsChangePinnedState={setIsChangePinnedState}
              />
            )}
            <hr className={styles.hr} />
            <Contents post={post} />
            <hr className={styles.hr} />
            <div className={styles.button_div}>
              <div
                className={styles.bottom_back_button}
                onClick={() => {
                  navigate(-1);
                }}
              >
                <button>목록으로</button>
              </div>
              {postSeq && (
                <AdminButtonRender
                  isLoggedIn={isLoggedIn}
                  postSeq={postSeq}
                  post={post}
                  setIsChangePinnedState={setIsChangePinnedState}
                />
              )}
            </div>
          </div>
          <Comment post={post} />
          <div className={styles.comment} />
        </div>
      </>
    );
  }
};

export default PostPage;
