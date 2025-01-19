import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/post.module.css";
import { PostSeqProps } from "Post/types/Post.type";

const EditPostButton: React.FC<PostSeqProps> = ({ postSeq }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.btn}>
      <button onClick={() => navigate(`/edit/${postSeq}`)}>수정</button>
    </div>
  );
};

export default EditPostButton;
