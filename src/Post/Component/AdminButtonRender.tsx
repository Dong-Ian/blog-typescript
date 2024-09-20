import React from "react";

import styles from "../Style/post.module.css";

import { AdminProps } from "Post/Type/PostType";

import DeleteButton from "./DeleteButton";
import EditPostButton from "./EditPostButton";
import UnPinButton from "./UnPinButton";
import PinButton from "./PinButton";

const AdminButtonRender: React.FC<AdminProps> = ({
  isLoggedIn,
  token,
  postSeq,
  post,
  setIsChangePinnedState,
}) => {
  return (
    <>
      {isLoggedIn && (
        <div className={styles.btn_box}>
          <DeleteButton token={token} postSeq={postSeq} />
          <EditPostButton postSeq={postSeq} />
          {post.isPinned === "1" ? (
            <UnPinButton
              token={token}
              postSeq={postSeq}
              setIsChangePinnedState={setIsChangePinnedState}
            />
          ) : (
            <PinButton
              token={token}
              postSeq={postSeq}
              setIsChangePinnedState={setIsChangePinnedState}
            />
          )}
        </div>
      )}
    </>
  );
};

export default AdminButtonRender;
