import styles from "../styles/main.module.css";
import PostList from "features/PostList/components/PostList";
import { PostListProps } from "features/Main/types/Main.type";

const PinnedPostList: React.FC<PostListProps> = ({ postList, navigate }) => {
  return (
    <div className={styles.pinned_box}>
      <div className={styles.btn} onClick={() => navigate("/postlist/pinned")}>
        {"고정글 >"}
      </div>
      {postList && postList.length !== 0 ? (
        <PostList postList={postList} />
      ) : (
        <div className={styles.null_post}>등록된 게시글이 없습니다</div>
      )}
    </div>
  );
};

export default PinnedPostList;
