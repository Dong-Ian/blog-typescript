import React from "react";
import styles from "../styles/post.module.css";
import { TitleProps } from "Post/types/Post.type";

const Title: React.FC<TitleProps> = ({ title, isMobileScreen }) => {
  return (
    <div
      className={
        isMobileScreen
          ? `${styles.title} ${styles.small_title}`
          : `${styles.title} ${styles.big_title}`
      }
    >
      <h1 className="post-title">{title}</h1>
    </div>
  );
};

export default Title;
