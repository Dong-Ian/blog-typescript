import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as cheerio from "cheerio";

import styles from "../Style/postlist.module.css";

import { PostInterface } from "../Type/PostListType";

interface PostListProps {
  postList: PostInterface[];
}

const CategoryRender: React.FC<{
  category: string;
  isMobileScreen: boolean;
}> = ({ category, isMobileScreen }) => (
  <div
    className={
      isMobileScreen
        ? `${styles.category} ${styles.small_category}`
        : styles.category
    }
  >
    <p>{category}</p>
  </div>
);

const TitleRender: React.FC<{ title: string; isMobileScreen: boolean }> = ({
  title,
  isMobileScreen,
}) => (
  <div
    className={
      isMobileScreen
        ? `${styles.title} ${styles.small_title}`
        : `${styles.title} ${styles.big_title}`
    }
  >
    <p>{title}</p>
  </div>
);

const ContentsRender: React.FC<{ contents: string }> = ({ contents }) => {
  const $ = cheerio.load(contents);
  let transformedText = "";

  const traverse = (node: any) => {
    node.contents().each((_: number, child: any) => {
      if (child.type === "text") {
        transformedText += $(child).text();
      } else if (child.type === "tag") {
        traverse($(child));
        transformedText += " ";
      }
    });
  };

  traverse($.root());

  transformedText = transformedText.replace(/\s+/g, " ").trim();
  const slicedText = transformedText.slice(0, 100);

  return (
    <div className={styles.contents}>
      <p className={styles.post}>
        {slicedText}

        {transformedText.length > 100 && (
          <span className={styles.more}> 더보기...</span>
        )}
      </p>
    </div>
  );
};

const DateTimeRender: React.FC<{ reg: string; viewed: string }> = ({
  reg,
  viewed,
}) => {
  const date = new Date(reg);
  date.setHours(date.getHours() + 9);

  const formattedDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;

  return (
    <div className={styles.date}>
      <p>
        {formattedDate}
        <span> | 조회수 {viewed}</span>
      </p>
    </div>
  );
};

const PostList: React.FC<PostListProps> = ({ postList }) => {
  const navigate = useNavigate();
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const handleResize = () => setIsMobileScreen(window.innerWidth <= 500);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {postList.map((post, index) => (
        <div key={post.postSeq}>
          <div
            className={styles.postlist_box}
            onClick={() =>
              navigate(`/post/${post.postSeq}`, {
                state: { postSeq: post.postSeq },
              })
            }
          >
            <CategoryRender
              category={post.categoryName}
              isMobileScreen={isMobileScreen}
            />
            <TitleRender
              title={post.postTitle}
              isMobileScreen={isMobileScreen}
            />
            <ContentsRender contents={post.postContents} />
            <DateTimeRender reg={post.regDate} viewed={post.viewed} />
          </div>

          <div
            className={index !== postList.length - 1 ? styles.hr : styles.hr2}
          />
        </div>
      ))}
    </>
  );
};

export default PostList;
