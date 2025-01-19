import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "Utils/atom/Atom";
import styles from "../styles/post.module.css";
import Header from "Utils/components/Header";
import Account from "Main/components/Account";
import BackButton from "Utils/components/BackButton";
import Category from "Post/components/Category";
import Title from "Post/components/Title";
import Tag from "Post/components/Tag";
import DateTimeRender from "Post/components/DateTime";
import AdminButtonRender from "Post/components/AdminButtonRender";
import Contents from "Post/components/Contents";
import Comment from "Post/components/Comment";
import { useAccount } from "Utils/hooks/useAccount";
import { useGetPost } from "Post/hooks/useGetPost";
import { useResize } from "Post/hooks/useResize";
import { usePinnedState } from "Post/hooks/usePinnedState";

const PostPage: React.FC = () => {
  const { postSeq } = useParams();
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const userInfo = useAccount();
  const { post, fetchGetPost } = useGetPost({ postSeq });
  const isMobileScreen = useResize(500);
  const { isChangePinnedState, togglePinnedState } = usePinnedState();

  useEffect(() => {
    fetchGetPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChangePinnedState]);

  if (!post || !postSeq || !userInfo) return null;

  return (
    <>
      <Helmet title={post.postTitle} />
      <Header />

      <div className={styles.outer_post_box}>
        <div className={styles.account_box}>
          <Account userInfo={userInfo} />
        </div>
        <div className={styles.post_box}>
          <div className={styles.back_button}>
            <BackButton />
          </div>

          <Category category={post.category} isMobileScreen={isMobileScreen} />
          <Title title={post.postTitle} isMobileScreen={isMobileScreen} />
          <Tag tagList={post.tags} />
          <DateTimeRender reg={post.regDate} viewed={post.viewed} />
          <AdminButtonRender
            isLoggedIn={isLoggedIn}
            postSeq={postSeq}
            post={post}
            togglePinnedState={togglePinnedState}
          />
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
            <AdminButtonRender
              isLoggedIn={isLoggedIn}
              postSeq={postSeq}
              post={post}
              togglePinnedState={togglePinnedState}
            />
          </div>
        </div>
        <Comment post={post} />
        <div className={styles.comment} />
      </div>
    </>
  );
};

export default PostPage;
