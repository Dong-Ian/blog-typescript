import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "Post/styles/post.module.css";
import Account from "Main/components/Account";
import Category from "Post/components/Category";
import Title from "Post/components/Title";
import Tag from "Post/components/Tag";
import DateTimeRender from "Post/components/DateTime";
import AdminButtonRender from "Post/components/AdminButtonRender";
import Contents from "Post/components/Contents";
import Comment from "Post/components/Comment";
import Header from "Utils/components/Header";
import BackButton from "Utils/components/BackButton";
import { useGetPost } from "Post/hooks/useGetPost";
import { useResize } from "Post/hooks/useResize";
import { usePinnedState } from "Post/hooks/usePinnedState";
import { useCheckUser } from "Utils/hooks/useChcekUser";
import { useFetchUser } from "Utils/hooks/useFetchUser";

const PostPage: React.FC = () => {
  const { postSeq } = useParams();
  const navigate = useNavigate();
  const { userInfo } = useFetchUser();
  const { post } = useGetPost({ postSeq });
  const isMobileScreen = useResize(500);
  const { isChangePinnedState, togglePinnedState } = usePinnedState();
  const { isValidUser, handleCheckUser } = useCheckUser();

  useEffect(() => {
    handleCheckUser();
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
            isLoggedIn={isValidUser}
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
              isLoggedIn={isValidUser}
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
