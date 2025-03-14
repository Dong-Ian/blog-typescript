import React from "react";
import styles from "../styles/post.module.css";
import DeleteButton from "features/Post/components/DeleteButton";
import EditPostButton from "features/Post/components/EditPostButton";
import UnPinButton from "features/Post/components/UnPinButton";
import PinButton from "features/Post/components/PinButton";
import { AdminProps } from "features/Post/types/Post.type";

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
