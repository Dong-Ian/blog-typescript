import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../Style/post.module.css";

import { TagListProps } from "Post/Type/PostType";

const Tag: React.FC<TagListProps> = ({ tagList }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.tag}>
      {tagList.map((tag) => {
        const trimmedStr = tag.trim();
        return (
          <div
            onClick={() =>
              navigate(`/postlist/tag/${tag}`, {
                state: { tag: tag },
              })
            }
            key={tag}
          >
            <p># {trimmedStr}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tag;
