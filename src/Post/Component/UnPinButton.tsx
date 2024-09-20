import React from "react";

import styles from "../Style/post.module.css";

import { PostControlProps } from "Post/Type/PostType";

import UnPinFunction from "Post/Function/UnPinFunction";

const UnPinButton: React.FC<PostControlProps> = ({
  token,
  postSeq,
  setIsChangePinnedState,
}) => {
  async function UnPin() {
    const result = await UnPinFunction({ token, postSeq });

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
      <button onClick={UnPin}>고정 해제하기</button>
    </div>
  );
};

export default UnPinButton;
