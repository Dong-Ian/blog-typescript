import React from "react";
import styles from "../styles/post.module.css";
import { AdminProps } from "Post/types/Post.type";
import DeleteButton from "./DeleteButton";
import EditPostButton from "./EditPostButton";
import UnPinButton from "./UnPinButton";
import PinButton from "./PinButton";

const AdminButtonRender: React.FC<AdminProps> = ({
  isLoggedIn,
  postSeq,
  post,
  togglePinnedState,
}) => {
  return (
    <>
      {isLoggedIn && (
        <div className={styles.btn_box}>
          <DeleteButton postSeq={postSeq} />
          <EditPostButton postSeq={postSeq} />
          {post.isPinned === "1" ? (
            <UnPinButton
              postSeq={postSeq}
              togglePinnedState={togglePinnedState}
            />
          ) : (
            <PinButton
              postSeq={postSeq}
              togglePinnedState={togglePinnedState}
            />
          )}
        </div>
      )}
    </>
  );
};

export default AdminButtonRender;
