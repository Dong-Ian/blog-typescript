import React from "react";
import styles from "Post/styles/post.module.css";
import unpin from "Post/services/unpin.service";
import { PostControlProps } from "Post/types/Post.type";

const UnPinButton: React.FC<PostControlProps> = ({
  postSeq,
  togglePinnedState,
}) => {
  const handleUnPin = async () => {
    const result = await unpin({ postSeq });

    if (result.result) {
      alert("게시글이 고정해제 되었습니다.");
      togglePinnedState();
      return;
    }

    alert("서버 오류로 게시글이 고정해제되지 않았습니다.");
    return;
  };

  return (
    <div className={styles.btn}>
      <button onClick={handleUnPin}>고정 해제하기</button>
    </div>
  );
};

export default UnPinButton;
