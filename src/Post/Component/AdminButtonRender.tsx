import React from "react";
import styles from "../Style/post.module.css";
import { AdminProps } from "Post/Type/PostType";
import DeleteButton from "./DeleteButton";
import EditPostButton from "./EditPostButton";
import UnPinButton from "./UnPinButton";
import PinButton from "./PinButton";

const AdminButtonRender: React.FC<AdminProps> = ({
  isLoggedIn,
  postSeq,
  post,
  setIsChangePinnedState,
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
              setIsChangePinnedState={setIsChangePinnedState}
            />
          ) : (
            <PinButton
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
