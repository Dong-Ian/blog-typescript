import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/post.module.css";
import { AuthPostProps } from "Post/types/Post.type";
import deletePost from "Post/services/deletePost.service";

const DeleteButton: React.FC<AuthPostProps> = ({ postSeq }) => {
  const navigate = useNavigate();

  async function handleDeletePost() {
    if (window.confirm("글을 삭제하시겠습니까?")) {
      const result = await deletePost({ postSeq });
      if (result.result) {
        alert("포스트가 삭제되었습니다.");
        navigate("/postlist");
        return;
      }

      alert("삭제가 완료되지 않았습니다.");
      return;
    }

    return;
  }
  return (
    <div className={styles.btn}>
      <button onClick={handleDeletePost}>삭제</button>
    </div>
  );
};

export default DeleteButton;
