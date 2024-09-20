import React from "react";

import styles from "../Style/post.module.css";

import { PostControlProps } from "Post/Type/PostType";

import PinFunction from "Post/Function/PinFunction";

const PinButton: React.FC<PostControlProps> = ({
  token,
  postSeq,
  setIsChangePinnedState,
}) => {
  async function Pin() {
    const result = await PinFunction({ token, postSeq });

    if (result.result) {
      alert("게시글이 고정되었습니다.");
      setIsChangePinnedState((prev) => !prev);
      return;
    }

    alert("서버 오류로 게시글이 고정되지 않았습니다.");
    return;
  }

  return (
    <div className={styles.btn}>
      <button onClick={Pin}>게시글 고정하기</button>
    </div>
  );
};

export default PinButton;
