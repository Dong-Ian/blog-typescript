import React from "react";
import styles from "../styles/post.module.css";
import { PostControlProps } from "features/Post/types/Post.type";
import pin from "features/Post/services/pin.service";

const PinButton: React.FC<PostControlProps> = ({
  postSeq,
  togglePinnedState,
}) => {
  const handlePin = async () => {
    const result = await pin({ postSeq });

    if (result.result) {
      alert("게시글이 고정되었습니다.");
      togglePinnedState();
      return;
    }

    alert("서버 오류로 게시글이 고정되지 않았습니다.");
    return;
  };

  return (
    <div className={styles.btn}>
      <button onClick={handlePin}>게시글 고정하기</button>
    </div>
  );
};

export default PinButton;
