import React from "react";
import styles from "../styles/post.module.css";
import DeleteButton from "Post/components/DeleteButton";
import EditPostButton from "Post/components/EditPostButton";
import UnPinButton from "Post/components/UnPinButton";
import PinButton from "Post/components/PinButton";
import { AdminProps } from "Post/types/Post.type";

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
