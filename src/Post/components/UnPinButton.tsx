import React from "react";
import styles from "../styles/post.module.css";
import { PostControlProps } from "Post/types/Post.type";
import unpin from "Post/services/unpin.service";

const UnPinButton: React.FC<PostControlProps> = ({
  postSeq,
  setIsChangePinnedState,
}) => {
  async function handleUnPin() {
    const result = await unpin({ postSeq });

    if (result.result) {
      alert("게시글이 고정해제 되었습니다.");
      setIsChangePinnedState((prev) => !prev);
      return;
    }

    alert("서버 오류로 게시글이 고정해제되지 않았습니다.");
    return;
  }

  return (
    <div className={styles.btn}>
      <button onClick={handleUnPin}>고정 해제하기</button>
    </div>
  );
};

export default UnPinButton;
