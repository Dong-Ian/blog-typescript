import React from "react";
import styles from "../Style/post.module.css";
import { TitleProps } from "Post/Type/PostType";

const Title: React.FC<TitleProps> = ({ title, isMobileScreen }) => {
  return (
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
};

export default Title;
