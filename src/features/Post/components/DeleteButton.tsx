import React from "react";
import styles from "../styles/post.module.css";
import { AuthPostProps } from "features/Post/types/Post.type";
import { useDeletePost } from "features/Post/hooks/useDeletePost";

const DeleteButton: React.FC<AuthPostProps> = ({ postSeq }) => {
  const handleDeletePost = useDeletePost({ postSeq });

  return (
    <div className={styles.btn}>
      <button onClick={handleDeletePost}>삭제</button>
    </div>
  );
};

export default DeleteButton;
