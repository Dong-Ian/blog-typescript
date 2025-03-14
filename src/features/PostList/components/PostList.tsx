import React from "react";
import { useNavigate } from "react-router-dom";
import * as cheerio from "cheerio";
import styles from "../styles/postlist.module.css";
import {
  PostListProps,
  CategoryRenderProps,
  TitleRenderProps,
  ContentsRenderProps,
  DateTimeRenderProps,
} from "features/PostList/types/PostList.type";
import { useResize } from "features/Post/hooks/useResize";

const CategoryRender: React.FC<CategoryRenderProps> = ({
  category,
  isMobileScreen,
}) => (
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

const TitleRender: React.FC<TitleRenderProps> = ({ title, isMobileScreen }) => (
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

const ContentsRender: React.FC<ContentsRenderProps> = ({ contents }) => {
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

  // HTML 태그로부터 텍스트 추출 후 공백 정리
  transformedText = transformedText.replace(/\s+/g, " ").trim();

  // 마크다운 태그 제거 (예: **bold**, *italic*, [link](url), # Heading, - List 등)
  transformedText = transformedText
    .replace(/(\*\*|__)(.*?)\1/g, "$2") // **bold** or __bold__
    .replace(/(\*|_)(.*?)\1/g, "$2") // *italic* or _italic_
    .replace(/~~(.*?)~~/g, "$1") // ~~strikethrough~~
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1") // [text](link)
    .replace(/(#+\s?|>\s?|\-|\*\s?|\d+\.\s?)/g, "") // # Heading, > Blockquote, - List, 1. List
    .replace(/(```[\s\S]*?```|`.*?`)/g, ""); // ```code block``` or `inline code`

  // 글자 100자 제한 및 더보기 처리
  const slicedText = transformedText.slice(0, 200);

  return (
    <div className={styles.contents}>
      <p>
        {slicedText}
        {transformedText.length > 200 && (
          <span className={styles.more}> 더보기...</span>
        )}
      </p>
    </div>
  );
};

const DateTimeRender: React.FC<DateTimeRenderProps> = ({ reg, viewed }) => {
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
  const isMobileScreen = useResize(500);

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
