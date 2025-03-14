import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/post.module.css";
import { TagListProps } from "features/Post/types/Post.type";

const Tag: React.FC<TagListProps> = ({ tagList }) => {
  const navigate = useNavigate();

  return (
    <ul className={styles.tag}>
      {tagList.map((tag) => {
        const trimmedStr = tag.trim();

        return (
          <li
            key={tag}
            className={styles.tagItem}
            onClick={() =>
              navigate(`/postlist/tag/${tag}`, {
                state: { tag: tag },
              })
            }
          >
            <a href={`/postlist/tag/${tag}`} className={styles.tagLink}>
              # {trimmedStr}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tag;
