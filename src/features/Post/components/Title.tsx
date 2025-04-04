import { TitleProps } from "features/Post/types/Post.type";
import React from "react";
import styles from "../styles/post.module.css";

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
