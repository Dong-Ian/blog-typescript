import React from "react";
import styles from "../Style/post.module.css";

import { PostProps } from "Post/Type/PostType";

const HeaderTagList: React.FC<PostProps> = ({ post }) => {
  const applyStyles = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const headingElements = Array.from(doc.body.querySelectorAll("h1, h2")).map(
      (el, index) => {
        const level = el.tagName === "H1" ? 1 : 2;
        const id = `${el.tagName.toLowerCase()}-${index}`;
        el.id = id;
        return { text: el.textContent, id, level };
      }
    );

    return headingElements;
  };

  const headings = applyStyles(post.postContents);

  const handleHeadingClick = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const yPosition =
        element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      {headings.length > 0 && (
        <div className={styles.heading_list}>
          <h2>{post.postTitle.slice(0, 15)}...</h2>
          <ul>
            {headings.map(({ text, id, level }, index) => (
              <li
                key={index}
                onClick={() => handleHeadingClick(id)}
                className={level === 2 ? styles.h2Item : styles.h1Item}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderTagList;
