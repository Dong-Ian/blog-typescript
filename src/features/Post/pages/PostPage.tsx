import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "../styles/post.module.css";
import Account from "features/Main/components/Account";
import Category from "features/Post/components/Category";
import Title from "features/Post/components/Title";
import Tag from "features/Post/components/Tag";
import DateTimeRender from "features/Post/components/DateTime";
import AdminButtonRender from "features/Post/components/AdminButtonRender";
import Contents from "features/Post/components/Contents";
import Comment from "features/Post/components/Comment";
import Header from "utils/components/Header";
import BackButton from "utils/components/BackButton";
import Loading from "utils/components/Loading";
import { useGetPost } from "features/Post/hooks/useGetPost";
import { useResize } from "features/Post/hooks/useResize";
import { usePinnedState } from "features/Post/hooks/usePinnedState";
import { useCheckUser } from "utils/hooks/useChcekUser";
import { useFetchUser } from "utils/hooks/useFetchUser";

const PostPage: React.FC = () => {
  const { postSeq } = useParams();
  const navigate = useNavigate();
  const { userInfo } = useFetchUser();
  const { post, isLoading } = useGetPost({ postSeq });
  const isMobileScreen = useResize(500);
  const { isChangePinnedState, togglePinnedState } = usePinnedState();
  const { isValidUser, isCheckUserLoading } = useCheckUser();

  useEffect(() => {
    window.scrollTo(0, 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChangePinnedState]);

  if (!post || !postSeq || !userInfo || isLoading || isCheckUserLoading)
    return <Loading />;

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
